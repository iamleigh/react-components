const path = require('path');

module.exports = {
	stories: [
		"../packages/**/stories/*.mdx",
    	"../packages/**/stories/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-postcss",
		"@storybook/addon-a11y"
	],
	webpackFinal: async (config, { configType }) => {
		// Add SASS support.
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			],
			include: path.resolve( __dirname, '../' ),
		});

		return config;
	},
	framework: "@storybook/react",
	core: {
		"builder": "@storybook/builder-webpack5"
	}
}
