module.exports = {
	// ##########################
	// #### Instance Actions ####
	// ##########################

	initActions: function () {
		let actions = {}

		actions.recordingControl = {
			name: 'Recording Control',
			options: [
				{
					type: 'dropdown',
					label: 'Command',
					id: 'command',
					default: 'start',
					choices: [
						{ id: 'start', label: 'Start' },
						{ id: 'stop', label: 'Stop' },
					],
				},
			],
			callback: async (action) => {
				this.sendCommand(this.recPrefix + '/' + action.options.command, {})
			},
		}

		actions.streamingControl = {
			name: 'Streaming Control',
			options: [
				{
					type: 'dropdown',
					label: 'Command',
					id: 'command',
					default: 'publish',
					choices: [
						{ id: 'publish', label: 'Publish' },
						{ id: 'unpublish', label: 'Unpublish' },
						{ id: 'Sharelink/publish', label: 'Sharelink Publish' },
						{ id: 'Sharelink/unpublish', label: 'Sharelink Unpublish' },
						{ id: 'broadcast', label: 'Broadcast' },
						{ id: 'halt', label: 'Halt' },
						{ id: 'cancel', label: 'Cancel' },
						{ id: 'preview', label: 'Preview' },
						{ id: 'endpreview', label: 'End Preview' },
						{ id: 'complete', label: 'Complete' },
					],
				},
			],
			callback: async (action) => {
				this.sendCommand(this.streamPrefix + '/' + action.options.command, {})
			},
		}

		this.setActionDefinitions(actions)
	},
}
