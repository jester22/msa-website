import React from "react";
import Link from "gatsby-link";
import Radium from "radium";
import {PageBox} from "../components";
import SectionTitle from "../components/SectionTitle";
import ReactMarkdown from "react-markdown";
import formatToPath from '../utils/formatToPath';

const SchedulePage = ({data}) => (
	<PageBox>
		<SectionTitle>Schedule</SectionTitle>
		<ReactMarkdown source={data.contentfulApp.schedule.schedule} />
	</PageBox>
)

export default Radium(SchedulePage);

export const query = graphql`
	query ScheduleQuery {
		contentfulApp{
			schedule {
				schedule
			}
		}
	}
`;