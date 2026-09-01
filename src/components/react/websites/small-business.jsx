



// import in Fragment, the useState hook
import { Fragment, useState } from 'react';
// import in the scss file
import styles from './small-business.module.scss';



export default function SmallBusinessWebsitesComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ showApp2, setShowApp2 ] = useState( false );
    const [ showApp3, setShowApp3 ] = useState( false );

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================
    
    // ==============================
    // useRef();
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // functions
    // ==============================



    return (

        <div className={ styles.smallBusinessWebsitesContainer }>

            {
                /*
                    // ==============================
                    // wave shape
                    // ==============================
                */
            }
            {
                /*
                    // ==============================
                    // container > div 1
                    // ==============================
                */
            }
            <div>

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>

                </svg>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( wrapper div )
                    // ==============================
                */
            }
            <div>

                <h3>Small Business Websites</h3>

                {
                    /*
                        // ==============================
                        // container > div 2 > div 1
                        // ==============================
                    */
                }
                <div>

                    <h5>Custom Example</h5>

                    <ul>
                        <li>Purpose of app: increase sales, communicate with potential customers and present a top notch professional image</li>
                        <li>Type of website: brochure site</li>

                        {
                            /*
                                // ==============================
                                // click event for showing technical details
                                // ==============================
                            */
                        }
                        <span
                            onClick={ () => setShowApp2( ( prevStatus ) => !prevStatus ) }
                        >
                            { !showApp2 ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                        </span>

                        {
                            /*
                                // ==============================
                                // if showApp2 is true then show the tech details
                                // ==============================
                            */
                        }
                        {
                            showApp2 && (

                                <Fragment>

                                    <li>Languages: JavaScript ( ES6+ )</li>
                                    <li>Frameworks: Next.js</li>
                                    <li>Libraries: React</li>
                                    <li>API integration: the contact form uses the Postmark API to send transactional emails</li>
                                    <li>Next.js features: API routes</li>
                                    <li>React features: React Hooks</li>
                                    <li>Styling: custom design using SASS, CSS Grid, Flexbox and CSS Modules</li>
                                    <li>Other features:</li>
                                        <ul>
                                            <li>reponsive web design</li>
                                            <li>custom animation</li>
                                            <li>custom error handling</li>
                                            <li>custom loaders</li>
                                            <li>email analytics</li>
                                            <li>app is optimized for SEO</li>
                                        </ul>
                                    <li>Deployment: Netlify</li>

                                </Fragment>

                            )

                        }

                        <li>Please see below for an image from the home page:</li>

                        <a 
                            href="https://sb-site-v2.netlify.app/"
                            target="_blank"
                        >
                            <img
                                src={ '/images/sb-site-v2-1120.jpeg' }
                                className={ styles.smallBusinessWebsitesContainerDiv2Div1Image1 }
                                loading={ 'lazy' }
                                alt={ 'Small business website using custom code' }
                            />
                        </a>

                        <li>
                            <a href="https://sb-site-v2.netlify.app/" target="_blank">Link to the website</a>
                        </li>
                    </ul>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 2 > div 2
                        // ==============================
                    */
                }
                <div>

                    <h5>WordPress Example</h5>

                    <ul>
                        <li>Purpose of app: increase sales, communicate with potential customers and present a top notch professional image</li>
                        <li>Type of website: brochure site</li>

                        {
                            /*
                                // ==============================
                                // click event for showing technical details
                                // ==============================
                            */
                        }
                        <span
                            onClick={ () => setShowApp3( ( prevStatus ) => !prevStatus ) }
                        >
                            { !showApp3 ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                        </span>

                        {
                            /*
                                // ==============================
                                // if showApp3 is true then show the tech details
                                // ==============================
                            */
                        }
                        {
                            showApp3 && (

                                <Fragment>

                                    <li>Content management system: WordPress</li>
                                    <li>Theme: Astra</li>
                                    <li>Page builder: Elementor</li>
                                    <li>Deployment: Netlify</li>

                                </Fragment>

                            )

                        }

                        <li>Please see below for an image from the home page:</li>

                        <a 
                            href="https://serene-travesseiro-c06014.netlify.app/"
                            target="_blank"
                        >
                            <img
                                src={ '/images/sb-wordpress-small-size.jpg' }
                                className={ styles.smallBusinessWebsitesContainerDiv2Div2Image1 }
                                loading={ 'lazy' }
                                alt={ 'Small business website using WordPress' }
                            />
                        </a>

                        <li>
                            <a 
                                href="https://serene-travesseiro-c06014.netlify.app/"
                                target="_blank"
                            >
                                Link to the website
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </div>

    );

} // end of SmallBusinessWebsitesComponent

