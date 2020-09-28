module.exports = {
    publicPath: './',
    devServer: {
        proxy: 'http://172.16.181.250:8889'
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#e3da25',
                },
                javascriptEnabled: true
            }
        }
    },
};
