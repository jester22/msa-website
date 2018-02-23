import React from 'react';
import Radium, {Style} from "radium";

const PageBox = ({children}) => (
	<div>
	<Style scopeSelector=".page-class"
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
	<div className="page-class">{children}</div>
	</div>
)

export default Radium(PageBox);