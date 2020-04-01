exports.onCreateWebpackConfig = ({ actions, plugins, reporter }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.provide({
        React: "react"
      })
    ]
  })

  reporter.info(`Provided React in all files`)
}
