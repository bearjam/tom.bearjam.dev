const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

const withFonts = require('next-fonts');

module.exports = withFonts(withMDX({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }
    return config
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}));
