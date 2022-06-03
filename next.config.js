module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
      issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					// plugins: [{ removeViewBox: false }],
					plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
            }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};