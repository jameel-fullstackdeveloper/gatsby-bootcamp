import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';

const About = () => {
    return (
        <>
            <Layout>
            <h1>About</h1>
            <p>Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.</p>
            <Link to="/contact" > Contact </Link>
            </Layout>
        </>

    )
}


export default About;