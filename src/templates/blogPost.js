import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

const propTypes = {
	data: PropTypes.object.isRequired,
}

class ProductTemplate extends React.Component {
	render() {
		const post = this.props.data.contentfulBlogPost
		const {
			title
		} = post
		return (
			<div>
				{title}
			</div>
		)
	}
}

ProductTemplate.propTypes = propTypes

export default ProductTemplate

export const pageQuery = graphql`
	query productQuery($id: String!) {
		contentfulBlogPost(id: { eq: $id }) {
			title
		}
	}
`