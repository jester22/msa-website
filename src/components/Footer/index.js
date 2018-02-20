import React from 'react';
import Radium from 'radium';
import theme from '../../utils/theme.js';
import Logo2 from "../../images/logo2.png";

var styles = {
	base: {
		width: '100%'
	},
	text3Color:	{
		color: theme.palette.text3Color
	},
	text2Color:	{
		color: theme.palette.text2Color
	},
	text1Color:	{
		color: theme.palette.text1Color
	},
	upper: {
		width: '100%',
		backgroundColor: theme.palette.primary2Color,
		padding: '0 128px',
		boxSizing: 'border-box'
	},
	upperBox: {
		display: 'inline-block',
		padding: '32px 16px',
		verticalAlign: 'top'
	},
	logo: {
		backgroundImage: `url(${Logo2})`,
		height: '100px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		width: '132px'
	},
	quote: {
		wordWrap: 'break-word',
		fontSize: '14px',
		width: '196px'
	},
	bottom: {
		width: '100%',
		backgroundColor: theme.palette.primary1Color,
		padding: '0 128px',
		boxSizing: 'border-box'
	},
	bottomText: {
		display: 'inline-block',
		padding: '16px  16px'
	},
	bottomTextInside: {
		padding: '16px 0px 16px 16px'
	},
	copyright: {
		float: 'right'
	}
}

const Footer = () => (
	<footer style={styles.base}>
		<div style={styles.upper}>
			<div style={styles.upperBox}>
				<div style={[styles.text1Color]}>ABOUT MSA</div>
				<div style={[styles.text2Color]}>ORGANIZATION</div>
				<div style={[styles.text2Color]}>MISSION AND VISION</div>
			</div>
			<div style={styles.upperBox}>
				<div style={[styles.text1Color]}>MEMBERSHIP</div>
				<div style={[styles.text2Color]}>JOIN US</div>
				<div style={[styles.text2Color]}>CORE MEMBER</div>
				<div style={[styles.text2Color]}>CAST & CREW</div>
			</div>
			<div style={styles.upperBox}>
				<div style={[styles.text1Color, styles.quote]}>"The true value of a telescope is the number of people who have viewed the heavens through it."
-John Dobson
</div>
				<div style={[styles.logo]}></div>
			</div>
		</div>
		<div style={styles.bottom}>
			<div style={[styles.bottomText, styles.text3Color]}>FOLLOW MSA</div>
			<div style={[styles.bottomText, styles.text3Color, {padding: '0px'}]}>|</div>
			<div style={[styles.bottomText, styles.bottomTextInside, styles.text2Color]}>FACEBOOK</div>
			<div style={[styles.bottomText, styles.bottomTextInside, styles.text2Color]}>TWITTER</div>
			<div style={[styles.bottomText, styles.text3Color, styles.copyright]}>© 2018 MANILA STREET ASTRONOMERS ORG.</div>
		</div>
	</footer>
)

export default Radium(Footer)