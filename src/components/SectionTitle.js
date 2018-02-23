import React from 'react';
import Radium from "radium";

var styles = {
	base: {
		paddingTop: '32px',
		fontSize: '32px'
	}
}

const SectionTitle = ({children, style, domProps}) => (
	<div style={[styles.base, {...style}]} {...domProps}>{children}</div>
)

export default Radium(SectionTitle);