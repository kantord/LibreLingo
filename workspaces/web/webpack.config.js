const webpack = require("webpack")
const path = require("path")
const config = require("sapper/config/webpack.js")
const pkg = require("./package.json")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {typescript, sass} = require("svelte-preprocess")
const CopyPlugin = require("copy-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin

const mode = process.env.NODE_ENV
const dev = mode === "development"

const alias = { svelte: path.resolve("node_modules", "svelte") }
const extensions = [".mjs", ".js", ".ts", ".json", ".svelte", ".html"]
const mainFields = ["svelte", "module", "browser", "main"]

module.exports = {
    client: {
        entry: config.client.entry(),
        output: config.client.output(),
        resolve: { alias, extensions, mainFields },
        module: {
            rules: [
                {
                    test: /\.md/i,
                    use: "raw-loader",
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "fonts/",
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                // options...
                            },
                        },
                    ],
                },
                {
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: "svelte-loader",
                        options: {
                            preprocess: [
                                // TO-DO: config?
                                typescript({}),
                                sass({}),
                            ],
                            dev,
                            hydratable: true,
                            hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
                        },
                    },
                },
                // TO-DO: config?
                { 
                    test: /\.ts$/, 
                    loader: "ts-loader" ,
                },
            ],
        },
        mode,
        plugins: [
            ...(process.env.ANALYZE === "true" ? [new BundleAnalyzerPlugin()] : []),
            new CopyPlugin([
                {
                    from: path.resolve(
                        "node_modules",
                        "@openfonts/noto-sans_all",
                        "files"
                    ),
                    to: path.resolve("static", "files"),
                },
            ]),
            new MiniCssExtractPlugin({
                filename: "css/mystyles.css",
            }),
            // pending https://github.com/sveltejs/svelte/issues/2377
            // dev && new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                "process.browser": true,
                "process.env.NODE_ENV": JSON.stringify(mode),
            }),
        ].filter(Boolean),
        devtool: dev && "inline-source-map",
    },

    server: {
        entry: config.server.entry(),
        output: config.server.output(),
        target: "node",
        resolve: { alias, extensions, mainFields },
        externals: Object.keys(pkg.dependencies).concat("encoding"),
        module: {
            rules: [
                {
                    test: /\.md/i,
                    use: "raw-loader",
                },
                {
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: "svelte-loader",
                        options: {
                            preprocess: [
                                // TO-DO: config?
                                typescript({}),
                                sass({}),
                            ],
                            css: false,
                            generate: "ssr",
                            dev,
                        },
                    },
                },
                // TO-DO: config?
                { 
                    test: /\.ts$/, 
                    loader: "ts-loader" ,
                },
            ],
        },
        mode: process.env.NODE_ENV,
        performance: {
            hints: "error",
            maxEntrypointSize: 256000,
            maxAssetSize: 256000
        },
    },

    serviceworker: {
        entry: config.serviceworker.entry(),
        output: config.serviceworker.output(),
        mode: process.env.NODE_ENV,
        performance: {
            hints: "error",
            maxEntrypointSize: 1024,
            maxAssetSize: 1024
        },
    },
}
