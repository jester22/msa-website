module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1o5ly3na7qu2`,
        accessToken: `0c76ea8d06b8d81fb4570c6a3eff262aa1eaba898e71d2a740d9a67710708a26`,
      },
    }
  ],
};
