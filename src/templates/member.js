import React from "react";
import Link from "gatsby-link";
import Radium, {Style} from "radium";
import * as PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import {PageBox} from "../components"
import {SectionTitle} from "../components";
import Helmet from 'react-helmet';

const propTypes = {
	data: PropTypes.object.isRequired,
}

class MemberTemplate extends React.Component {
	render() {
		const member = this.props.data.contentfulMember
		const {
			name,
			designation,
			thumbnail: {
				file: {
					url
				}
			},
			content: {
				content
			}
		} = member
		return (
			<PageBox>
				<Helmet>
					<meta property="og:url" content={location.href} />
					<meta property="og:type" content="article" />
					<meta property="og:title" content={name}/>
					<meta property="og:image"  content={url} />
				</Helmet>
				<SectionTitle>{name}</SectionTitle>
				<div>{designation ?  designation : 'Cast & Crew'}</div>
				<ReactMarkdown source={content} />
			</PageBox>
		)
	}
}

MemberTemplate.propTypes = propTypes

export default Radium(MemberTemplate);

export const pageQuery = graphql`
	query AllMemberQuery($id: String!) {
		contentfulMember(id: { eq: $id }) {
			name,
			designation,
			thumbnail {
				file {
					url
				}
			},
			content {
				content
			}
		}
	}
`