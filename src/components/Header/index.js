import React from 'react';
import Link from 'gatsby-link';
import Radium  from'radium';
import Background from "../../images/bg.jpg";
import Logo from "../../images/logo.png";
import theme from '../../utils/theme.js';
import Moon from "./Moon";

var styles = {
	background: {
		backgroundImage: `url(${Background})`,
		height: '100%',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	},
	logo: {
		backgroundImage: `url(${Logo})`,
		height: '100%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center 10%'
	},
	menu: {
		margin: '0 auto',
		height: 90,
		display: 'table',
		position: 'relative'
	},
	menuItem: {
		display: 'table-cell',
		color: theme.palette.textColor,
		height: '100%',
		verticalAlign: 'middle',
		padding: '0 32px'
	}
}
const Menu = ({children}) => (
	<div style={styles.menu}>
		{children}
	</div>
)

const MenuItem = ({children}) => (
	<div style={styles.menuItem}>
		{children}
	</div>
)

const Header = () => (
	<div style={styles.background}>
		<Menu>
			<MenuItem>
				About Us
			</MenuItem>
			<MenuItem>
				Schedule
			</MenuItem>
			<Moon style={styles.menuItem}/>
			<MenuItem>
				Membership
			</MenuItem>
			<MenuItem>
				Contact Us
			</MenuItem>
		</Menu>
		<div style={styles.logo}></div>
	</div>
)

export default Radium(Header)
