import React from 'react';
import Link from 'gatsby-link';
import Radium  from'radium';
import Background from "../../images/bg.jpg";
import Logo from "../../images/logo.png";
import MenuButton from "../../images/menu-button.png";
import theme from '../../utils/theme.js';
import mediaQueries from '../../utils/mediaQueries.js';
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
			backgroundSize: 'cover'
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
			color: theme.palette.textColor,
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
					About Us
				</div>
				<div style={styles.menuItem}>
					Schedule
				</div>
				<div style={styles.moon}>
					<Moon/>
				</div>
				<div style={styles.menuItem}>
					Membership
				</div>
				<div style={styles.menuItem}>
					Blog
				</div>
			</div>
			<div style={styles.logo}></div>
		</div>
	}
}

export default Radium(Header)
