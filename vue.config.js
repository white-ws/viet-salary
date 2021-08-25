module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
	config
		.plugin('html')
		.tap(args => {
			args[0].title = "Vietnamese Software Engineer Salary | VietSalary";
			return args;
		})
}

}
