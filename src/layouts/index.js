import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavIcon from '../images/favicon.png';
import {StyleRoot} from 'radium';
import './index.css';

const TemplateWrapper = ({ children }) => (
	<StyleRoot style={{height: '100%'}}>
	<div style={{height: '100%'}}>
		<Helmet>
			<title>Manila Street Astronomers</title>
			<meta name="description" content="Manila Street Astronomers Website"/>
			<meta name="keywords" content="MSA, Manila Street Astronomers, Astronomy, Street Astronomers, Philippines, Manila"/>
			<meta property="og:url" content="https://manilastreetastronomers.org/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Manila Street Astronomers"/>
			<meta property="og:description" content="Manila Street Astronomers is a non-profit astronomy outreach group who advocates astronomy education, collaboration, and communication for all."/>
			<meta property="og:image"  content="https://images.contentful.com/1o5ly3na7qu2/1h05fEFhuIo4ks2QoMM0AQ/a018913bc8168b0e5d8868e09703c6e7/logo2.png" />
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
					if(window.location.pathname !== "/" && window.location.hash === "") {
						var top = document.getElementById('children').offsetTop;
						window.scrollTo(0, top);
					}
				});
			`}
			</script>
		</Helmet>
	</div>
	</StyleRoot>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
