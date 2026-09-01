



// import in Fragment, the useState hook
import { Fragment, useState } from 'react';
// import in the Circle component
import CircleComponent from '../animations/circle/circle-v1';
// import in the scss file
import styles from './real-estate-broker-gray-bg-v2.module.scss';



export default function RealEstateBrokerWebsiteComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ showApp4, setShowApp4 ] = useState( false );

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

        <div className={ styles.realEstateBrokerWebsiteContainer }>

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

                <h3>Real Estate Broker Home Page</h3>

                {
                    /*
                        // ==============================
                        // container > div 2 > div 1
                        // ==============================
                    */
                }
                <div>

                    <h5>Nexter</h5>

                    <ul>
                        <li>Purpose of app: landing page for a real estate broker</li>
                        <li>Type of website: brochure site</li>

                        {
                            /*
                                // ==============================
                                // click event for showing technical details
                                // ==============================
                            */
                        }
                        <span
                            onClick={ () => setShowApp4( ( prevStatus ) => !prevStatus ) }
                        >
                            { !showApp4 ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                        </span>

                        {
                            /*
                                // ==============================
                                // if showApp4 is true then show the tech details
                                // ==============================
                            */
                        }
                        {
                            showApp4 && (

                                <Fragment>

                                    <li>Languages: JavaScript ( ES6+ )</li>
                                    <li>Frameworks: none</li>
                                    <li>Libraries: React</li>
                                    <li>React features: none</li>
                                    <li>CSS pre-processor: SASS (css was coded from scratch)</li>
                                    <li>Deployment: Netlify</li>

                                </Fragment>

                            )

                        }

                        <li>Please see below for an image from the home page:</li>

                        <a 
                            href="https://nexters-react-685172.netlify.app/"
                            target="_blank"
                        >
                            <img
                                src={ '/images/nexters_react_page_1_small_size.jpeg' }
                                className={ styles.realEstateBrokerWebsiteContainerImage1 }
                                loading={ 'lazy' }
                                alt={ 'Landing page for real estate broker' }
                            />
                        </a>

                        <li>
                            <a href="https://nexters-react-685172.netlify.app/" target="_blank">Link to the website</a>
                        </li>

                    </ul>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 3 ( circle component )
                    // =============================

                    <CircleComponent />
                */
            }


        </div>

    );

} // end of RealEstateBrokerWebsiteComponent

