import React from 'react';
import Radium, {Style} from "radium";
import mediaQueries from '../utils/mediaQueries.js';

var styles = {
	base: {
		backgroundColor: '#e6e7e8',
		color: '#3a3a3a',
		textAlign: 'justify',
		lineHeight: '32px',
		fontSize: '18px',
		[mediaQueries.breakpointLarge]: {
			padding: '32px 64px'
		},
		[mediaQueries.breakpointSmall]: {
			padding: '32px 16px',
		}
	}
}

const PageBox = ({children}) => (
	<div>
	<Style scopeSelector=".page-class"
		rules={{
			img: {
				display: 'block',
				margin: '0 auto',
				maxHeight: '400px',
				maxWidth: '100%'
			}
	}} />
	<div style={styles.base} className="page-class">{children}</div>
	</div>
)

export default Radium(PageBox);