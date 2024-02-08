module.exports = {
	// ##########################
	// #### Define Variables ####
	// ##########################
	initVariables: function () {
		let variables = []

		variables.push({ variableId: 'device_name', name: 'Device Name' })

		variables.push({ variableId: 'recording_state', name: 'Recording State' })
		variables.push({ variableId: 'recording_percent', name: 'Recording % Used' })
		variables.push({ variableId: 'recording_size', name: 'Recording Drive Size' })
		variables.push({ variableId: 'recording_used', name: 'Recording Drive Used' })
		variables.push({ variableId: 'recording_available', name: 'Recording Drive Available' })
		variables.push({ variableId: 'recording_uptime', name: 'Recording Uptime' })

		variables.push({ variableId: 'streaming_state', name: 'Streaming State' })
		variables.push({ variableId: 'streaming_uptime', name: 'Streaming Uptime' })

		this.setVariableDefinitions(variables)
	},

	checkVariables: function () {
		try {
			this.setVariableValues({
				device_name: this.data.deviceName,
				recording_state: this.data.recordingState,
				recording_percent: this.data.recordingPercentUsed,
				recording_size: this.data.recordingSize,
				recording_used: this.data.recordingUsed,
				recording_available: this.data.recordingAvailable,
				recording_uptime: this.data.recordingUptime,
				streaming_state: this.data.streamingState,
				streaming_uptime: this.data.streamingUptime,
			})
		} catch (error) {
			this.log('error', 'Error parsing Variables: ' + String(error))
		}
	},
}
