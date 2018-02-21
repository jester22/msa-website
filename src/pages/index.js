import React from 'react'
import Link from 'gatsby-link'
import Radium, {Style} from 'radium';
import theme from '../utils/theme.js';
import titleToPath from '../utils/titleToPath';

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
	blog: {
		padding: '80px 0 70px',
		width: 'fit-content',
		margin: '0 auto'
	},
	box: {
		display: 'inline-block',
		boxShadow: '0 2px 5px 0 rgba(0,0,0,0.25)',
		width: '262px',
		height: '232px',
		margin: '0 32px',
		padding: '24px',
		verticalAlign: 'top'
	},
	img: {
		width: 256,
		height: 116,
		objectFit: 'cover',
	},
	postTitle: {
		fontWeight: 'bold',
		fontSize: '20px',
		padding: '16px 0px',
		overflow: 'hidden',
		height: '64px'
	}
}

const IndexPage = ({data}) => (
	<div style={styles.base}>
		<div style={styles.boxShadow}>
			<div style={styles.title}>MANILA STREET ASTRONOMERS NEWS AND UPDATES</div>
		</div>
		<div style={styles.blog}>
			{
				data.allContentfulBlogPost.edges.map((edge, index) => (
					<div key={index} style={styles.box}>
						<img alt={edge.node.title} style={styles.img} src={edge.node.thumbnail.file.url} />
						<div style={styles.postTitle}>{edge.node.title}</div>
						<div><a className="link-arrow" href={`blog/${titleToPath(edge.node.title)}#${titleToPath(edge.node.title)}`}>
							Read More
						</a></div>
					</div>
				))
			}
		</div>
	</div>
)

export default Radium(IndexPage);

export const query = graphql`
	query AllContentfulBlogPost {
		allContentfulBlogPost(limit: 3, sort:{order:DESC, fields:[publicationDate]}) {
			edges {
				node {
					id,
					title,
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
