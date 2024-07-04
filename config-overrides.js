const path = require('path')

module.exports = function override(config, env) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
    }

    const svgRuleIndex = config.module.rules.findIndex(
        (rule) => rule.test && rule.test.toString().includes('svg')
    )

    if (svgRuleIndex >= 0) {
        config.module.rules[svgRuleIndex] = {
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        }
    } else {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        })
    }

    return config
}
