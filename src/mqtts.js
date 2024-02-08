const mqtt = require('mqtt')

module.exports = {
	// ##########################
	// #### mqtt functions ####
	// ##########################

	init_mqtt: function () {
		if (this.config.host) {
			var self = this;
			self.log('debug', 'self.config.host: ' + self.config.host)
			const brokerUrl = `ws://${self.config.host}/mqtt`

			self.mqttClient = mqtt.connect(brokerUrl, {
				username: self.config.username,
				password: self.config.password,
			})

			self.mqttClient.on('connect', () => {
				self.updateStatus('ok')

				self.initialSubscribe()
			})

			self.mqttClient.on('error', (err) => {
				self.updateStatus('unknown_error')
				let showSpecific = false
				Object.keys(err).forEach(function (key) {
					if (key === 'code') {
						if (err[key] === 'ECONNREFUSED') {
							self.log('error', 'Connection refused. Is this the right IP address?')
							showSpecific = true
						}
					}
				})

				if (!showSpecific) {
					self.log('error', err.toString())
				}

				self.mqttClient.end()
			})

			self.mqttClient.on('offline', () => {
				self.updateStatus('disconnected', 'Offline')
			})

			self.mqttClient.on('message', (topic, message) => {
				try {
					if (topic) {
						self.handleMqttMessage(topic, message ? message.toString() : '')
					}
				} catch (e) {
					self.log('error', `Handle message failed: ${e.toString()}`)
				}
			})
		}
	},

	initialSubscribe: function () {
		this.subscribeToTopic('System/Product', '{}')
		this.subscribeToTopic(this.recPrefix + '/Info', '{}')
		this.subscribeToTopic(this.streamPrefix + '/Info', '{}')
	},

	handleMqttMessage: function (topic, message) {
		if (message !== 'ok') {
			try {
				message = JSON.parse(message)

				switch (topic) {
					case 'System/Product':
						this.data.deviceName = message['name']
						break
					case this.recPrefix + '/Info':
						this.data.recordingState = message['State']
						this.data.recordingPercentUsed = message['Percent Used']
						this.data.recordingSize = message['Size']
						this.data.recordingUsed = message['Used']
						this.data.recordingAvailable = message['Available']
						this.data.recordingUptime = message['Uptime']
						if (message['State Details']) {
							this.log('info', message['State Details'])
						}
						this.checkFeedbacks('recordingState')
						break
					case this.streamPrefix + '/Info':
						this.data.streamingState = message['State']
						this.data.streamingUptime = message['Uptime']
						if (message['State Details']) {
							this.log('info', message['State Details'])
						}
						this.checkFeedbacks('streamingState')
						break
					default:
						break
				}

				this.checkVariables()
			} catch (error) {
				this.log('error', `Unable to parse incoming message from device.`)
			}
		}
	},

	subscribeToTopic: function (topic, data) {
		this.mqttClient.subscribe(topic, (err) => {
			if (!err) {
				this.log('debug', `Successfully subscribed to topic: ${topic}`)
				return
			}

			this.log('debug', `Failed to subscribe to topic: ${topic}. Error: ${err}`)
		})
	},

	publishMessage: function (topic, payload, qos, retain) {
		var self = this;
		self.log('debug', 'Sending MQTT message', [topic, payload])

		self.mqttClient.publish(topic, payload, { qos: qos, retain: retain }, function (err) {
			if (err) {
				self.log('debug', err)
			}
		})
	},

	sendCommand: function (topic, payload) {
		topic = topic + '/' + new Date().valueOf().toString()

		this.subscribeToTopic(topic + '/+', {})
		this.publishMessage(topic, JSON.stringify(payload), 2, true)
	},
}
