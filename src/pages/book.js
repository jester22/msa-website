import React from "react";

export default ({ data }) => (
	<div>
		{/* <ul>
			{
				data.allContentfulBook.edges.map((item, index) =>(
					<li key={index}>{item.node.title}</li>
				))
			}
		</ul> */}
	</div>
);

// export const query = graphql`
// 	query AllContentfulBook {
// 		allContentfulBook {
// 			edges {
// 				node {
// 					title
// 				}
// 			}
// 		}
// 	}
// `;