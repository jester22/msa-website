import React from 'react';
import Link from 'gatsby-link';
import Radium  from'radium';
import Background from "../../images/bg.jpg";
import Logo from "../../images/logo.png";
import MenuButton from "../../images/menu-button.png";
import theme from '../../utils/theme';
import mediaQueries from '../../utils/mediaQueries';
import Moon from "./Moon";

var styles = {
	background: {
		[mediaQueries.breakpointLarge]: {
			height: '100%',
			backgroundImage: `url(${Background})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		},
		[mediaQueries.breakpointSmall]: {
			height: '200px'
		}
	},
	logo: {
		[mediaQueries.breakpointLarge]: {
			backgroundImage: `url(${Logo})`,
			height: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center 10%'
		},
		[mediaQueries.breakpointSmall]: {
			backgroundImage: `url(${Logo})`,
			height: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center center',
			backgroundSize: 'contain'
		}
	},
	menu: {
		[mediaQueries.breakpointLarge]: {
			margin: '0 auto',
			height: 90,
			display: 'table',
			position: 'relative'
		},
		[mediaQueries.breakpointSmall]: {
			position: 'absolute',
			top: '36px',
			right: '0px',
			background: 'black',
			padding: '16px'
		}
	},
	menuItem: {
		[mediaQueries.breakpointLarge]: {
			display: 'table-cell',
			color: theme.palette.text1Color,
			height: '100%',
			verticalAlign: 'middle',
			padding: '0 32px'
		},
		[mediaQueries.breakpointSmall]: {
			display: 'block',
			padding: '8px 32px'
		}
	},
	moon: {
		[mediaQueries.breakpointLarge]: {
			display: 'table-cell',
		},
		[mediaQueries.breakpointSmall]: {
			display: 'none'
		}
	},
	menuButton: {
		[mediaQueries.breakpointLarge]: {
			display: 'none'
		},
		[mediaQueries.breakpointSmall]: {
			display: 'inline-block',
			width: '40px',
			float: 'right'
		}
	},
	showMenu: {
		[mediaQueries.breakpointSmall]: {
			display: 'block'
		}
	},
	hideMenu: {
		[mediaQueries.breakpointSmall]: {
			display: 'none'
		}
	},
	text1Color:	{
		color: theme.palette.text1Color
	}
}

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	render() {
		var menuStyle = this.state.open ? styles.showMenu : styles.hideMenu;
		return <div style={styles.background}>
			<img style={styles.menuButton} src={MenuButton} onClick={() => {
				this.setState({open: !this.state.open})
			}}/>
			<div style={[styles.menu, menuStyle]}>
				<div style={styles.menuItem}>
					<a style={styles.text1Color} href="/about">ABOUT US</a>
				</div>
				<div style={styles.menuItem}>
					<a style={styles.text1Color} href="/schedule">SCHEDULE</a>
				</div>
				<div style={styles.moon}>
					<Moon/>
				</div>
				<div style={styles.menuItem}>
					<a style={styles.text1Color} href="/membership">MEMBERSHIP</a>
				</div>
				<div style={styles.menuItem}>
					<a style={styles.text1Color} href="/blog">BLOG</a>
				</div>
			</div>
			<div style={styles.logo}></div>
		</div>
	}
}

export default Radium(Header)
