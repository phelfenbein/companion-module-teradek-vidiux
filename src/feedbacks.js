const { combineRgb } = require('@companion-module/base')

module.exports = {
	// ##########################
	// #### Define Feedbacks ####
	// ##########################
	initFeedbacks: function () {
		let feedbacks = {}

		const foregroundColor = combineRgb(255, 255, 255) // White
		const foregroundColorBlack = combineRgb(0, 0, 0) // Black
		const backgroundColorRed = combineRgb(255, 0, 0) // Red
		const backgroundColorGreen = combineRgb(0, 255, 0) // Green
		const backgroundColorOrange = combineRgb(255, 102, 0) // Orange
		const backgroundColorBlue = combineRgb(0, 0, 255) // Blue
		const backgroundColorGray = combineRgb(128, 128, 128) // Gray

		feedbacks.recordingState = {
			type: 'boolean',
			name: 'Recording',
			description: 'Indicate Device Recording State',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: 'recording',
					choices: [
						{ id: 'Recording', label: 'Recording' },
						{ id: 'Ready', label: 'Ready' },
						{ id: 'Invalid', label: 'Invalid' },
						{ id: 'Not Ready', label: 'Not Ready' },
						{ id: 'Preparing', label: 'Preparing' },
						{ id: 'Offline', label: 'Offline' },
					],
				},
			],
			callback: (feedback) => {
				var opt = feedback.options

				if (this.data.recordingState === opt.option) {
					return true
				}

				return false
			},
		}

		feedbacks.streamingState = {
			type: 'boolean',
			name: 'Streaming',
			description: 'Indicate Device Streaming State',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: 'broadcasting',
					choices: [
						{ id: 'Live', label: 'Live' },
						{ id: 'Ready', label: 'Ready' },
						{ id: 'Playing', label: 'Playing' },
						{ id: 'Invalid', label: 'Invalid' },
					],
				},
			],
			callback: (feedback) => {
				var opt = feedback.options

				if (this.data.streamingState === opt.option) {
					return true
				}

				return false
			},
		}

		this.setFeedbackDefinitions(feedbacks)
	},
}
