import React from 'react';
import Radium from 'radium';
import theme from '../../utils/theme.js';
import Logo2 from "../../images/logo2.png";
import Link from "gatsby-link"

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
		padding: '32px 128px',
		boxSizing: 'border-box',
		height: '260px'
	},
	upperBox: {
		display: 'inline-block',
		padding: '32px 76px 32px 32px',
		verticalAlign: 'top',
		height: '100%',
		boxSizing: 'border-box'
	},
	upperBoxBorder: {
		borderLeft: '1px dashed #666',
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
	upperText: {
		marginBottom: '4px'
	},
	bottom: {
		width: '100%',
		backgroundColor: theme.palette.primary1Color,
		padding: '0 144px',
		boxSizing: 'border-box'
	},
	bottomText: {
		display: 'inline-block',
		padding: '16px 0px 16px 16px',
		boxSizing: 'border-box'
	},
	copyright: {
		float: 'right'
	},
	contentfulLogo: {
		display: 'inline-block',
		verticalAlign: 'middle',
		boxSizing: 'border-box',
		width: '30%',
		textAlign: 'center',
		paddingLeft: '16px'
	}
}

const Footer = () => (
	<footer style={styles.base}>
		<div style={styles.upper}>
			<div style={styles.upperBox}>
				<div style={[styles.upperText, styles.text1Color]}>MEMBERSHIP</div>
				<div style={[styles.upperText, styles.text2Color]}>JOIN US</div>
				<div style={[styles.upperText, styles.text2Color]}>CAST & CREW</div>
			</div>
			<div style={[styles.upperBox, styles.upperBoxBorder]}>
				<div style={[styles.upperText, styles.text1Color]}>UPDATES</div>
				<div style={[styles.upperText, styles.text2Color]}><a style={styles.text2Color} href="/blog">BLOG</a></div>
				<div style={[styles.upperText, styles.text2Color]}>SCHEDULE</div>
			</div>
			<div style={[styles.upperBox, styles.upperBoxBorder]}>
				<div style={[styles.upperText, styles.text1Color]}>ABOUT MSA</div>
				<div style={[styles.upperText, styles.text2Color]}>ORGANIZATION</div>
				<div style={[styles.upperText, styles.text2Color]}>MISSION AND VISION</div>
				<div style={[styles.upperText, styles.text2Color]}>CORE MEMBER</div>
			</div>
			<div style={[styles.upperBox, styles.upperBoxBorder]}>
				<div style={[styles.text1Color, styles.quote]}>"The true value of a telescope is the number of people who have viewed the heavens through it."
-John Dobson
				</div>
				<div style={[styles.logo]}></div>
			</div>
		</div>
		<div style={styles.bottom}>
			<div style={[styles.bottomText, styles.text3Color]}>FOLLOW MSA</div>
			<div style={[styles.bottomText, styles.text3Color]}>|</div>
			<div style={[styles.bottomText, styles.text2Color]}>FACEBOOK</div>
			<div style={[styles.bottomText, styles.text2Color]}>TWITTER</div>

			<div style={[styles.contentfulLogo]}>
				<a href="https://www.contentful.com/" rel="nofollow" target="_blank">
				<img src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg" 
					style={{height: '30px'}} alt="Powered by Contentful" /></a>
			</div>

			<div style={[styles.bottomText, styles.text3Color, styles.copyright]}>© 2018 MANILA STREET ASTRONOMERS ORG.</div>
		</div>
	</footer>
)

export default Radium(Footer)