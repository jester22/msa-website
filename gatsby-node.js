const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators
	return new Promise((resolve, reject) => {
		graphql(`{
			allContentfulBlogPost(limit: 1000) {
				edges {
					node {
						id
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
					path: `/blog/${edge.node.id}/`,
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