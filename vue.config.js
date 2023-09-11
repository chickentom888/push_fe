const Dotenv = require('dotenv-webpack');
module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_APP_ENV === 'production'
        ? '/'
        : '/',
    outputDir: "dist",
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "@/style/main.scss";'
            }
        }
    },
    configureWebpack: {
        plugins: [
            new Dotenv()
        ]
    },
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        disableHostCheck: true,
        open: false,
        port: 1900,
        proxy: {
            "/api/": {
                target: process.env.API_URL || "https://sb-backend.pushswap.org/api/",
                changeOrigin: true,
                logLevel: "debug",
                pathRewrite: { "^/api": "" }
            },
            "/coin/": {
                target: process.env.COINGECKO_API_URL || "https://api.coingecko.com/api/",
                changeOrigin: true,
                logLevel: "debug",
                pathRewrite: { "^/coin": "" }
            }
        }
    }
}
