





// import in the useRef, useEffect, useState hooks
import { useRef, useEffect, useState } from 'react';
// import in the Highlight Text component
import HighlightTextComponent from '../animations/scroll-driven/highlight-text/highlight-text';
// import in the Maps Javascript API component
import MapsJavascriptAPIComponent from '../google-maps/maps-javascript-api';
// import in the scss file
import styles from './where-you-can-find-us.module.scss';



export default function WhereYouCanFindUsComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    const [ isMapOpen, setIsMapOpen ] = useState( false );

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

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variable(s)
    const divRef = useRef();

    // End of STEP 1

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    useEffect( () => {

        // ==============================
        // intersection observer #1
        // ==============================

        // ==============================
        // show map after isIntersecting is true
        // ==============================

        // ==============================
        // this set up will defer the loading of Google Maps and all the JavaScript code
        // it loads until the user reaches the isIntersecting point, which is almost always
        // ( always? ) after the page loads and remember, prior to adding this change
        // PageSpeedInsights was docking our app on performance in a major way ( we had a
        // 63 performance score before implementing this solution )
        // ==============================

        // options object
        const mapShowOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -50px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires

            // remember, it's the bottom rootMargin that controls when the element
            // isIntersecting

            // remember, a positive 400px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 400px
            // above the ref; in other words, a positive root margin is great for pre
            // loading images

            // remember, a negative 50px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 50px
            // below the ref; in other words, a negative root margin is great if want
            // to fade in text or slide up some elements

        } // end of options object

        // create the intersection observer and save the result to the const
        // mapShowObserver
        const mapShowObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, mapShowObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        console.log( entry );

                        // ==============================
                        // create DOM reference
                        // ==============================

                        // STEP 3

                        // reference the specified DOM element below

                        // when the p element enters the viewport ( i.e. isIntersecting
                        // is true ) then we want to set the isMapOpen state to true
                        // and thereby open the map and download all the JavaScript code
                        // that comes with Google Map
                        setIsMapOpen( true );

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        mapShowObserver.unobserve( divRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, mapShowObserver )

            mapShowOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        mapShowObserver.observe( divRef.current );

        // ==============================
        // end of intersection observer #1
        // ==============================

    }, [] ); // end of useEffect #1

    // ==============================
    // functions
    // ==============================


    return (

        <div className={ styles.whereYouCanFindUsContainer }>

            {
                /*
                    // ==============================
                    // tilt shape
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
            <div className={ styles.primaryMarketsContainerDiv1 }>

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>

                </svg>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2
                    // ==============================
                */
            }
            <div className={ styles.whereYouCanFindUsContainerDiv2 }>

                <h2>
                    Where You Can Find Us
                </h2>

                <div
                    ref={ divRef }
                >
                    <HighlightTextComponent />
                </div>

                {
                    /*
                        // ==============================
                        // Google map
                        // ==============================
                    */
                }
                {
                    isMapOpen && (

                        <MapsJavascriptAPIComponent />

                    )
                }

                {
                    /*
                        // ==============================
                        // end of Google map
                        // ==============================
                    */
                }

            </div>

        </div>

    );

} // end of WhereYouCanFindUsComponent
