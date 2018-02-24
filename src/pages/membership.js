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

const MembershipPage = ({data}) => (
	<PageBox>
		<SectionTitle domProps={{id: "join-us"}}>Membership</SectionTitle>
		<ReactMarkdown source={data.contentfulApp.membership.membership} />
		<SectionTitle domProps={{id:"cast-crew"}} style={{textAlign: 'center'}}>Cast & Crew</SectionTitle>
		<ParentBox>
			{
				data.allContentfulMember.edges.map((edge, index) => (
					<ChildBox key={index} style={{textAlign: 'center'}}>
						<img alt={edge.node.name} style={styles.img} src={edge.node.thumbnail.file.url} />
						<div style={styles.elementContainer}>
							<div style={styles.name}>{edge.node.name}</div>
							<div style={styles.designation}>{edge.node.designation ?  edge.node.designation : 'Cast & Crew'}</div>
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

export default Radium(MembershipPage);

export const query = graphql`
	query MembershipQuery {
		contentfulApp{
			membership {
				membership
			}
		},
		allContentfulMember(filter:{isCoreMember: {eq:false}}, sort:{order:ASC, fields:[createdAt]}) {
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