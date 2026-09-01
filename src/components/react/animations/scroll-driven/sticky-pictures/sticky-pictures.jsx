



// import in the useRef, useEffect, useState hooks
import { useRef, useEffect, useState } from 'react';
// import in the scss file
import styles from './sticky-pictures.module.scss';




export default function CustomAnimationsComponent() {

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
    let   [ words, setWords ]                                                         = useState( 0 );

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
    const spanRef      = useRef( [] );
    const planeRef     = useRef();
    const boxRef       = useRef();
    const blobRef      = useRef();
    const card1Ref     = useRef();
    const card2Ref     = useRef();
    const card3Ref     = useRef();
    const card4Ref     = useRef();


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

                        // test
                        // ==============================
                        // important comment
                        // ==============================
                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        // console.log( entry );

                        // test
                        // ==============================
                        // important comment
                        // ==============================
                        // if the user ever reloads the page we can use
                        // entry.boundingClientRect.top to tell where the user is at
                        // on the page and then act accordingly
                        console.log( entry.boundingClientRect.top );

                        // ==============================
                        // animation - scroll
                        // ==============================

                        const handleScroll = ( e ) => {

                            // make sure our references exist before running the code below
                            if ( containerRef.current && spanRef.current && planeRef.current && boxRef.current ) {

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
                                console.log( 'Index :', index );

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
                                console.log( 'scrollPositionInsideDivPercentage :', scrollPositionInsideDivPercentage );

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
                                // animation - fade in and translate the h2 words
                                // part 2
                                // ==============================

                                // ==============================
                                // start of the words animation code
                                // ==============================

                                // shows the first word in the words array
                                // console.log( 'first word :', words[ 0 ] );

                                // shows the h2 first word
                                // console.log( 'h2Ref first word :', h2Ref.current.innerText.split( ' ' )[ 0 ] );

                                // show the first span element
                                // console.log( 'First span element :', spanRef.current[ 0 ] );

                                // ==============================
                                // remember, I decided not to use the range values; instead used
                                // values that looked good while scrolling down the page
                                // ==============================

                                // fade in and translate 1 word based on scroll position
                                if ( scrollPositionInsideDivPercentage > 0.200 && scrollPositionInsideDivPercentage <= 0.229 ) {

                                    spanRef.current[ 0 ].style.opacity    = 1;
                                    spanRef.current[ 0 ].style.transition = '300ms';
                                    spanRef.current[ 0 ].style.transform  = "translateX( 0 )";

                                } // end of if

                                // fade in and translate 2 word based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.230 && scrollPositionInsideDivPercentage <= 0.259 ) {

                                    spanRef.current[ 1 ].style.opacity    = 1;
                                    spanRef.current[ 1 ].style.transition = '300ms';
                                    spanRef.current[ 1 ].style.transform  = "translateX( 0 )";

                                } // end of else if

                                // fade in and translate 3 word based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.260 && scrollPositionInsideDivPercentage <= 0.289 ) {

                                    spanRef.current[ 2 ].style.opacity    = 1;
                                    spanRef.current[ 2 ].style.transition = '300ms';
                                    spanRef.current[ 2 ].style.transform  = "translateX( 0 )";

                                } // end of else if

                                // fade in and translate 4 word based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.290 && scrollPositionInsideDivPercentage <= 0.319 ) {

                                    spanRef.current[ 3 ].style.opacity    = 1;
                                    spanRef.current[ 3 ].style.transition = '300ms';
                                    spanRef.current[ 3 ].style.transform  = "translateX( 0 )";

                                } // end of else if

                                // fade in and translate 5 word based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.320 && scrollPositionInsideDivPercentage <= 0.349 ) {

                                    spanRef.current[ 4 ].style.opacity    = 1;
                                    spanRef.current[ 4 ].style.transition = '300ms';
                                    spanRef.current[ 4 ].style.transform  = "translateX( 0 )";

                                } // end of else if

                                // catch all if statement, in case we don't catch all the words
                                // while scrolling
                                else if ( scrollPositionInsideDivPercentage > 0.349 || scrollPositionInsideDivPercentage <= -0.000 ) {

                                    spanRef.current[ 0 ].style.opacity     = 1;
                                    //spanRef.current[ 0 ].style.transition  = '250ms';
                                    spanRef.current[ 0 ].style.transform   = "translateX( 0 )";
                                    spanRef.current[ 1 ].style.opacity     = 1;
                                    //spanRef.current[ 1 ].style.transition  = '250ms';
                                    spanRef.current[ 1 ].style.transform   = "translateX( 0 )";
                                    spanRef.current[ 2 ].style.opacity     = 1;
                                    //spanRef.current[ 2 ].style.transition  = '250ms';
                                    spanRef.current[ 2 ].style.transform   = "translateX( 0 )";
                                    spanRef.current[ 3 ].style.opacity     = 1;
                                    //spanRef.current[ 3 ].style.transition  = '250ms';
                                    spanRef.current[ 3 ].style.transform   = "translateX( 0 )";
                                    spanRef.current[ 4 ].style.opacity     = 1;
                                    //spanRef.current[ 4 ].style.transition  = '250ms';
                                    spanRef.current[ 4 ].style.transform   = "translateX( 0 )";

                                } // end of else if

                                // match the margin right to the original h2 as the screen size
                                // shrinks
                                if (
                                    ( browserWidth <= 768 )
                                ) {

                                    spanRef.current[ 0 ].style.margin  = '0 0.73rem 0 0';
                                    spanRef.current[ 1 ].style.margin  = '0 0.73rem 0 0';
                                    spanRef.current[ 2 ].style.margin  = '0 0.73rem 0 0';
                                    spanRef.current[ 3 ].style.margin  = '0 0.73rem 0 0';
                                    spanRef.current[ 4 ].style.margin  = '0 0.73rem 0 0';

                                } // end of else if ( browserWidth <= 768 )

                                // ==============================
                                // end of the words animation code
                                // ==============================

                                // ==============================
                                // end of animation - fade in and translate the h2 words
                                // part 2
                                // ==============================

                                // ==============================
                                // animation - move the plane across the screen from left
                                // to right as the user scrolls down the page
                                // part 3
                                // ==============================
