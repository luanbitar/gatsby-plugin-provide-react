exports.onCreateWebpackConfig = ({ actions, plugins }) => {

	actions.setWebpackConfig({
		plugins: [
			plugins.provide({
				React: 'react'
			})
		]
	})
}