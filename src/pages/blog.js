import React from 'react'
import Link from 'gatsby-link'
import Radium, {Style} from 'radium';
import theme from '../utils/theme.js';
import formatToPath from '../utils/formatToPath';
import { ParentBox, ChildBox } from '../components'

var styles = {
	base: {
		background: '#fff',
		color: theme.palette.alternativeTextColor,
		textTransform: 'uppercase',
	},
	boxShadow: {
		background: '#fff',
		paddingTop: '70px',
		boxShadow: 'rgb(66, 66, 66) 0px 100px 100px -100px inset'
	},
	title: {
		textAlign: 'center',
		color: '#3a3a3a',
		fontWeight: 'bold',
		fontSize: '20px'
	},
	img: {
		width: 256,
		height: 116,
		objectFit: 'cover',
	},
	postContainer: {
		padding: '16px 0px',
		overflow: 'hidden',
		height: '64px'
	},
	postTitle: {
		fontWeight: 'bold',
		fontSize: '20px',
	},
	postDate: {
		fontSize: '14px',
		paddingTop: '8px'
	}
}


const BlogPage = ({data}) => (
	<div style={styles.base}>
		<div style={styles.boxShadow}>
			<div style={styles.title}>BLOG</div>
		</div>
		<ParentBox>
			{
				data.allContentfulBlogPost.edges.map((edge, index) => (
					<ChildBox key={index}>
						<img alt={edge.node.title} style={styles.img} src={edge.node.thumbnail.file.url} />
						<div style={styles.postContainer}>
							<span style={styles.postTitle}>{edge.node.title}</span><br/>
							<span style={styles.postDate}>{edge.node.publicationDate}</span>
						</div>
						<div><a className="link-arrow" href={`/blog/${formatToPath(edge.node.title)}`}>
							Read More
						</a></div>
					</ChildBox>
				))
			}
		</ParentBox>
	</div>
)

export default Radium(BlogPage);

export const query = graphql`
	query AllContentfulBlogPost {
		allContentfulBlogPost(sort:{order:DESC, fields:[publicationDate]}) {
			edges {
				node {
					title,
					publicationDate(formatString: "MMMM DD, YYYY"),
					thumbnail {
						file {
							url
						}
					}
				}
			}
		}
	}
`;