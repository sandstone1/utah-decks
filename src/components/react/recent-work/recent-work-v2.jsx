


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the Font Awesome calendar check icon
import { FaRegCalendarCheck } from "react-icons/fa6";
// import in our stylesheet
import styles from './recent-work-v2.module.scss';



export default function RecentWorkComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

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

    // use the useRef(); hook to create a reference to a DOM element(s)

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
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.recentWorkContainer }>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                    A Few Recent Projects
                */
            }
            <div>

                <h2>
                    A Glimpse Into Our <span style={ { color : 'var( --green-290 )' } }>Work</span>
                </h2>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 2 ( picture wrapper )
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > picture 1
                            // ==============================
                        */
                    }
                    <picture>
                        <source
                            media="( max-width : 620px )"
                            srcSet="/images/recent_work/recent_08_620.webp"
                            type="image/webp"
                        />
                        <source
                            srcSet="/images/recent_work/recent_08_1440.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/recent_work/recent_08_1440.jpg"
                            width={ 1440 }
                            height={ 810 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Recently completed deck project"
                        />
                    </picture>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > picture 2
                            // ==============================
                        */
                    }
                    <picture>
                        <source
                            media="( max-width : 620px )"
                            srcSet="/images/recent_work/recent_24_620.webp"
                            type="image/webp"
                        />
                        <source
                            srcSet="/images/recent_work/recent_24_1440.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/recent_work/recent_24_1440.jpg"
                            width={ 1440 }
                            height={ 958 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Recently completed deck project"
                        />
                    </picture>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > picture 3
                            // ==============================
                        */
                    }
                    <picture>
                        <source
                            media="( max-width : 620px )"
                            srcSet="/images/recent_work/recent_20_620.webp"
                            type="image/webp"
                        />
                        <source
                            srcSet="/images/recent_work/recent_20_1440.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/recent_work/recent_20_1440.jpg"
                            width={ 1440 }
                            height={ 958 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Recently completed deck project"
                        />
                    </picture>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( get started button )
                    // ==============================
                */
            }
            <div>

                <a href="/get-started#calendar-section">
                    <FaRegCalendarCheck style={ { verticalAlign: '-3.0px', fontSize: '2.25rem', margin: '0 1.0rem 0 0' } } />
                    Get started
                </a>
    
            </div>

        </div>

    );

} // end of RecentWorkComponent

