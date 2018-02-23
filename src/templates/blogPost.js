import React from "react";
import Link from "gatsby-link";
import Radium, {Style} from "radium";
import * as PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import {SectionTitle} from "../components";

const propTypes = {
	data: PropTypes.object.isRequired,
}

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.contentfulBlogPost
		const {
			title,
			publicationDate,
			content: { content }
		} = post
		return (
			<div>
				<Style 	scopeSelector=".post-content-class"
					rules={{
						backgroundColor: '#e6e7e8',
						color: '#3a3a3a',
						padding: '32px 64px',
						textAlign: 'justify',
						lineHeight: '32px',
						fontSize: '18px',
						img: {
							display: 'block',
							margin: '0 auto',
							maxHeight: '400px',
							maxWidth: '100%'
						}
				}} />
				<div className="post-content-class">
					<SectionTitle>{title}</SectionTitle>
					<div>{publicationDate}</div>
					<ReactMarkdown source={content} />
				</div>
			</div>
		)
	}
}

BlogPostTemplate.propTypes = propTypes

export default Radium(BlogPostTemplate);

export const pageQuery = graphql`
	query blogQuery($id: String!) {
		contentfulBlogPost(id: { eq: $id }) {
			title,
			publicationDate(formatString: "MMMM DD, YYYY"),
			content {
				content 
			}
			thumbnail{
				file {
					url
				}
			}
		}
	}
`