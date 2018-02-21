import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavIcon from '../images/favicon.png';
import './index.css';

const TemplateWrapper = ({ children }) => (
	<div style={{height: '100%'}}>
		<Helmet
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' }
			]}
		>
			<title>Manila Street Astronomers</title>
			<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
			<link rel="shortcut icon" href={FavIcon}/>
		</Helmet>
	<Header />
	<div>
		{children()}
	</div>
	<Footer />
	</div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
