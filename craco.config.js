const CracoLessPlugin = require("craco-less");
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.97.9.139:8080/Apidemo',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#09f" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
