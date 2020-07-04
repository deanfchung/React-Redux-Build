module.exports = {
	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage/',
	coverageReporters: ['text', 'text-summary', 'lcov'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 50,
			statements: -10
		}
	},
	setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
	notify: true,
	notifyMode: 'always',
	clearMocks: true,
	globals: {
		React: require('react'),
		ReactDOM: require('react-dom')
	},
	verbose: true,
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest'
	},
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'babel-jest'
	}
}
