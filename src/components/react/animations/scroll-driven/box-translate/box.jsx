



// import in the useRef, useEffect, useState hooks
import { useRef, useEffect, useState } from 'react';
// import in the scss file
import styles from './box.module.scss';




export default function BoxComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ startingScrollPosition, setStartingScrollPosition ]                       = useState( 0 );
    const [ scrollPositionInsideDiv, setScrollPositionInsideDiv ]                     = useState( 0 );
    const [ scrollPositionInsideDivPercentage, setScrollPositionInsideDivPercentage ] = useState( 0 );
    let   [ index, setIndex ]                                                         = useState( 0 );

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const containerRef = useRef();
    const boxRef       = useRef();

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
    // useEffect 1
    // ==============================

    // ==============================
    // purpose - fade in and slide up our section
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // get browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // intersection observer
        // ==============================

        // ==============================
        // use the web animations api for the animation
        // ==============================

        // options object
        const sectionOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -50px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires

            // remember, it's the bottom rootMargin that controls when the element
            // isIntersecting

            // from one of the anwsers in stackoverflow : " I think you may be confusing
            // the rootMargin properties. From you question, it sounds like you want the
            // observed element to trigger 50px before it comes into view. If that is the
            // case, then you want to increase the root bottom margin: 0px 0px 50px 0px
            // if you want to trigger the element only when it reaches 50px inside the
            // root, then use: 0px 0px -50px 0px. "

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
        // sectionObserver
        const sectionObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, sectionObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        console.log( entry );

                        // ==============================
                        // animation - scroll
                        // ==============================

                        const handleScroll = ( e ) => {

                            // make sure our references exist before running the code below
                            if ( containerRef.current && boxRef ) {

                                // indicate where we are at in the code
                                // ==============================
                                // important comment
                                // ==============================
                                // console.log( 'In handleScroll' );

                                // ==============================
                                // set the index
                                // ==============================

                                // to set a new index value everytime the scroll event is called we have
                                // to ( 1 ) do " index = index + 1; " and ( 2 ) " setIndex( index ); "
                                index = index + 1;

                                // save the index to state
                                setIndex( index );

                                // show the index value
                                // ==============================
                                // important comment
                                // ==============================
                                // console.log( 'Index :', index );

                                // ==============================
                                // show the event object
                                // ==============================

                                // console.log( 'Event :', e );

                                // show the event timestamp value
                                // console.log( 'Event timestamp :', e.timeStamp );

                                // ==============================
                                // start of building block code
                                // ==============================

                                // getBoundingClientRect() gives us all kinds of good information
                                // ==============================
                                // important comment
                                // ==============================
                                // console.log( 'getBoundingClientRect() :', containerRef.current.getBoundingClientRect() );

                                // show the height of the div in question
                                // console.log( 'getBoundingClientRect().height :', containerRef.current.getBoundingClientRect().height );

                                // show the scroll value to the top of the screen or window
                                // ==============================
                                // important comment
                                // ==============================
                                // console.log( 'window.scrollY :', window.scrollY );

                                // show the starting scroll position from the top of the div
                                // to the top of the screen or window
                                // ==============================
                                // important comment
                                // ==============================
                                // console.log( 'startingScrollPosition :', startingScrollPosition );

                                // get the scroll position inside the div
                                const scrollPositionInsideDiv = startingScrollPosition - window.scrollY;

                                // show the scroll position inside the div
                                // ==============================
                                // important comment
                                // ==============================
                                // console.log( 'scrollPositionInsideDiv :', -scrollPositionInsideDiv );

                                // set the scroll position inside the div
                                setScrollPositionInsideDiv( scrollPositionInsideDiv );

                                // get the scroll position percentage inside the div
                                // and remember this number will be betweem 0 and 1
                                const scrollPositionInsideDivPercentage = -scrollPositionInsideDiv / containerRef.current.getBoundingClientRect().height;

                                // set the scroll position percentage inside the div
                                setScrollPositionInsideDivPercentage( scrollPositionInsideDivPercentage );

                                // show the scroll position percentage inside the div
                                // ==============================
                                // important comment
                                // ==============================
                                // console.log( 'scrollPositionInsideDivPercentage :', scrollPositionInsideDivPercentage );

                                // from MDN : " intersectionRatio property tells you how much of the
                                // target element is currently visible within the root's intersection ratio,
                                // as a value between 0.0 and 1.0. ""
                                // console.log( 'intersectionRatio :', entry.intersectionRatio );

                                // get pageYOffset and scrollY for reference purposes and remember
                                // pageYOffset has been depreciated
                                // const { pageYOffset, scrollY } = window;

                                // show pageYOffset and scrollY
                                // console.log( 'pageYOffset :', pageYOffset, 'scrollY :', scrollY );

                                // ==============================
                                // end of building block code
                                // ==============================

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 2 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth > 2250
                                // ==============================

                                // ==============================
                                // browserWidth > 2250
                                // ==============================

                                // test
                                console.log( `${ browserWidth } in scroll` );

                                if ( 
                                    ( browserWidth > 2250 )
                                ) {

                                    if ( scrollPositionInsideDivPercentage > 0.500 ) {

                                        boxRef.current.style.transform  = "translateX( 0w ) rotate( 0deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.510 ) {

                                        boxRef.current.style.transform  = "translateX( 0w ) rotate( 5deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.520 ) {

                                        boxRef.current.style.transform  = "translateX( 0w ) rotate( 10deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.530 ) {

                                        boxRef.current.style.transform  = "translateX( 0w ) rotate( 15deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.540 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 20deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.550 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 25deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.560 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 30deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.570 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 35deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.580 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 40deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.590 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 45deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.600 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 50deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.610 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 55deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.620 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 60deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.630 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 65deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.640 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 70deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.650 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 75deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";
                                        boxRef.current.style.transition = "250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.660 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 80deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.670 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 85deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.680 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 90deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.690 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 95deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.700 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 100deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.710 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 105deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.720 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 110deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.730 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 115deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.740 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 120eg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.750 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 125deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.760 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 130deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.770 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 135deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.780 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 140deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.790 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 145deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.800 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 150deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.810 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 155deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.820 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 160deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.830 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 165deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.840 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 170deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.850 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 175deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.860 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 180deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.870 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 185deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.880 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 190deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.890 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 195deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if
                                    if ( scrollPositionInsideDivPercentage > 0.900 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 200deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.910 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 205deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.920 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 210deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.930 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 215deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.940 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 220deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.950 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 225deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.960 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 230deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.970 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 235deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.980 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 240deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.990 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 245deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.000 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 250deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.010 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 255deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.020 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 260deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.030 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 265deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.040 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 270deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.050 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 275deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.060 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 280deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.070 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 285deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.080 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 290deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.090 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 295deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.100 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 300deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.110 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 305deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.120 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 310deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.130 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 315deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.140 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 320deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.150 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 325deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.160 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 330deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.170 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 335deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.180 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 340deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.190 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 345deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.200 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 350deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.210 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 355deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.220 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 360deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.230 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 365deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";
                                        boxRef.current.style.transition = "all 250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.240 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 370deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.250 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 375deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.260 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 380deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.270 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 385deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.280 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 390deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.290 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 395deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.300 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 400deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.310 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 405deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.320 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 410deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.330 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 415deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.340 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 420deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.350 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 425deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.360 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 430deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.370 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 435deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.380 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 440deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.390 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 445deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.400 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 450deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.410 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 455deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.420 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 460deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.430 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 465deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.440 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 470deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.450 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 475deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.460 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 480deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.470 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 485deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.480 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 490deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.490 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 495deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.500 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 500deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.510 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 505deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.520 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 510deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.530 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 515deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.540 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 520deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.550 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 525deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.560 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 530deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.570 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 535deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.580 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 540deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.590 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 545deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.600 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 550deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.610 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 555deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.620 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 560deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.630 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 565deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.640 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 570deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.650 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 575deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.660 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 580deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.670 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 585deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.680 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 590deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.690 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 595deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.700 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 600deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.710 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 605deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.720 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 610deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.730 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 615deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.740 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 620deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.750 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 625deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.760 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 630deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                } // end of if

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 2 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth > 2250
                                // ==============================

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 2 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth > 920 && browserWidth <= 2250
                                // ==============================

                                // ==============================
                                // browserWidth > 920 && browserWidth <= 2250 
                                // ==============================

                                if ( 
                                    ( browserWidth > 920 && browserWidth <= 2250 )
                                ) {

                                    if ( scrollPositionInsideDivPercentage > 0.500 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 0deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.510 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 5deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.520 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 10deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.530 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 15deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.540 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 20deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.550 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 25deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.560 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 30deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.570 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 35deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.580 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 40deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.590 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 45deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.600 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 50deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.610 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 55deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.620 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 60deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.630 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 65deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.640 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 70deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.650 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 75deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";
                                        boxRef.current.style.transition = "250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.660 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 80deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.670 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 85deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.680 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 90deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.690 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 95deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.700 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 100deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.710 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 105deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.720 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 110deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.730 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 115deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.740 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 120eg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.750 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 125deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.760 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 130deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.770 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 135deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.780 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 140deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.790 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 145deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.800 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 150deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.810 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 155deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.820 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 160deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.830 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 165deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.840 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 170deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.850 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 175deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.860 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 180deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.870 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 185deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.880 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 190deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.890 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 195deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if
                                    if ( scrollPositionInsideDivPercentage > 0.900 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 200deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.910 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 205deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.920 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 210deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.930 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 215deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.940 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 220deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.950 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 225deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.960 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 230deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.970 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 235deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.980 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 240deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.990 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 245deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.000 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 250deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.010 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 255deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.020 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 260deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.030 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 265deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.040 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 270deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.050 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 275deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";
                                        boxRef.current.style.transition = "all 250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.060 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 280deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.070 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 285deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.080 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 290deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.090 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 295deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.100 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 300deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.110 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 305deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.120 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 310deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.130 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 315deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.140 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 320deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.150 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 325deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.160 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 330deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.170 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 335deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.180 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 340deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.190 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 345deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.200 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 350deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.210 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 355deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.220 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 360deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.230 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 365deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.240 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 370deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.250 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 375deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.260 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 380deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.270 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 385deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.280 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 390deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.290 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 395deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.300 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 400deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";
                                        boxRef.current.style.transition = "250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.310 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 405deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.320 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 410deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.330 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 415deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.340 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 420deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.350 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 425deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.360 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 430deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.370 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 435deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.380 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 440deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.390 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 445deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.400 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 450deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.410 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 455deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.420 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 460deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.430 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 465deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.440 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 470deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.450 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 475deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.460 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 480deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.470 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 485deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.480 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 490deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.490 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 495deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.500 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 500deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.510 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 505deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.520 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 510deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.530 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 515deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.540 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 520deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.550 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 525deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.560 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 530deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.570 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 535deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.580 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 540deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.590 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 545deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.600 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 550deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.610 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 555deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.620 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 560deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.630 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 565deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.640 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 570deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.650 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 575deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.660 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 580deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.670 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 585deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.680 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 590deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.690 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 595deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.700 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 600deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.710 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 605deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.720 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 610deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.730 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 615deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.740 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 620deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.750 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 625deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.760 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 630deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                } // end of if

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 2 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth > 920 && browserWidth <= 2250
                                // ==============================

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 2 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth <= 920
                                // ==============================

                                // ==============================
                                // browserWidth <= 920
                                // ==============================

                                if ( 
                                    ( browserWidth <= 920 )
                                ) {

                                    if ( scrollPositionInsideDivPercentage > 0.500 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 0deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.510 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 5deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.520 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 10deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.530 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 15deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.540 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 20deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.550 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 25deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.560 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 30deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.570 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 35deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.580 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 40deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.590 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 45deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.600 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 50deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.610 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 55deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.620 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 60deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.630 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 65deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.640 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 70deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.650 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 75deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";
                                        boxRef.current.style.transition = "250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.660 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 80deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.670 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 85deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.680 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 90deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.690 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 95deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.700 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 100deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.710 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 105deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.720 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 110deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.730 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 115deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.740 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 120eg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.750 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 125deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.760 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 130deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.770 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 135deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.780 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 140deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.790 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 145deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.800 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 150deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.810 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 155deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.820 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 160deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.830 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 165deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.840 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 170deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.850 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 175deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.860 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 180deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.870 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 185deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.880 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 190deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.890 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 195deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if
                                    if ( scrollPositionInsideDivPercentage > 0.900 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 200deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.910 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 205deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.920 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 210deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.930 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 215deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.940 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 220deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.950 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 225deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.960 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 230deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.970 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 235deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.980 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 240deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 0.990 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 245deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.000 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 250deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.010 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 255deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.020 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 260deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.030 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 265deg )";
                                        boxRef.current.style.background = "var( --blue-80 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.040 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 270deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";
                                        boxRef.current.style.transition = "all 250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.050 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 275deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.060 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 280deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.070 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 285deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.080 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 290deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.090 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 295deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.100 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 300deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.110 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 305deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.120 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 310deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.130 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 315deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.140 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 320deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.150 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 325deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.160 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 330deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.170 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 335deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.180 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 340deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.190 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 345deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.200 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 350deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.210 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 355deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.220 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 360deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.230 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 365deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.240 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 370deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.250 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 375deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.260 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 380deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.270 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 385deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.280 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 390deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.290 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 395deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.300 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 400deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";
                                        boxRef.current.style.transition = "250ms";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.310 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 405deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.320 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 410deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.330 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 415deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.340 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 420deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.350 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 425deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.360 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 430deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.370 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 435deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.380 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 440deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.390 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 445deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.400 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 450deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.410 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 455deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.420 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 460deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.430 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 465deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.440 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 470deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.450 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 475deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.460 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 480deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.470 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 485deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.480 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 490deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.490 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 495deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.500 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 500deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.510 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 505deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.520 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 510deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.530 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 515deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.540 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 520deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.550 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 525deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.560 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 530deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.570 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 535deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.580 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 540deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.590 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 545deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.600 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 550deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.610 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 555deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.620 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 560deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.630 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 565deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.640 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 570deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.650 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 575deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.660 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 580deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.670 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 585deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.680 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 590deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.690 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 595deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.700 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 600deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.710 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 605deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.720 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 610deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.730 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 615deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.740 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 620deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.750 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 625deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                    if ( scrollPositionInsideDivPercentage > 1.760 ) {

                                        boxRef.current.style.transform  = "translateX( 0vw ) rotate( 630deg )";
                                        boxRef.current.style.background = "var( --orange-50 )";

                                    } // end of if

                                } // end of if

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 2 with --blue-80 && --orange-50 as the box
                                // colors and brwoserWidth <= 920
                                // ==============================

                            } // end of if

                        }; // end of handleScroll

                        // ==============================
                        // animation - building block code
                        // part 1
                        // ==============================

                        // getBoundingClientRect() gives us all kinds of good information
                        // ==============================
                        // important comment
                        // ==============================
                        // console.log( 'getBoundingClientRect() :', containerRef.current.getBoundingClientRect() );

                        // get the pixel value of the distance between the top of the screen or window
                        // and the top of the container div
                        let startingScrollPosition = window.scrollY;

                        // set the state and then use this value inside the handleScroll function
                        // above
                        setStartingScrollPosition( startingScrollPosition );

                        // show the startingScrollPosition value
                        // ==============================
                        // important comment
                        // ==============================
                        // console.log( 'startingScrollPosition :', startingScrollPosition );

                        // show the scroll value to the top of the screen or window
                        // console.log( 'window.scrollY :', window.scrollY );

                        // show the scroll value to the top of the screen or window
                        // ==============================
                        // important comment
                        // ==============================
                        // console.log( 'window.scrollY - startingScrollPosition :', window.scrollY - startingScrollPosition === 0 );

                        // ==============================
                        // run handleScroll
                        // ==============================

                        // remember, containerRef.current only runs when we are scrolling on the
                        // container; whereas, window.addEventListener() only runs when we are
                        // scrolling the window

                        // containerRef.current.addEventListener( 'scroll', handleScroll, false );

                        // in almost all cases, we will be scrolling the window
                        window.addEventListener( 'scroll', handleScroll, false );

                        // ==============================
                        // end of animation - building block code
                        // part 1
                        // ==============================

                        // ==============================
                        // end of animation - scroll
                        // ==============================

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( containerRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, sectionObserver )

            sectionOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        sectionObserver.observe( containerRef.current );

        // ==============================
        // end of intersection observer
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // keep for testing purposes
    // ==============================

    // ==============================
    // purpose : call the handleResize function on the browser resize event
    // ==============================

    // ==============================
    // remember, the useEffect hook will run after the initial page load and then the
    // useEffect hook will be called each time the browserWidth changes
    // ==============================

    useEffect( () => {

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // if browserWidth exist then call the handleResize function
        if ( browserWidth ) {

            window.addEventListener( 'resize', handleResize, false );

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                window.removeEventListener( 'resize', handleResize, false );

            };

        } // end of if

    }, [] ) // end of useEffect 2

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    // ==============================
    // purpose : keep for testing purposes
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block #1
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // test
        console.log( `${ browserWidth } in handleResize` );

    } // end of handleResize function

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
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

        // ==============================
        // remember, the way this is set up it is better to keep the container and have the box div
        // inside the container
        // ==============================

        // ==============================
        // remember, we have to position the html code in the correct spot so that our
        // boxes appear where they need to appear
        // ==============================
        <div 
            className={ styles.boxContainer }
            ref={ containerRef }            
        >

            {
                /*
                    // ==============================
                    // container > div 1 ( box ) ( scroll driven animation - box moving across the screen from left to right or just rotating )
                    // ==============================
                */
            }
            <div
                ref={ boxRef }
            ></div>

        </div>

    );

} // end of BoxComponent


