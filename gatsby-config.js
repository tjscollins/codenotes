module.exports = {
  siteMetadata: {
    title: 'codenotes Blog',
    description: '',
    keywords: [
        'programming',
        'computer science'
    ],
    links: {
        github: 'https://github.com/tjscollins',
        linkedin: 'https://linkedin.com/in/tjscollins',
    }
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `codenotes`,
            path: `${__dirname}/content/codenotes/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `portfolio`,
            path: `${__dirname}/content/portfolio/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `resume`,
            path: `${__dirname}/content/resume/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `data`,
            path: `${__dirname}/data/`,
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
            `gatsby-remark-prismjs`,
            ]
        }
    },
    `gatsby-transformer-json`,
  ],
};
