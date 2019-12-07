const webpack = require("webpack")
const path = require("path")
const config = require("sapper/config/webpack.js")
const pkg = require("./package.json")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const sass = require("svelte-preprocess-sass").sass
const CopyPlugin = require("copy-webpack-plugin")

const mode = process.env.NODE_ENV
const dev = mode === "development"

const alias = { svelte: path.resolve("node_modules", "svelte") }
const extensions = [".mjs", ".js", ".json", ".svelte", ".html"]
const mainFields = ["svelte", "module", "browser", "main"]

module.exports = {
    client: {
        entry: config.client.entry(),
        output: config.client.output(),
        resolve: { alias, extensions, mainFields },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "fonts/"
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                                // options...
                            }
                        }
                    ]
                },
                {
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: "svelte-loader",
                        options: {
                            preprocess: {
                                style: sass({}, { all: true })
                            },
                            dev,
                            hydratable: true,
                            hotReload: false // pending https://github.com/sveltejs/svelte/issues/2377
                        }
                    }
                }
            ]
        },
        mode,
        plugins: [
            new CopyPlugin([
                {
                    from: path.resolve(
                        "node_modules",
                        "oswald-webfont",
                        "fonts"
                    ),
                    to: path.resolve("static", "fonts")
                }
            ]),
            new MiniCssExtractPlugin({
                filename: "css/mystyles.css"
            }),
            // pending https://github.com/sveltejs/svelte/issues/2377
            // dev && new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                "process.browser": true,
                "process.env.NODE_ENV": JSON.stringify(mode)
            })
        ].filter(Boolean),
        devtool: dev && "inline-source-map"
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
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: "svelte-loader",
                        options: {
                            preprocess: {
                                style: sass({}, { all: true })
                            },
                            css: false,
                            generate: "ssr",
                            dev
                        }
                    }
                }
            ]
        },
        mode: process.env.NODE_ENV,
        performance: {
            hints: false // it doesn't matter if server.js is large
        }
    },

    serviceworker: {
        entry: config.serviceworker.entry(),
        output: config.serviceworker.output(),
        mode: process.env.NODE_ENV
    }
}
