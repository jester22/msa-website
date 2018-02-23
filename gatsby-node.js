const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const formatToPath = (title) => {
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
			const template = path.resolve(`./src/templates/blogPost.js`)
			result.data.allContentfulBlogPost.edges.forEach(edge => {
				createPage({
					path: `/blog/${formatToPath(edge.node.title)}/`,
					component: slash(template),
					context: {
						id: edge.node.id
					}
				})
			})
		}).then(() => {
			graphql(
			`
				{
					allContentfulMember(limit: 1000) {
						edges {
							node {
								id,
								name
							}
						}
					}
				}
			`
			).then(result => {
				if (result.errors) {
					reject(result.errors)
				}
				const template = path.resolve(`./src/templates/member.js`)
				result.data.allContentfulMember.edges.forEach(edge => {
					createPage({
						path: `/member/${formatToPath(edge.node.name)}/`,
						component: slash(template),
						context: {
							id: edge.node.id
						}
					})
				})
				resolve();
			})
		})
	})
}