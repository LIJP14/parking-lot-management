module.exports = {
    pages: {
        index: {
            entry: 'src/main',
            title: '车场管理'
        }
    },

    devServer: {
        host: 'localhost' // http://localhost:8080/sockjs-node/info
        // host: '0.0.0.0', // http://192.168.*.*:8080/sockjs-node/info
        // disableHostCheck: true, // 为 true 时，将会跳过 host 检查。这是不推荐的因为不检查host的应用容易受到DNS重新绑定攻击。


    },

    css: {
        loaderOptions: {
            less: {
                // 覆盖 ant-design-vue 全局样式
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A'
                    },
                    javascriptEnabled: true
                }
            }
        }
    }
};
