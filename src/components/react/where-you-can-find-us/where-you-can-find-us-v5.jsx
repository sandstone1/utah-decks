



// import in the useRef, useEffect, useState hooks
import { useRef, useEffect, useState } from 'react';
// import in the Highlight Text component
import HighlightTextComponent from '../animations/scroll-driven/highlight-text/highlight-text-v2';
// import in the Maps Javascript API component
import MapsJavascriptAPIComponent from '../google-maps/maps-javascript-api-v4';
// import in the scss file
import styles from './where-you-can-find-us-v5.module.scss';



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

    // use the useRef(); hook to create a reference to a DOM element(s)
    const divRef = useRef();

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // useEffect 1
    // ==============================

    // ==============================
    // purpose - show the map when we reach the intersection observer
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
                        // console.log( entry );

                        // when the h5 element enters the viewport ( i.e. isIntersecting
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

    }, [] ); // end of useEffect 1

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
    
        <div className={ styles.whereYouCanFindUsContainer }>

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
                    // container > div 2
                    // ==============================
                */
            }
            {
                /*
                    // ==============================
                    // I tried to get the image for this div to take up the space of the svg
                    // but was unsuccesful in getting a true alignment between the div's image
                    // and the svg image
                    // ==============================
                */
            }
            <div>

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                    <defs>
                        <clipPath id="img-boardwalk">

                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>

                        </clipPath>

                        <filter id="multiply-filter">

                            <feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply" />
                            <feFlood floodColor="var( --blue-800 )" result="color" />
                            <feBlend in="SourceGraphic" in2="color" mode="multiply" />

                        </filter>

                    </defs>

                    {
                        /* 
                            apply the clip to an image
                        */
                    }
                    <image
                        href="/images/mj_boardwalk_01_2560.webp"
                        x="0"
                        y="0"
                        width="1200"
                        height="120"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url( #img-boardwalk )"
                        filter="url( #multiply-filter )"
                    />

                    {
                        /*
                            color overlay on top of image
                        */
                    }
                    <rect
                        x="0"
                        y="0"
                        width="1200"
                        height="120"
                        fill="var( --blue-800 )"
                        fillOpacity="0.75"
                        clipPath="url( #img-boardwalk )"
                    />

                </svg>


            </div>

            {
                /*
                    // ==============================
                    // container > div 2
                    // ==============================
                */
            }
            <div>
            
                <div>

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

                </div>

                {
                    /*
                        // ==============================
                        // container > div 2 > div 2
                        // ==============================
                    */
                }
                <div>

                    <h2>
                        Where You Can Find Us
                    </h2>

                    <div
                        ref={ divRef }
                    >
                        <HighlightTextComponent />
                    </div>

                </div>  

            </div>

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
            <div>

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>

                </svg>

            </div>

        </div>

    );

} // end of WhereYouCanFindUsComponent

