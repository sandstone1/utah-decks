



// import in Fragment, the useState hook
import { Fragment, useState } from 'react';
// import in the scss file
import styles from './api.module.scss';



export default function APIWebsitesComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ showApp5, setShowApp5 ] = useState( false );
    const [ showApp6, setShowApp6 ] = useState( false );

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

        <div className={ styles.apiWebsitesContainer }>

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

                    <linearGradient id="linear-gradient-index">
                        <stop offset="0%" stopColor="var( --color-stop-1 )" />
                        <stop offset="100%" stopColor="var( --color-stop-2 )" />
                    </linearGradient>

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

                <h3>API Websites</h3>

                {
                    /*
                        // ==============================
                        // container > div 2 > div 1
                        // ==============================
                    */
                }
                <div>

                    <h5>GitHub Finder</h5>

                    <ul>
                        <li>Purpose of app: to search for GitHub users ( over 40 million users  )</li>
                        <li>Type of website: API integration</li>

                        {
                            /*
                                // ==============================
                                // click event for showing technical details
                                // ==============================
                            */
                        }
                        <span
                            onClick={ () => setShowApp5( ( prevStatus ) => !prevStatus ) }
                        >
                            { !showApp5 ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                        </span>

                        {
                            /*
                                // ==============================
                                // if showApp5 is true then show the tech details
                                // ==============================
                            */
                        }
                        {
                            showApp5 && (

                                <Fragment>

                                    <li>Languages: JavaScript ( ES6+ )</li>
                                    <li>Frameworks: none</li>
                                    <li>Libraries: React</li>
                                    <li>React features: Context API, React Hooks and React Skeleton</li>
                                    <li>CSS pre-processor: SASS (css was coded from scratch)</li>
                                    <li>Deployment: Netlify</li>

                                </Fragment>

                            )

                        }

                        <li>Please see below for an image from the home page:</li>
                            <a 
                                href="https://github-finder-18fe75.netlify.app/"
                                target="_blank"
                            >
                                <img
                                    src={ '/images/github_finder_01_1120.jpeg' }
                                    className={ styles.apiWebsiteContainerDiv2Div1Image1 }
                                    loading={ 'lazy' }
                                    alt={ 'GitHub finder' }
                                />
                            </a>
                        <li>
                            <a href="https://github-finder-18fe75.netlify.app/" target="_blank">Link to the website</a>
                        </li>
                    </ul>

                </div>

                {
                    /*
                        // ==============================
                        // container > > div 2 > div 2
                        // ==============================
                    */
                }
                <div>

                    <h5>Star Wars Planets and People</h5>

                    <ul>
                        <li>Purpose of app: a Star Wars people and planet reference list</li>
                        <li>Type of website: API integration</li>

                        {
                            /*
                                // ==============================
                                // click event for showing technical details
                                // ==============================
                            */
                        }
                        <span
                            onClick={ () => setShowApp6( ( prevStatus ) => !prevStatus ) }
                        >
                            { !showApp6 ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                        </span>

                        {
                            /*
                                // ==============================
                                // if showApp6 is true then show the tech details
                                // ==============================
                            */
                        }
                        {
                            showApp6 && (

                                <Fragment>

                                    <li>Languages: JavaScript ( ES6+ )</li>
                                    <li>Frameworks: none</li>
                                    <li>Libraries: React</li>
                                    <li>React features: React Query</li>
                                    <li>CSS pre-processor: none (css was coded from scratch)</li>
                                    <li>Deployment: Netlify</li>

                                </Fragment>

                            )

                        }

                        <li>Please see below for an image from the home page:</li>

                            <a 
                                href="https://star-wars-api-a73bc0.netlify.app/"
                                target="_blank"
                            >
                                <img
                                    src={ '/images/star_wars_api_01_1120.jpeg' }
                                    className={ styles.apiWebsiteContainerDiv2Div2Image1 }
                                    loading={ 'lazy' }
                                    alt={ 'Star Wars information' }
                                />
                            </a>
                        <li>
                            <a href="https://star-wars-api-a73bc0.netlify.app/" target="_blank">Link to the website</a>
                        </li>
                    </ul>

                </div>

            </div>

        </div>

    );

} // end of APIWebsitesComponent

