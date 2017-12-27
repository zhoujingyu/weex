const path = require('path');
const webpack = require('webpack');
const entry = {
    'index': path.resolve('src', 'entry.js')
};
let fileType = '.vue';

/**
 * Plugins for webpack configuration.
 */
const plugins = [
    /*
     * Plugin: UglifyJsPlugin
     * Description: UglifyJS plugin for webpack
     * See: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
     */
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true
    // }),
    /*
     * Plugin: BannerPlugin
     * Description: Adds a banner to the top of each generated chunk.
     * See: https://webpack.js.org/plugins/banner-plugin/
     */
    new webpack.BannerPlugin({
        banner: '// { "framework": ' + (fileType === '.vue' ? '"Vue"' : '"Weex"') + '} \n',
        raw: true,
        exclude: 'Vue'
    })
];

const babelLoader = {
    test: /\.js$/,
    use: [{
        loader: 'babel-loader'
    }],
    exclude: /node_modules(?!(\/|\\).*(weex).*)/
};

const cssLoader = {
    test: /\.css$/,
    use: [{
        loader: 'style-loader!css-loader'
    }]
};

const scssLoader = {
    test: /\.(scss|sass)$/,
    use: [{
        loader: 'style-loader!css-loader!sass-loader'
    }]
};

const vueLoader = {
    test: /\.vue(\?[^?]+)?$/,
    use: [{
        loader: 'vue-loader',
        options: {
            compilerModules: [
                {
                    postTransformNode: el => {
                        el.staticStyle = `$processStyle(${el.staticStyle})`
                        el.styleBinding = `$processStyle(${el.styleBinding})`
                    }
                }
            ]
        }
    }]
};

const vueWeexLoader = {
    test: /\.vue(\?[^?]+)?$/,
    use: [{
        loader: 'weex-loader'
    }]
};

const weWeexLoader = {
    test: /\.we(\?[^?]+)?$/,
    use: [{
        loader: 'weex-loader'
    }]
};

// Config for compile jsbundle for web.
const webConfig = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].web.js'
    },
    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'source-map',
    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
        // webpack 2.0
        rules: [
            babelLoader,
            cssLoader,
            scssLoader,
            vueLoader
        ]
    },
    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: plugins
};
// Config for compile jsbundle for native.
const weexConfig = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].weex.js'
    },
    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
        rules: [
            babelLoader,
            cssLoader,
            scssLoader,
            vueWeexLoader,
            weWeexLoader
        ]
    },
    /*
     * These options configure whether to polyfill or mock certain Node.js globals and modules.
     * This allows code originally written for the Node.js environment to run in other environments like the browser.
     *
     * See: https://webpack.js.org/configuration/node/#node
     */
    node: {
        setImmediate: false
        // See "Other node core libraries" for additional options.
    },
    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: plugins
};
// If The fileType is '.we', only need to use weexConfig for building.
if (fileType === '.we') {
    module.exports = weexConfig;
} else {
    module.exports = [webConfig, weexConfig];
}
