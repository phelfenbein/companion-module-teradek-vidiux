const { InstanceBase, Regex, InstanceStatus, runEntrypoint } = require('@companion-module/base')
const actions = require('./actions.js')
const presets = require('./presets.js')
const feedbacks = require('./feedbacks.js')
const variables = require('./variables.js')
const MQTTs = require('./mqtts.js')
const UpgradeScripts = require('./upgrades.js')

class vidiuxInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		// Assign the methods from the listed files to this class
		Object.assign(this, {
			...actions,
			...presets,
			...feedbacks,
			...variables,
			...MQTTs,
		})

		this.mqttClient = null
		this.recPrefix = 'Session/0/Record'
		this.streamPrefix = 'Session/0/Stream/0'

		this.data = {
			deviceName: '',
			recordingState: 'Unknown',
			recordingPercentUsed: 'Unknown %',
			recordingSize: 'Unknown G',
			recordingUsed: 'Unknown G',
			recordingAvailable: 'Unknown G',
			recordingUptime: '00:00:00',
			streamingState: 'Unknown',
			streamingUptime: '00:00:00',
		}
	}

	async destroy() {
		this.mqttClient.end()
		this.log('debug', 'destroy ' + this.id)
	}

	async init(config) {
		this.config = config
		this.updateStatus('connecting')
		this.init_mqtt()
		this.initActions()
		this.initPresets()
		this.initVariables()
		this.checkVariables()
		this.initFeedbacks()
	}

	async configUpdated(config) {
		this.config = config
		this.updateStatus('unknown_error')
		this.init_mqtt()
		this.initActions()
		this.initPresets()
		this.initVariables()
		this.checkVariables()
		this.initFeedbacks()
		this.checkFeedbacks()
	}

	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module controls the Teradek VidiU X.',
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'IP Address',
				width: 4,
				regex: Regex.IP,
			},
			{
				type: 'textinput',
				id: 'username',
				label: 'Username',
				default: 'admin',
				width: 4,
			},
			{
				type: 'textinput',
				id: 'password',
				label: 'Password',
				default: 'admin',
				width: 4,
			},
		]
	}
}

runEntrypoint(vidiuxInstance, UpgradeScripts)
