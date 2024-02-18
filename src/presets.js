const { combineRgb } = require('@companion-module/base')

module.exports = {
	initPresets: function () {
		let presets = {}

		const foregroundColor = combineRgb(255, 255, 255) // White
		const foregroundColorBlack = combineRgb(0, 0, 0) // Black
		const backgroundColorRed = combineRgb(255, 0, 0) // Red
		const backgroundColorGreen = combineRgb(0, 255, 0) // Green
		const backgroundColorYellow = combineRgb(255, 191, 0) // Yellow
		const backgroundColorOrange = combineRgb(255, 102, 0) // Orange
		const backgroundColorBlue = combineRgb(0, 0, 255) // Blue
		const backgroundColorGray = combineRgb(128, 128, 128) // Gray

		// ########################
		// #### System Presets ####
		// ########################

		presets['record_start'] = {
			type: 'button',
			category: 'Recording',
			name: 'Recording Start',
			style: {
				text: 'REC\nSTART',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'recordingControl',
							options: {
								command: 'start',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Offline',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Not Ready',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorGray,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Preparing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorOrange,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Recording',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		}

		presets['record_stop'] = {
			type: 'button',
			category: 'Recording',
			name: 'Recording Stop',
			style: {
				text: 'REC\nSTOP',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'recordingControl',
							options: {
								command: 'stop',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Offline',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Not Ready',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorGray,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Preparing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorOrange,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Recording',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		}

		presets['record_state'] = {
			type: 'button',
			category: 'Recording',
			name: 'Recording State',
			style: {
				text: '$(teradek-vidiux:recording_state)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Offline',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Not Ready',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorGray,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Preparing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorOrange,
					},
				},
				{
					feedbackId: 'recordingState',
					options: {
						option: 'Recording',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		}

		presets['record_uptime'] = {
			type: 'button',
			category: 'Recording',
			name: 'Recording Uptime',
			style: {
				text: '$(teradek-vidiux:recording_uptime)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets['stream_start'] = {
			type: 'button',
			category: 'Streaming',
			name: 'Streaming Start/Publish',
			style: {
				text: 'STREAM\\nSTART',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'streamingControl',
							options: {
								command: 'publish',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Playing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Live',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		}

		presets['stream_stop'] = {
			type: 'button',
			category: 'Streaming',
			name: 'Streaming Stop/Unpublish',
			style: {
				text: 'STREAM\\nSTOP',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'streamingControl',
							options: {
								command: 'unpublish',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Playing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Live',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		}

		presets['stream_state'] = {
			type: 'button',
			category: 'Streaming',
			name: 'Streaming State',
			style: {
				text: '$(teradek-vidiux:streaming_state)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Ready',
					},
					style: {
						color: foregroundColorBlack,
						bgcolor: backgroundColorGreen,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Invalid',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorYellow,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Playing',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorBlue,
					},
				},
				{
					feedbackId: 'streamingState',
					options: {
						option: 'Live',
					},
					style: {
						color: foregroundColor,
						bgcolor: backgroundColorRed,
					},
				},
			],
		}

		presets['stream_uptime'] = {
			type: 'button',
			category: 'Streaming',
			name: 'Streaming Uptime',
			style: {
				text: '$(teradek-vidiux:streaming_uptime)',
				size: '14',
				color: '16777215',
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [],
					up: [],
				},
			],
			feedbacks: [],
		}

		this.setPresetDefinitions(presets)
	},
}
