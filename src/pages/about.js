import React from "react";
import Link from "gatsby-link";
import Radium from "radium";
import {PageBox, ParentBox, ChildBox} from "../components";
import SectionTitle from "../components/SectionTitle";
import ReactMarkdown from "react-markdown";
import formatToPath from '../utils/formatToPath';

var styles = {
	img: {
		width: 160,
		height: 160,
		objectFit: 'cover',
		borderRadius: 160
	},
	elementContainer: {
		lineHeight: '20px',
		paddingTop: '10px'
	},
	name: {
		fontWeight: 'bold',
		fontSize: '20px',
	},
	designation: {
		fontSize: '14px'
	}
}

const AboutPage = ({data}) => (
	<PageBox>
		<SectionTitle domProps={{id: "organization"}}>The Organization</SectionTitle>
		<ReactMarkdown source={data.contentfulApp.about.about} />
		<SectionTitle domProps={{id:"missionAndVision"}}>Mission And Vision</SectionTitle>
		<ReactMarkdown source={data.contentfulApp.missionAndVision.missionAndVision} />
		<SectionTitle domProps={{id:"coreMember"}} style={{textAlign: 'center'}}>Core Member</SectionTitle>
		<ParentBox>
			{
				data.allContentfulMember.edges.map((edge, index) => (
					<ChildBox key={index} style={{textAlign: 'center'}}>
						<img alt={edge.node.name} style={styles.img} src={edge.node.thumbnail.file.url} />
						<div style={styles.elementContainer}>
							<div style={styles.name}>{edge.node.name}</div>
							<div style={styles.designation}>{edge.node.designation}</div>
						</div>
						<div><a className="link-arrow" href={`/member/${formatToPath(edge.node.name)}`}>
							View Profile
						</a></div>
					</ChildBox>
				))
			}
		</ParentBox>
	</PageBox>
)

export default Radium(AboutPage);

export const query = graphql`
	query AboutUsQuery {
		contentfulApp{
			about {
				about
			},
			missionAndVision {
				missionAndVision
			}
		},
		allContentfulMember(filter:{isCoreMember: {eq:true}}, sort:{order:ASC, fields:[createdAt]}) {
			edges {
				node {
					name,
					thumbnail {
						file {
							url
						}
					},
					content {
						content
					},
					designation
				}
			}
		}
	}
`;