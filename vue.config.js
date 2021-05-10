module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.16.181.209:9290',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#5581E3',
                },
                javascriptEnabled: true
            }
        }
    },
};
