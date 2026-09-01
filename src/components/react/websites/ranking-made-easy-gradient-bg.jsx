



// import in Fragment, the useState hook
import { Fragment, useState } from 'react';
// import in the scss file
import styles from './ranking-made-easy-gradient-bg.module.scss';



export default function RankingMadeEasyWebsiteComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ showApp, setShowApp ] = useState( false );

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

        <div className={ styles.rankingMadeEasyWebsiteContainer }>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div>

                <h3>Proprietary App</h3>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 1
                        // ==============================
                    */
                }
                <div>

                    <h5>Ranking Made Easy</h5>

                    <ul>
                        <li>Purpose of app: make it easy for businesses to get more 5&#45;star customer reviews</li>
                        <li>Type of website: marketing automation app</li>

                        {
                            /*
                                // ==============================
                                // click event for showing technical details
                                // ==============================
                            */
                        }
                        <span
                            onClick={ () => setShowApp( ( prevStatus ) => !prevStatus ) }
                        >
                            { !showApp ? `Click here to see the app's technical details` : `Click here to hide the app's technical details` }
                        </span>

                        {
                            /*
                                // ==============================
                                // if showApp is true then show the tech details
                                // ==============================
                            */
                        }
                        {
                            showApp && (

                                <Fragment>

                                    <li>Languages: JavaScript ( ES6+ )</li>
                                    <li>Frameworks: Next.js</li>
                                    <li>Libraries: React</li>
                                    <li>CSS pre-processor: SASS (css was coded from scratch)</li>
                                    <li>API integration: send service recovery emails using the Postmark API</li>
                                    <li>Deployment: Netlify</li>

                                </Fragment>

                            )

                        }

                        <li>Please see below for an image from the home page:</li>

                        <a 
                            href="https://rankingmadeeasy.com/"
                            target="_blank"
                        >
                            <img
                                src={ '/images/ranking_made_easy_home_page.jpg' }
                                className={ styles.rankingMadeEasyWebsiteContainerImage1 }
                                loading={ 'lazy' }
                                alt={ 'Ranking Made Easy home page' }
                            />
                        </a>

                        <li>
                            <a href="https://rankingmadeeasy.com/" target="_blank">Link to the website</a>
                        </li>

                    </ul>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( square or blob )
                    // ==============================
                */
            }
            <div></div>

        </div>

    );

} // end of RankingMadeEasyWebsiteComponent

