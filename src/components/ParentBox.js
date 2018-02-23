import React from 'react';
import Radium from "radium";

var styles = {
	base: {
		padding: '80px 0 70px',
		textAlign: 'center'
	}
}

const ParentBox = ({children}) => (
	<div style={styles.base}>{children}</div>
)

export default Radium(ParentBox);