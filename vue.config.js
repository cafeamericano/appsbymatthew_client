module.exports = {
    lintOnSave: false,
    outputDir: "docs",
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' //'/appsbymatthew_client/' <-- if not using a custom domain
        : '/'
};
