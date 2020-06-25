const path = require("path");

module.exports = {
    webpack(config, options) {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@root": path.resolve(__dirname)
        };

        return config;
    },
    target: "serverless"
}