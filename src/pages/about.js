import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header';
import Footer from '../components/footer';

const About = () => {
    return (
        <>
            <Header/>
            <h1>About</h1>
            <p>Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.</p>
            <Link to="/contact" > Contact </Link>
            <Footer />
        </>

    )
}


export default About;