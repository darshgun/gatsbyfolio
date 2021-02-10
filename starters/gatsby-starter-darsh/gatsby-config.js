const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Monorepo Tutorial`,
    description: `A tutorial on setting up a Gatsby themes monorepo`,
    keywords: [`gatsby`],
    author: `Eric Howey`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        helpers: path.join(__dirname, 'src/helpers'),
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        styles: path.join(__dirname, 'src/styles'),
      },
    },
    {
      resolve: `gatsby-theme-darsh`,
      options: {},
    },
  ],
};
