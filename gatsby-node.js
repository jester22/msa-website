const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const titleToPath = (title) => {
	return title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators
	return new Promise((resolve, reject) => {
		graphql(`{
			allContentfulBlogPost(limit: 1000) {
				edges {
					node {
						id,
						title
					}
				}
			}
		}`).then(result => {
			if (result.errors) {
				reject(result.errors)
			}
			const postTemplate = path.resolve(`./src/templates/blogPost.js`)
			result.data.allContentfulBlogPost.edges.forEach(edge => {
				createPage({
					path: `/blog/${titleToPath(edge.node.title)}/`,
					component: slash(postTemplate),
					context: {
						id: edge.node.id,
					}
				})
			})
			resolve();
		})
	})
}