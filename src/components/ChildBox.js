import React from 'react';
import Radium from "radium";

var styles = {
	base: {
		display: 'inline-block',
		boxShadow: '0 2px 5px 0 rgba(0,0,0,0.25)',
		width: '262px',
		height: '232px',
		margin: '0 32px 32px 32px',
		padding: '24px',
		verticalAlign: 'top'
	}
}

const ChildBox = ({children, style}) => (
	<div style={[styles.base, {...style}]}>{children}</div>
)

export default Radium(ChildBox);