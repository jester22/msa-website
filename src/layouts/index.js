import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavIcon from '../images/favicon.png';
import './index.css';

const TemplateWrapper = ({ children }) => (
	<div style={{height: '100%'}}>
		<Helmet>
			<title>Manila Street Astronomers</title>
			<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
			<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
			<link rel="shortcut icon" href={FavIcon}/>
		</Helmet>
	<Header />
	<div id="children">
		{children()}
	</div>
	<Footer />
		<Helmet>
			<script type="text/javascript">
			{`
				window.addEventListener("load", function(){
					if(window.location.pathname !== "/") {
						var top = document.getElementById('children').offsetTop;
						window.scrollTo(0, top);
					}
				});
			`}
			</script>
		</Helmet>
	</div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
