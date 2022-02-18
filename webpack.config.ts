const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

// htmlをバンドルできるようにする
const HtmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/client/index.html",
    filename: "./index.html"
})

module.exports = {
    // エントリーポイントにindex.tsxを指定(index.tsxを起点にインポートしているファイルを解析)
    entry: "./src/client/index.tsx",
    // バンドル(モジュールをまとめる)して出力
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    // loader(js以外を扱うときに必要)
    module: {
        rules: [
            // ts,tsxにts-loaderを適用
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'ts-loader' }
                ]
            },
            // cssにstyle-loaderとcss-loaderを適用
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [
            // import時に以下の拡張子を省略可能
            ".ts", ".js", "tsx", "jsx"
        ]
    },
    plugins: [HtmlWebpackPlugin]
}