/*
                                // scroll across the screen based on scroll position
                                if ( scrollPositionInsideDivPercentage > 0.500 ) {

                                    planeRef.current.style.transform  = "translateX( 0vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.510 ) {

                                    planeRef.current.style.transform  = "translateX( 1vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.520 ) {

                                    planeRef.current.style.transform  = "translateX( 2vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.530 ) {

                                    planeRef.current.style.transform  = "translateX( 3vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.540 ) {

                                    planeRef.current.style.transform  = "translateX( 4vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.550 ) {

                                    planeRef.current.style.transform  = "translateX( 5vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.560 ) {

                                    planeRef.current.style.transform  = "translateX( 6vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.570 ) {

                                    planeRef.current.style.transform  = "translateX( 7vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.580 ) {

                                    planeRef.current.style.transform  = "translateX( 8vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.590 ) {

                                    planeRef.current.style.transform  = "translateX( 9vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.600 ) {

                                    planeRef.current.style.transform  = "translateX( 10vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.610 ) {

                                    planeRef.current.style.transform  = "translateX( 11vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.620 ) {

                                    planeRef.current.style.transform  = "translateX( 12vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.630 ) {

                                    planeRef.current.style.transform  = "translateX( 13vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.640 ) {

                                    planeRef.current.style.transform  = "translateX( 14vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.650 ) {

                                    planeRef.current.style.transform  = "translateX( 15vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.660 ) {

                                    planeRef.current.style.transform  = "translateX( 16vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.670 ) {

                                    planeRef.current.style.transform  = "translateX( 17vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.680 ) {

                                    planeRef.current.style.transform  = "translateX( 18vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.690 ) {

                                    planeRef.current.style.transform  = "translateX( 19vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.700 ) {

                                    planeRef.current.style.transform  = "translateX( 20vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.710 ) {

                                    planeRef.current.style.transform  = "translateX( 21w )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.720 ) {

                                    planeRef.current.style.transform  = "translateX( 22vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.730 ) {

                                    planeRef.current.style.transform  = "translateX( 23vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.740 ) {

                                    planeRef.current.style.transform  = "translateX( 24vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.750 ) {

                                    planeRef.current.style.transform  = "translateX( 25vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.760 ) {

                                    planeRef.current.style.transform  = "translateX( 26vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.770 ) {

                                    planeRef.current.style.transform  = "translateX( 27vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.780 ) {

                                    planeRef.current.style.transform  = "translateX( 28vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.790 ) {

                                    planeRef.current.style.transform  = "translateX( 29vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.800 ) {

                                    planeRef.current.style.transform  = "translateX( 30vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.810 ) {

                                    planeRef.current.style.transform  = "translateX( 31vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.820 ) {

                                    planeRef.current.style.transform  = "translateX( 32vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.830 ) {

                                    planeRef.current.style.transform  = "translateX( 33vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.850 ) {

                                    planeRef.current.style.transform  = "translateX( 34vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.850 ) {

                                    planeRef.current.style.transform  = "translateX( 35vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.860 ) {

                                    planeRef.current.style.transform  = "translateX( 36vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.870 ) {

                                    planeRef.current.style.transform  = "translateX( 37vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.880 ) {

                                    planeRef.current.style.transform  = "translateX( 38vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.890 ) {

                                    planeRef.current.style.transform  = "translateX( 39vw )";

                                } // end of if
                                if ( scrollPositionInsideDivPercentage > 0.900 ) {

                                    planeRef.current.style.transform  = "translateX( 40vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.910 ) {

                                    planeRef.current.style.transform  = "translateX( 41vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.920 ) {

                                    planeRef.current.style.transform  = "translateX( 42vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.930 ) {

                                    planeRef.current.style.transform  = "translateX( 43vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.950 ) {

                                    planeRef.current.style.transform  = "translateX( 44vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.950 ) {

                                    planeRef.current.style.transform  = "translateX( 45vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.960 ) {

                                    planeRef.current.style.transform  = "translateX( 46vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.970 ) {

                                    planeRef.current.style.transform  = "translateX( 47vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.980 ) {

                                    planeRef.current.style.transform  = "translateX( 48vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 0.990 ) {

                                    planeRef.current.style.transform  = "translateX( 49vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.000 ) {

                                    planeRef.current.style.transform  = "translateX( 50vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.010 ) {

                                    planeRef.current.style.transform  = "translateX( 51vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.020 ) {

                                    planeRef.current.style.transform  = "translateX( 52vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.030 ) {

                                    planeRef.current.style.transform  = "translateX( 53vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.040 ) {

                                    planeRef.current.style.transform  = "translateX( 54vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.050 ) {

                                    planeRef.current.style.transform  = "translateX( 55vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.060 ) {

                                    planeRef.current.style.transform  = "translateX( 56vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.070 ) {

                                    planeRef.current.style.transform  = "translateX( 57vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.080 ) {

                                    planeRef.current.style.transform  = "translateX( 58vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.090 ) {

                                    planeRef.current.style.transform  = "translateX( 59vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.100 ) {

                                    planeRef.current.style.transform  = "translateX( 60vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.110 ) {

                                    planeRef.current.style.transform  = "translateX( 61vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.120 ) {

                                    planeRef.current.style.transform  = "translateX( 62vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.130 ) {

                                    planeRef.current.style.transform  = "translateX( 63vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.140 ) {

                                    planeRef.current.style.transform  = "translateX( 64vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.150 ) {

                                    planeRef.current.style.transform  = "translateX( 65vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.160 ) {

                                    planeRef.current.style.transform  = "translateX( 66vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.170 ) {

                                    planeRef.current.style.transform  = "translateX( 67vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.180 ) {

                                    planeRef.current.style.transform  = "translateX( 68vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.190 ) {

                                    planeRef.current.style.transform  = "translateX( 69vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.200 ) {

                                    planeRef.current.style.transform  = "translateX( 70vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.210 ) {

                                    planeRef.current.style.transform  = "translateX( 71vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.220 ) {

                                    planeRef.current.style.transform  = "translateX( 72vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.230 ) {

                                    planeRef.current.style.transform  = "translateX( 73vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.240 ) {

                                    planeRef.current.style.transform  = "translateX( 74vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.250 ) {

                                    planeRef.current.style.transform  = "translateX( 75vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.260 ) {

                                    planeRef.current.style.transform  = "translateX( 76vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.270 ) {

                                    planeRef.current.style.transform  = "translateX( 77vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.280 ) {

                                    planeRef.current.style.transform  = "translateX( 78vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.290 ) {

                                    planeRef.current.style.transform  = "translateX( 79vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.300 ) {

                                    planeRef.current.style.transform  = "translateX( 80vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.310 ) {

                                    planeRef.current.style.transform  = "translateX( 81vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.320 ) {

                                    planeRef.current.style.transform  = "translateX( 82vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.330 ) {

                                    planeRef.current.style.transform  = "translateX( 83vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.340 ) {

                                    planeRef.current.style.transform  = "translateX( 84vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.350 ) {

                                    planeRef.current.style.transform  = "translateX( 85vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.360 ) {

                                    planeRef.current.style.transform  = "translateX( 86vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.370 ) {

                                    planeRef.current.style.transform  = "translateX( 87vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.380 ) {

                                    planeRef.current.style.transform  = "translateX( 88vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.390 ) {

                                    planeRef.current.style.transform  = "translateX( 89vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.400 ) {

                                    planeRef.current.style.transform  = "translateX( 90vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.410 ) {

                                    planeRef.current.style.transform  = "translateX( 91vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.420 ) {

                                    planeRef.current.style.transform  = "translateX( 92vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.430 ) {

                                    planeRef.current.style.transform  = "translateX( 93vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.440 ) {

                                    planeRef.current.style.transform  = "translateX( 94vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.450 ) {

                                    planeRef.current.style.transform  = "translateX( 95vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.460 ) {

                                    planeRef.current.style.transform  = "translateX( 96vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.470 ) {

                                    planeRef.current.style.transform  = "translateX( 97vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.480 ) {

                                    planeRef.current.style.transform  = "translateX( 98vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.490 ) {

                                    planeRef.current.style.transform  = "translateX( 99vw )";

                                } // end of if

                                if ( scrollPositionInsideDivPercentage > 1.500 ) {

                                    planeRef.current.style.transform  = "translateX( 100vw )";

                                } // end of if

                                // ==============================
                                // end of animation - move the plane across the screen from left
                                // to right as the user scrolls down the page
                                // part 3
                                // ==============================
*/

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 4 - version 1 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth > 2250
                                // ==============================

                                // ==============================
                                // browserWidth > 2250
                                // ==============================

                                // test
                                // console.log( `${ browserWidth } in scroll` );

                                if ( 
                                    ( browserWidth > 2250 )
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
                                // part 4 - version 1 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth > 2250
                                // ==============================

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 4 - version 1 with --blue-80 && --orange-50 as the box
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
                                // part 4 - version 1 with --blue-80 && --orange-50 as the box
                                // colors and browserWidth > 920 && browserWidth <= 2250
                                // ==============================

                                // ==============================
                                // animation - move the box across the screen from left
                                // to right as the user scrolls down the page
                                // part 4 - version 1 with --blue-80 && --orange-50 as the box
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
                                // part 4 - version 1 with --blue-80 && --orange-50 as the box
                                // colors and brwoserWidth <= 920
                                // ==============================

                            } // end of if

                        }; // end of handleScroll

                        // ==============================
                        // animation - fade in and translate the h2 words
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

                        // get the h2 text
                        const wordsText = 'Increase engagement with custom animations';

                        // split the h2 text into an array
                        const words = wordsText.split( ' ' );

                        // set words
                        setWords( words );

                        // show the array of words
                        // console.log( 'words :', words );

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
                        // end of animation - fade in and translate the h2 words
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

    // the useEffect hook will run after the initial page load and then the
    // useEffect hook will be called each time the browserWidth changes 
    useEffect( () => {

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can either show or hide the " schedule a demo "
        // button based on the window size
        browserWidth = window.innerWidth;

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, we are doing this so that as we test the app by making the browser
        // window smaller or larger we can see the correct 3D sphere
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
    // keep for testing purposes
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    // ==============================
    // purpose : change the scale value based on the browser width
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // remember, we had to define browserWidth inside this function in order
        // to the get the 2 if statements below to work
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

        <div 
            className={ styles.customAnimationsContainer }
            ref={ containerRef }            
        >

            {
                /*
                    // ==============================
                    // container > div 1
                    // ==============================
                */
            }
            <div>

                {
                    /*
                        // ==============================
                        // container > div 1 > h2 ( the h2 word animation )
                        // ==============================
                    */
                }

                <h2>

                {

                    words ? (

                        words.map( ( word, i ) => {

                            return (
                                <span
                                    key={ i }
                                    style={ 
                                        { 
                                            display   : 'inline-block', // needed in order to match the original texy
                                            margin    : '0 0.83rem 0 0', // this matches the original text
                                            opacity   : 0.0, // make this 0.0 or 0.1, depending on the type of animation
                                            transform : 'translateX( 4.0rem )'
                                        }
                                    }
                                    ref={ ( ref ) => ( spanRef.current[ i ] = ref ) } // rememeber, this code came from an anwser in stackoverflow :
                                    // " https://stackoverflow.com/questions/62386786/how-do-i-assign-ref-to-each-element-rendered-by-array-mapping-and-how-do-i-refer "
                                    // " Initialize the reference as an array, and for each index assign the related reference. "
                                    >
                                    { word }
                                </span>
                            )

                        } )

                    ) : null

                }
                
                </h2>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( plane moving across the screen from left to right based on scroll )
                    // ==============================
                */
            }
            <div
                ref={ planeRef }
            >

                <picture>
                    <source 
                        srcSet={ '/images/plane_04_200_color.webp' }
                        type={ 'image/webp' }
                    />
                    <img
                        src={ '/images/plane_04_200_color.png' }
                        loading={ 'lazy' }
                        width={ '200px' }
                        height={ '200px' }
                        // fetchPriority={ 'high' }
                        alt={ 'Picture of paper plane' }
                    />
                </picture>

            </div>

            {
                /*
                    // ==============================
                    // container > div 3 ( rotating box ) ( box moving across the screen from left to right based on scroll )
                    // ==============================
                */
            }
            <div
                ref={ boxRef }
            ></div>

            {
                /*
                    // ==============================
                    // container > div 4 ( square or blob )
                    // ==============================
                */
            }
            <div
                ref={ blobRef }
            ></div>

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
                    // container > div 9 ( wave container )
                    // ==============================
                */
            }
            <div>

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                    {
                        /*
                            <linearGradient id="linear-gradient-index-2">
                                <stop offset="0%" stopColor="var( --color-stop-16 )" />
                                <stop offset="30%" stopColor="var( --color-stop-15 )" />
                                <stop offset="70%" stopColor="var( --color-stop-14 )" />
                                <stop offset="100%" stopColor="var( --color-stop-13 )" />
                            </linearGradient>
                        */
                    }

                    {
                        /*
                            from : https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern

                            "<pattern>

                            The <pattern> element defines a graphics object which can be redrawn at repeated
                            x- and y-coordinate intervals ("tiled") to cover an area.

                            The <pattern> is referenced by the fill and/or stroke attributes on other graphics
                            elements to fill or stroke those elements with the referenced pattern."

                            from : https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs

                            "<defs>
                            
                            The <defs> element is used to store graphical objects that will be used at a later time.
                            Objects created inside a <defs> element are not rendered directly. To display them you
                            have to reference them (with a <use> element for example)."
                        */
                    }

                    <defs>
                        <pattern id="texture-whitey" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image href="/textures/whitey.png" x="0" y="0" width="100" height="100" />
                        </pattern>
                    </defs>

                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>

                </svg>

            </div>

        </div>

    );

} // end of CustomAnimationsComponent


