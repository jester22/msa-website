import React from "react";
import Link from "gatsby-link";
import Radium from "radium";
import {PageBox} from "../components";
import SectionTitle from "../components/SectionTitle";

const SchedulePage = () => (
	<PageBox>
		<SectionTitle>Schedule</SectionTitle>
		<br />
		<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=m22u4pqpsor7g1q2rdr68hdvd0%40group.calendar.google.com&amp;color=%23333333&amp;ctz=Asia%2FManila" style="border:solid 1px #777" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
	</PageBox>
)

export default Radium(SchedulePage);

