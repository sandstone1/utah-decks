



// import in the useRef, useEffect, useState hooks
import { useRef, useEffect, useState } from 'react';
// import in Animating Gradient Blur component
import AnimatingGradientBackground from '../../animating-gradient/animating-gradient-background-v2';
// import in the scss file
import styles from './sticky-pictures-v4.module.scss';


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
    const [ isAnimatingBackgroundOpen, setIsAnimatingBackgroundOpen ]                 = useState( false );
    const [ windowScrollY, setWindowScrollY ]                                         = useState( 0 );
    const [ totalScrollY, setTotalScrollY ]                                           = useState( 0 );

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

    let firstBlock  = false;
    let secondBlock = false;
    let thirdBlock  = false;
    let fourthBlock = false;
    let fifthBlock  = false;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const containerRef           = useRef();
    const spanRef                = useRef( [] );
    const boxRef                 = useRef();
    const blobRef                = useRef();
    const card1Ref               = useRef();
    const card2Ref               = useRef();
    const card3Ref               = useRef();
    const card4Ref               = useRef();
    const imageBackgroundRef     = useRef();
    const animatingBackgroundRef = useRef();
    const secondH2Ref            = useRef();


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
                        // console.log( entry.boundingClientRect.top );

                        // ==============================
                        // TEST 1 ( see TEST 2 below )
                        // ==============================
    
                        // ==============================
                        // entry.boundingClientRect.top > 0 if statement
                        // ==============================

                        // ==============================
                        // additional check
                        //
                        // remember, we want to check and see if the user is scrolling
                        // up or down and depending on the direction we want different
                        // code to run
                        //
                        // remember, this check is only useful if the user had reloaded
                        // the page and happens to be underneth the container and the user
                        // is scrolling up to this container and the reason this
                        // code is useful is because it prevents the opacity and slide up
                        // animation from running a second time as the user is scrolling
                        // up to this container
                        // ==============================

                        // ==============================
                        // entry.boundingClientRect.top definition : " This property tells
                        // you the vertical position of the element relative to the top of
                        // the viewport. If it's less than 0, the element is above the top
                        // edge of the viewport. "
                        // ==============================

                        // determine if the user is scrolling down and if so then run
                        // our opacity and slide up animation
                        if ( entry.boundingClientRect.top > 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // down
                            console.log( 'Element entered from the bottom' );

                            // ==============================
                            // check 1
                            // ==============================

                            // ==============================
                            // if the browser supports the animation timeline API then use view
                            // timeline to animate the rotation
                            // ==============================

                            if ( CSS.supports( 'animation-timeline : scroll()' ) ) {

                                // test
                                console.log( 'Yes, supports animation-timeline' );

                                // use the web animations API and the ViewTimeline API to
                                // animate the image rotation
                                boxRef.current.animate(

                                    [
                                        {
                                            transform : "rotate( 0deg )"
                                        }, 
                                        {
                                            transform : "rotate( 720deg )" // control the speed to the rotation
                                        }
                                    ],
                                    {

                                        // duration   : 350, // no need here
                                        easing     : "ease-out",
                                        delay      : 0,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards",// this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                                        timeline   : new ViewTimeline(
                                            {
                                                subject : boxRef.current,
                                                axis    : 'block' // horizontal direction
                                            }
                                        ), // use the view-timeline to animate the scroll driven animation
                                        rangeStart : 'entry 0%', // change the rangeStart and rangeEnd to match the desired effect
                                        rangeEnd   : 'exit 0%'
                    
                                    }

                                ); // end of boxRef.current.animate()

                            } // end of if ( CSS.supports( 'animation-timeline : scroll()' ) )

                            // ==============================
                            // check 2
                            // ==============================

                            // ==============================
                            // if the browser does not support the animation timeline API then use
                            // manual code to animate the rotation
                            // ==============================

                            else {

                                // test
                                console.log( 'No, does not support animation-timeline' );

                                // ==============================
                                // animation - scroll
                                // 2nd function
                                // ==============================

                                const handleScrollBox = ( e ) => {

                                    // make sure our reference exist before running the code below
                                    if (
                                        boxRef.current
                                    ) {

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

                                        // show the top value of the div in question
                                        // console.log( 'getBoundingClientRect().top :', containerRef.current.getBoundingClientRect().top );

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
                                        // animation - rotate the boxes as the user scrolls down the page
                                        // part 3 - with browserWidth > 0
                                        // ==============================

                                        // ==============================
                                        // browserWidth > 0
                                        // ==============================

                                        if ( 
                                            ( browserWidth > 0 )
                                        ) {

                                            if ( scrollPositionInsideDivPercentage > 0.500 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 0deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )"; // need opacity of zero so the rudder
                                                // image is all the user sees

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.510 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 5deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.520 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 10deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.530 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 15deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.540 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 20deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.550 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 25deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.560 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 30deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.570 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 35deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.580 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 40deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.590 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 45deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.600 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 50deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.610 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 55deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.620 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 60deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.630 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 65deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.640 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 70deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.650 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 75deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";
                                                boxRef.current.style.transition = "250ms";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.660 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 80deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.670 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 85deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.680 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 90deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.690 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 95deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.700 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 100deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.710 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 105deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.720 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 110deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.730 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 115deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.740 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 120eg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.750 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 125deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.760 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 130deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.770 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 135deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.780 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 140deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.790 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 145deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.800 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 150deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.810 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 155deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.820 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 160deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.830 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 165deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.840 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 170deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.850 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 175deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.860 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 180deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.870 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 185deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.880 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 190deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.890 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 195deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.900 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 200deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.910 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 205deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.920 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 210deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.930 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 215deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.940 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 220deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.950 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 225deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.960 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 230deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.970 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 235deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.980 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 240deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.990 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 245deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.000 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 250deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.010 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 255deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.020 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 260deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.030 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 265deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.040 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 270deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.050 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 275deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.060 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 280deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.070 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 285deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.080 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 290deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.090 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 295deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.100 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 300deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.110 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 305deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.120 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 310deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.130 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 315deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.140 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 320deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.150 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 325deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.160 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 330deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.170 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 335deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.180 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 340deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.190 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 345deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.200 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 350deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.210 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 355deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.220 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 360deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.230 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 365deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";
                                                boxRef.current.style.transition = "all 250ms";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.240 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 370deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.250 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 375deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.260 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 380deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.270 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 385deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.280 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 390deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.290 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 395deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.300 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 400deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.310 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 405deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.320 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 410deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.330 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 415deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.340 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 420deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.350 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 425deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.360 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 430deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.370 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 435deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.380 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 440deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.390 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 445deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.400 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 450deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.410 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 455deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.420 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 460deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.430 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 465deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.440 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 470deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.450 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 475deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.460 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 480deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.470 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 485deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.480 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 490deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.490 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 495deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.500 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 500deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.510 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 505deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.520 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 510deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.530 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 515deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.540 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 520deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.550 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 525deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.560 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 530deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.570 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 535deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.580 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 540deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.590 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 545deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.600 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 550deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.610 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 555deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.620 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 560deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.630 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 565deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.640 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 570deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.650 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 575deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.660 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 580deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.670 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 585deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.680 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 590deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.690 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 595deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.700 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 600deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.710 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 605deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.720 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 610deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.730 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 615deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.740 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 620deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.750 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 625deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.760 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 630deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                        } // end of if

                                        // ==============================
                                        // end of animation - rotate the boxes as the user scrolls down the page
                                        // part 3 - with browserWidth > 2250
                                        // ==============================

                                    } // end of if

                                } // end of handleScrollBox
                            
                                // ==============================
                                // run handleScrollBox
                                // ==============================

                                // in almost all cases, we will be scrolling the window
                                window.addEventListener( 'scroll', handleScrollBox, false );

                            } // end of if else

                            // ==============================
                            // animation - scroll
                            // 1st function
                            // ==============================

                            const handleScroll = ( e ) => {

                                // make sure our references exist before running the code below
                                if ( 
                                    containerRef.current &&
                                    spanRef.current[ 0 ] &&
                                    card1Ref.current &&
                                    card2Ref.current &&
                                    card3Ref.current &&
                                    card4Ref.current &&
                                    blobRef.current &&
                                    boxRef.current &&
                                    animatingBackgroundRef.current
                                ) {

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

                                    // show the top value of the div in question
                                    // console.log( 'getBoundingClientRect().top :', containerRef.current.getBoundingClientRect().top );

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
                                    if ( scrollPositionInsideDivPercentage > 0.020 && scrollPositionInsideDivPercentage <= 0.050 ) {

                                        spanRef.current[ 0 ].style.opacity    = 1;
                                        spanRef.current[ 0 ].style.transition = '300ms';
                                        spanRef.current[ 0 ].style.transform  = "translateX( 0 )";

                                    } // end of if

                                    // fade in and translate 2 word based on scroll position
                                    else if ( scrollPositionInsideDivPercentage > 0.050 && scrollPositionInsideDivPercentage <= 0.080 ) {

                                        spanRef.current[ 1 ].style.opacity    = 1;
                                        spanRef.current[ 1 ].style.transition = '300ms';
                                        spanRef.current[ 1 ].style.transform  = "translateX( 0 )";

                                    } // end of else if

                                    // fade in and translate 3 word based on scroll position
                                    else if ( scrollPositionInsideDivPercentage > 0.080 && scrollPositionInsideDivPercentage <= 0.110 ) {

                                        spanRef.current[ 2 ].style.opacity    = 1;
                                        spanRef.current[ 2 ].style.transition = '300ms';
                                        spanRef.current[ 2 ].style.transform  = "translateX( 0 )";

                                    } // end of else if

                                    // fade in and translate 4 word based on scroll position
                                    else if ( scrollPositionInsideDivPercentage > 0.110 && scrollPositionInsideDivPercentage <= 0.140 ) {

                                        spanRef.current[ 3 ].style.opacity    = 1;
                                        spanRef.current[ 3 ].style.transition = '300ms';
                                        spanRef.current[ 3 ].style.transform  = "translateX( 0 )";

                                    } // end of else if

                                    // fade in and translate 5 word based on scroll position
                                    else if ( scrollPositionInsideDivPercentage > 0.140 && scrollPositionInsideDivPercentage <= 0.170 ) {

                                        spanRef.current[ 4 ].style.opacity    = 1;
                                        spanRef.current[ 4 ].style.transition = '300ms';
                                        spanRef.current[ 4 ].style.transform  = "translateX( 0 )";

                                    } // end of else if

                                    // catch all if statement, in case we don't catch all the words
                                    // while scrolling
                                    else if ( scrollPositionInsideDivPercentage > 0.170 || scrollPositionInsideDivPercentage <= -0.000 ) {

                                        spanRef.current[ 0 ].style.opacity   = 1;
                                        spanRef.current[ 0 ].style.transform = "translateX( 0 )";
                                        spanRef.current[ 1 ].style.opacity   = 1;
                                        spanRef.current[ 1 ].style.transform = "translateX( 0 )";
                                        spanRef.current[ 2 ].style.opacity   = 1;
                                        spanRef.current[ 2 ].style.transform = "translateX( 0 )";
                                        spanRef.current[ 3 ].style.opacity   = 1;
                                        spanRef.current[ 3 ].style.transform = "translateX( 0 )";
                                        spanRef.current[ 4 ].style.opacity   = 1;
                                        spanRef.current[ 4 ].style.transform = "translateX( 0 )";

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
                                    // animation - translate and rotate the images boxes across as the user
                                    // scrolls down the page
                                    // part 4
                                    // ==============================

                                    // get the distance value and this should be about 50vh and use that to
                                    // calculate when to move rotate and translate and the image boxes
                                    let distance = window.innerHeight / 2;

                                    // test
                                    // console.log( distance );

                                    // ==============================
                                    // browserWidth > 0
                                    // ==============================

                                    if ( 
                                        ( browserWidth > 0 )
                                    ) {

                                        // ==============================
                                        // before we start animating make sure the cards are visible
                                        // ==============================
                                        
                                        card1Ref.current.style.opacity = 1; 
                                        card2Ref.current.style.opacity = 1;
                                        card3Ref.current.style.opacity = 1;
                                        card4Ref.current.style.opacity = 1;

                                        // ==============================
                                        // first block of code for the animation and based on approximately 50vh
                                        // ==============================

                                        if ( -scrollPositionInsideDiv > ( distance * 2.50 ) && -scrollPositionInsideDiv < ( distance * 3.75 ) && firstBlock === false ) {

                                            // ==============================
                                            // animation - slide up, rotateZ
                                            // ==============================

                                            card4Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( 0deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( -1000vh ) rotateZ( -45deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 10000,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card4Ref.current.animate()

                                            // change the state so this animation only runs one time
                                            firstBlock = true;

                                            // ==============================
                                            // animation - rotateZ
                                            // ==============================

                                            card3Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -10deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( 0deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 500,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card3Ref.current.animate()

                                            // ==============================
                                            // animation - rotateZ
                                            // ==============================

                                            card2Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -20deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -10deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 500,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card2Ref.current.animate()

                                            // ==============================
                                            // animation - rotateZ
                                            // ==============================

                                            card1Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -30deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -20deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 500,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card1Ref.current.animate()

                                        } // end of if

                                        // ==============================
                                        // second block of code for the animation and based on approximately 50vh
                                        // ==============================

                                        if ( -scrollPositionInsideDiv >= ( distance * 3.75 ) && -scrollPositionInsideDiv < ( distance * 5.00 ) && secondBlock === false ) {

                                            // ==============================
                                            // animation - slide up, rotateZ
                                            // ==============================

                                            card3Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( 0deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( -1000vh ) rotateZ( -45deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 10000,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card3Ref.current.animate()

                                            // change the state so this animation only runs one time
                                            secondBlock = true;

                                            // ==============================
                                            // animation - rotateZ
                                            // ==============================

                                            card2Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -10deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( 0deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 500,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card2Ref.current.animate()

                                            // ==============================
                                            // animation - rotateZ
                                            // ==============================

                                            card1Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -20deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -10deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 500,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card1Ref.current.animate()

                                        } // end of if

                                        // ==============================
                                        // third block of code for the animation and based on approximately 50vh
                                        // ==============================

                                        if ( -scrollPositionInsideDiv >= ( distance * 5.00 ) && -scrollPositionInsideDiv < ( distance * 6.25 ) && thirdBlock === false ) {

                                            // ==============================
                                            // animation - slide up, rotateZ
                                            // ==============================

                                            card2Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( 0deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( -1000vh ) rotateZ( -45deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 10000,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card2Ref.current.animate()

                                            // change the state so this animation only runs one time
                                            thirdBlock = true;

                                            // ==============================
                                            // animation - rotateZ
                                            // ==============================

                                            card1Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( -10deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( 0deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 500,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card1Ref.current.animate()

                                        } // end of if

                                        // ==============================
                                        // fourth block of code for the animation and based on approximately 50vh
                                        // ==============================

                                        if ( -scrollPositionInsideDiv >= ( distance * 6.25 ) && -scrollPositionInsideDiv < ( distance * 7.50 ) && fourthBlock === false ) {

                                            // ==============================
                                            // animation - slide up, rotateZ
                                            // ==============================

                                            card1Ref.current.animate(

                                                [
                                                    {
                                                        transform : 'translateY( 0 ) rotateZ( 0deg )',
                                                        opacity   : 1
                                                    },
                                                    {
                                                        transform : 'translateY( -1000vh ) rotateZ( -45deg )',
                                                        opacity   : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 10000,
                                                    easing     : 'ease-out',
                                                    delay      : 0,
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                }

                                            ); // end of card1Ref.current.animate()

                                            // change the state so this animation only runs one time
                                            fourthBlock = true;

                                        } // end of if

                                        // ==============================
                                        // fifth block of code for the animation and based on approximately 50vh
                                        // ==============================

                                        // if ( -scrollPositionInsideDiv > ( distance * 7.50 ) && fifthBlock === false ) {

                                         // as soon as the fourthBlock turns true then we want to run the fifth block
                                         // and the reason we want to do this is to cut down on the time between the
                                         // fourth block ending and the fifth block starting
                                        if ( fourthBlock === true && fifthBlock === false ) {

                                            // test
                                            // console.log( 'In Fifth Block' );

                                            // ==============================
                                            // animation - opacity
                                            // ==============================

                                            blobRef.current.animate(

                                                [
                                                    {
                                                        opacity : 0
                                                    },
                                                    {
                                                        opacity : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 400, // having the blog animate in first prevented the flickering in Firefox
                                                    easing     : 'ease-out',
                                                    delay      : 200, // add a slight delay
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                    // composite : 'add' // need this in order to add the particle rotate animation or part 2
                                                    // to this animation
                                                }

                                            ); // end of blobRef.current.animate()

                                            // ==============================
                                            // animation - opacity
                                            // ==============================

                                            boxRef.current.animate(

                                                [
                                                    {
                                                        opacity : 0
                                                    },
                                                    {
                                                        opacity : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 800,
                                                    easing     : 'ease-out',
                                                    delay      : 200, // add a slight delay
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                    // composite : 'add' // need this in order to add the particle rotate animation or part 2
                                                    // to this animation
                                                }

                                            ); // end of boxRef.current.animate()

                                            // ==============================
                                            // animation - opacity
                                            // ==============================

                                            animatingBackgroundRef.current.animate(

                                                [
                                                    {
                                                        opacity : 0
                                                    },
                                                    {
                                                        opacity : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 800,
                                                    easing     : 'ease-out',
                                                    delay      : 200, // add a slight delay
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                    // composite : 'add' // need this in order to add the particle rotate animation or part 2
                                                    // to this animation
                                                }

                                            ); // end of animatingBackgroundRef.current.animate()

                                            // ==============================
                                            // animation - opacity
                                            // ==============================

                                            imageBackgroundRef.current.animate(

                                                [
                                                    {
                                                        opacity : 0
                                                    },
                                                    {
                                                        opacity : 1
                                                    }
                                                ],
                                                {
                                                    duration   : 800,
                                                    easing     : 'ease-out',
                                                    delay      : 200, // add a slight delay
                                                    iterations : 1, // this is default but leave here for reference
                                                    fill       : 'forwards', // this lets the " element retain the style values
                                                    // from the last keyframe when the animation ends "
                                                    // composite : 'add' // need this in order to add the particle rotate animation or part 2
                                                    // to this animation
                                                }

                                            ); // end of imageBackgroundRef.current.animate()

                                            // change the state so this animation only runs one time
                                            fifthBlock = true;

                                        } // end of if

                                    } // end of if ( browserWidth > 0 )

                                    // ==============================
                                    // end of animation - translate and rotate the boxes across as the
                                    // user scrolls down the page
                                    // part 4
                                    // ==============================

                                } // end of if if ( containerRef.current && spanRef.current && card1Ref.current && card2Ref.current && card3Ref.current && card4Ref.current )

                            }; // end of handleScroll

                            // ==============================
                            // animation - handleScroll
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

                        } // end of if ( entry.boundingClientRect.top > 0 )

                        // determine if the user is scrolling up and if so we do nothing

                        // ==============================
                        // TEST 2
                        // ==============================

                        // ==============================
                        // entry.boundingClientRect.top <= 0 if statement
                        // ==============================

                        // remember, since we have " position : sticky " we will either get a positive
                        // number ( user scrolling down ) or 0 ( user scrolling up or on top of the
                        // section )
                        if ( entry.boundingClientRect.top <= 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // up
                            console.log( 'Element entered from the top' );

                            // get the h2 text
                            const wordsText = 'Increase engagement with custom animations';

                            // split the h2 text into an array
                            const words = wordsText.split( ' ' );

                            // set words
                            setWords( words );

                            // ==============================
                            // step 1
                            //
                            // show or hide all the elements
                            // ==============================

                            // then just show the container with no animation and remember this
                            // is typically not the case but we need this code here just in case the
                            // user reloads the page and the user happens to be under this container
                            // and assuming the user scrolls up to this container then in this case we
                            // don't want any of the scroll down animation, just a visible container
                            // with the title, blob or animating backgronds and the rudder animating in

                            // ==============================
                            // remember, if we are in if ( entry.boundingClientRect.top <= 0 ) {}
                            // or TEST 2 then we have access to the second h2 and the animation for
                            // the first h2 never runs
                            // 
                            // remember, if we are in if ( entry.boundingClientRect.top > 0 ) {}
                            // or TEST 1 then we have access to the first h2 and the animation for
                            // the second h2 never runs
                            // ==============================

                            secondH2Ref.current.style.opacity                             = 1; // show
                            secondH2Ref.current.style.transitionDuration                  = '400ms';
                            secondH2Ref.current.style.transitionTimingFunction            = 'ease-out';
                            boxRef.current.style.opacity                                  = 1; // show
                            boxRef.current.style.transitionDuration                       = '400ms';
                            boxRef.current.style.transitionTimingFunction                 = 'ease-out';
                            blobRef.current.style.opacity                                 = 1; // show
                            blobRef.current.style.transitionDuration                      = '400ms';
                            blobRef.current.style.transitionTimingFunction                = 'ease-out';
                            animatingBackgroundRef.current.style.opacity                  = 1; // show
                            animatingBackgroundRef.current.style.transitionDuration       = '400ms';
                            animatingBackgroundRef.current.style.transitionTimingFunction = 'ease-out';
                            imageBackgroundRef.current.style.opacity                      = 1; // show
                            imageBackgroundRef.current.style.transitionDuration           = '400ms';
                            imageBackgroundRef.current.style.transitionTimingFunction     = 'ease-out';

                            // ==============================
                            // IMPORTANT!
                            //
                            // SETTIMEOUT CREATES A CLOSURE
                            //
                            // OR HAS ACCESS TO VARIABLES THAT OTHERWISE WE WOULD NOT HAVE ACCESS TO
                            // ==============================

                            // ==============================
                            // remember, we had to use setTimeout to create a closure, otherwise
                            // the code wasn't picking up " spanRef.current[ 0 ], etc. " unless we
                            // put the code inside the setTimeout function
                            //
                            // " It's important to understand that closures are created when
                            // functions are created, not when they are invoked. And because a
                            // closure was created when this setTimeout function was created,
                            // this enables the setTimeout function to access the i variable at
                            // whatever time the setTimeout function will run. "
                            // ==============================
                            // setTimeout( () => {
                            // }, 0 ); // end of setTimeout

                            // ==============================
                            // END OF SETTIMEOUT CREATES A CLOSURE
                            // ==============================

                            // ==============================
                            // step 2
                            //
                            // rotate the box
                            //
                            // remember, the blog is moving based on the css file so no need
                            // to rerun any code
                            // ==============================

                            // ==============================
                            // check 1
                            // ==============================

                            // ==============================
                            // if the browser supports the animation timeline API then use view
                            // timeline to animate the rotation
                            // ==============================

                            if ( CSS.supports( 'animation-timeline : scroll()' ) ) {

                                // test
                                console.log( 'Yes, supports animation-timeline' );

                                // use the web animations API and the ViewTimeline API to
                                // animate the image rotation
                                boxRef.current.animate(

                                    [
                                        {
                                            transform : "rotate( 0deg )"
                                        }, 
                                        {
                                            transform : "rotate( 720deg )" // control the speed to the rotation
                                        }
                                    ],
                                    {

                                        // duration   : 350, // no need here
                                        easing     : "ease-out",
                                        delay      : 0,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards",// this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                                        timeline   : new ViewTimeline(
                                            {
                                                subject : boxRef.current,
                                                axis    : 'block' // horizontal direction
                                            }
                                        ), // use the view-timeline to animate the scroll driven animation
                                        rangeStart : 'entry 0%', // change the rangeStart and rangeEnd to match the desired effect
                                        rangeEnd   : 'exit 0%'
                    
                                    }

                                ); // end of boxRef.current.animate()

                            } // end of if ( CSS.supports( 'animation-timeline : scroll()' ) )

                            // ==============================
                            // check 2
                            // ==============================

                            // ==============================
                            // if the browser does not support the animation timeline API then use
                            // manual code to animate the rotation
                            // ==============================

                            else {

                                // test
                                console.log( 'No, does not support animation-timeline' );

                                // ==============================
                                // animation - scroll
                                // 2nd function
                                // ==============================

                                const handleScrollBox = ( e ) => {

                                    // make sure our reference exist before running the code below
                                    if (
                                        boxRef.current
                                    ) {

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

                                        // show the top value of the div in question
                                        // console.log( 'getBoundingClientRect().top :', containerRef.current.getBoundingClientRect().top );

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
                                        // animation - rotate the boxes as the user scrolls down the page
                                        // part 3 - with browserWidth > 0
                                        // ==============================

                                        // ==============================
                                        // browserWidth > 0
                                        // ==============================

                                        if ( 
                                            ( browserWidth > 0 )
                                        ) {

                                            if ( scrollPositionInsideDivPercentage > 0.500 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 0deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )"; // need opacity of zero so the rudder
                                                // image is all the user sees

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.510 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 5deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.520 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 10deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.530 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 15deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.540 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 20deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.550 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 25deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.560 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 30deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.570 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 35deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.580 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 40deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.590 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 45deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.600 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 50deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.610 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 55deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.620 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 60deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.630 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 65deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.640 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 70deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.650 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 75deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";
                                                boxRef.current.style.transition = "250ms";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.660 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 80deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.670 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 85deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.680 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 90deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.690 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 95deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.700 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 100deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.710 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 105deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.720 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 110deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.730 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 115deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.740 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 120eg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.750 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 125deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.760 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 130deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.770 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 135deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.780 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 140deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.790 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 145deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.800 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 150deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.810 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 155deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.820 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 160deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.830 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 165deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.840 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 170deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.850 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 175deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.860 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 180deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.870 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 185deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.880 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 190deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.890 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 195deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.900 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 200deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.910 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 205deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.920 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 210deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.930 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 215deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.940 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 220deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.950 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 225deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.960 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 230deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.970 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 235deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.980 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 240deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 0.990 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 245deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.000 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 250deg )";
                                                boxRef.current.style.background = "rgba( 0, 112, 243, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.010 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 255deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.020 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 260deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.030 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 265deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.040 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 270deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.050 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 275deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.060 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 280deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.070 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 285deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";


                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.080 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 290deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.090 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 295deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.100 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 300deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.110 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 305deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.120 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 310deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.130 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 315deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.140 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 320deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.150 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 325deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.160 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 330deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.170 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 335deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.180 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 340deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.190 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 345deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.200 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 350deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.210 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 355deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.220 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 360deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.230 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 365deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";
                                                boxRef.current.style.transition = "all 250ms";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.240 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 370deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.250 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 375deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.260 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 380deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.270 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 385deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.280 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 390deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.290 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 395deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.300 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 400deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.310 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 405deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.320 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 410deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.330 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 415deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.340 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 420deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.350 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 425deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.360 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 430deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.370 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 435deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.380 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 440deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.390 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 445deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.400 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 450deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.410 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 455deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.420 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 460deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.430 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 465deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.440 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 470deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.450 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 475deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.460 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 480deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.470 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 485deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.480 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 490deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.490 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 495deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.500 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 500deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.510 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 505deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.520 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 510deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.530 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 515deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.540 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 520deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.550 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 525deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.560 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 530deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.570 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 535deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.580 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 540deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.590 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 545deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.600 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 550deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.610 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 555deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.620 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 560deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.630 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 565deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.640 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 570deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.650 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 575deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.660 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 580deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.670 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 585deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.680 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 590deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.690 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 595deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.700 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 600deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.710 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 605deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.720 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 610deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.730 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 615deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.740 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 620deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.750 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 625deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                            if ( scrollPositionInsideDivPercentage > 1.760 ) {

                                                boxRef.current.style.transform  = "translateX( 0vw ) rotate( 630deg )";
                                                boxRef.current.style.background = "rgba( 240, 173, 78, 0 )";

                                            } // end of if

                                        } // end of if

                                        // ==============================
                                        // end of animation - rotate the boxes as the user scrolls down the page
                                        // part 3 - with browserWidth > 2250
                                        // ==============================

                                    } // end of if

                                } // end of handleScrollBox
                            
                                // ==============================
                                // run handleScrollBox
                                // ==============================

                                // in almost all cases, we will be scrolling the window
                                window.addEventListener( 'scroll', handleScrollBox, false );

                            } // end of if ( CSS.supports( 'animation-timeline : scroll()' ) ) else {}

                        } // end of if ( entry.boundingClientRect.top <= 0 ) {}

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( containerRef.current );

                    } // end of if ( entry.isIntersecting )

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

    // the useEffect hook will run after the initial page load
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
    // useEffect 3
    // ==============================

    // ==============================
    // purpose : change the position value for the container div based on the user's scroll
    // position on the page and do this to eliminate this container overlapping another
    // cpntainer like the pricing radial gradient container v3 on the Google Tab S10+ 
    // ==============================

    // ==============================
    // remember, for this to work we had add a state value dependency to useEffect so
    // that useEffect would run more than just at page load and we set index so that every
    // time the scroll event fired we changed the index value, thereby calling useEffect
    // again and this allowed us to use the state values inside useEffect for the if and
    // else if statements
    // ==============================

    // the useEffect hook will run after the initial page load
    useEffect( () => {

        // ==============================
        // code block 1
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
                        // console.log( entry.isIntersecting );

                        // test
                        // ==============================
                        // important comment
                        // ==============================
                        // if the user ever reloads the page we can use
                        // entry.boundingClientRect.top to tell where the user is at
                        // on the page and then act accordingly
                        console.log( 'top :', entry.boundingClientRect.top );
                        // console.log( entry.boundingClientRect.bottom );

                        // ==============================
                        // entry.boundingClientRect.top definition : " This property tells
                        // you the vertical position of the element relative to the top of
                        // the viewport. If it's less than 0, the element is above the top
                        // edge of the viewport. "
                        // ==============================

                        // ==============================
                        // set totalScrollY
                        //
                        // and then use this value in the if and else if statements below
                        // ==============================

                        // ==============================
                        // IMPORTANT!
                        // remember, we don't have access to the totalScrollY value inside
                        // useEffect but do have access outside of useEffect so that is why
                        // using the totalScrollY value outside useEffect and in the if
                        // and else if statements below
                        // ==============================

                        // ==============================
                        // remember, we have to set this state value here
                        // ==============================
                        setTotalScrollY( entry.boundingClientRect.bottom + window.scrollY );

                        // ==============================
                        // start determining the user's scroll position
                        // ==============================

                        // ==============================
                        // handleScrollTwo
                        // ==============================

                        // handleScroll2
                        const handleScrollTwo = ( e ) => {

                            // show the scroll value to the top of the screen or window
                            // ==============================
                            // remember, we have to set this state value here
                            // ==============================
                            setWindowScrollY( window.scrollY );

                        } // end of handleScroll2

                        // in almost all cases, we will be scrolling the window
                        window.addEventListener( 'scroll', handleScrollTwo, false );

                        // ==============================
                        // end of determining the user's scroll position
                        // ==============================

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( containerRef.current );

                    } // end of if ( entry.isIntersecting )

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

    }, [] ) // end of useEffect 3

    // ==============================
    // if and else if statements
    // ==============================

    // test
    // ==============================
    // important comment
    // ==============================
    // console.log( 'windowScrollY :', windowScrollY );
    // console.log( 'totalScrollY :', totalScrollY  );

    // ==============================
    // IMPORTANT!
    //
    // remember, when windowScrollY > totalScrollY then we have reached the
    // bottom of the container and we want to change the position to relative
    // remove the odd effect of the sticky container appearing at
    // random times further down the page
    // ==============================

    if ( windowScrollY > totalScrollY && containerRef.current ) {
    
        // console.log( 'Yes windowScrollY > totalScrollY ' );
        // containerRef.current.style.position = 'relative';
        squareBackgroundRef.current.style.dispaly = 'block';

    } // end of if ( windowScrollY > totalScrollY && containerRef.current )

    else if ( windowScrollY <= totalScrollY && containerRef.current ) {

        // console.log( 'No windowScrollY > totalScrollY ' );
        // containerRef.current.style.position = 'sticky';
        // containerRef.current.style.visibility = 'visible';

    } // end of else if ( windowScrollY <= totalScrollY && containerRef.current )

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
    // purpose : this is here for testing purposes
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block #1
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // test
        // console.log( `${ browserWidth } in handleResize` );

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

                    words ? ( // remember, we set words in useEffect 1 above

                        words.map( ( word, i ) => {

                            return (
                                <span
                                    key={ i }
                                    style={ 
                                        { 
                                            display   : 'inline-block', // needed in order to match the original text
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

                {
                    /*
                        // ==============================
                        // container > div 1 > h2 ( static h2 ) ( remember, only one h2 will run and see the code above for details )
                        // ==============================
                    */
                }
                <h2
                    style={ { opacity : 0 } }
                    ref={ secondH2Ref }
                >
                    Increase engagement with custom animations
                </h2>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( box ) ( box that contains the rudder image )
                    // ==============================
                */
            }
            <div
                ref={ boxRef }
            >

                {
                    /*
                        // ==============================
                        // container > div2 > picture ( picture of rudder )
                        // ==============================

                        // ==============================
                        // remember, add the width and height to the image tag so
                        // that the content below this div does not appear for a
                        // split second on page load
                        // ==============================
                    */
                }
                <picture>
                    <source 
                        srcSet={ '/images/card_image_8_500.webp' }
                        type={ 'image/webp' }
                    />
                    <img
                        src={ '/images/card_image_8_500.png' }
                        width={ 'auto' }
                        height={ 'auto' }
                        loading={ 'lazy' }
                        // fetchPriority={ 'high' }
                        alt={ 'Rudder' }
                    />
                </picture>

            </div>

            {
                /*
                    // ==============================
                    // container > div 3 ( square or blob )
                    // ==============================
                */
            }
            <div
                ref={ blobRef }
            ></div>

            {
                /*
                    // ==============================
                    // container > div 4 ( cards )
                    // ==============================
                */
            }
            <div>

                {
                    /*
                        // ==============================
                        // container > div4 > div 1 ( card 1 )
                        // ==============================
                    */
                }
                <div
                    ref={ card1Ref }
                >

                    {
                        /*
                            // ==============================
                            // container > div4 > div 1 ( card 1 ) > picture ( picture of old typewriter )
                            // ==============================

                            // ==============================
                            // remember, add the width and height to the image tag so
                            // that the content below this div does not appear for a
                            // split second on page load
                            // ==============================
                        */
                    }
                    <picture>
                        <source 
                            srcSet={ '/images/card_image_11_500.webp' }
                            type={ 'image/webp' }
                        />
                        <img
                            src={ '/images/card_image_11_500.png' }
                            width={ 'auto' }
                            height={ 'auto' }
                            loading={ 'lazy' }
                            // fetchPriority={ 'high' }
                            alt={ 'Old typewriter' }
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div4 > div 2 ( card 2 )
                        // ==============================
                    */
                }
                <div
                    ref={ card2Ref }
                >

                    {
                        /*
                            // ==============================
                            // container > > div4 > div 2 ( card 2 ) > picture ( picture of old camera )
                            // ==============================

                            // ==============================
                            // remember, add the width and height to the image tag so
                            // that the content below this div does not appear for a
                            // split second on page load
                            // ==============================
                        */
                    }
                    <picture>
                        <source 
                            srcSet={ '/images/card_image_2_500.webp' }
                            type={ 'image/webp' }
                        />
                        <img
                            src={ '/images/card_image_2_500.png' }
                            width={ 'auto' }
                            height={ 'auto' }
                            loading={ 'lazy' }
                            // fetchPriority={ 'high' }
                            alt={ 'Old Camera' }
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div4 > div 3 ( card 3 )
                        // ==============================
                    */
                }
                <div
                    ref={ card3Ref }
                >

                    {
                        /*
                            // ==============================
                            // container > div4 > div 3 ( card 3 ) > picture ( picture of house )
                            // ==============================

                            // ==============================
                            // remember, add the width and height to the image tag so
                            // that the content below this div does not appear for a
                            // split second on page load
                            // ==============================
                        */
                    }
                    <picture>
                        <source 
                            srcSet={ '/images/card_image_9_500.webp' }
                            type={ 'image/webp' }
                        />
                        <img
                            src={ '/images/card_image_9_500.png' }
                            width={ 'auto' }
                            height={ 'auto' }
                            loading={ 'lazy' }
                            // fetchPriority={ 'high' }
                            alt={ 'House' }
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div4 > div 4 ( card 4 )
                        // ==============================
                    */
                }
                <div
                    ref={ card4Ref }
                >

                    {
                        /*
                            // ==============================
                            // container> div4 > div 4 ( card 4 ) > picture ( picture of fashionable woman )
                            // ==============================

                            // ==============================
                            // remember, add the width and height to the image tag so
                            // that the content below this div does not appear for a
                            // split second on page load
                            // ==============================
                        */
                    }
                    <picture>
                        <source 
                            srcSet={ '/images/card_image_5_500.webp' }
                            type={ 'image/webp' }
                        />
                        <img
                            src={ '/images/card_image_5_500.png' }
                            width={ 'auto' }
                            height={ 'auto' }
                            loading={ 'lazy' }
                            // fetchPriority={ 'high' }
                            alt={ 'Fashionable woman' }
                        />
                    </picture>

                </div>
            
            </div>
            
            {
                /*
                    // ==============================
                    // container > div 5 ( image background )
                    // ==============================
                */
            }
            <div
                ref={ imageBackgroundRef }
            >
            </div>
    
            {
                /*
                    // ==============================
                    // container > div 6 ( animating backgrounds )
                    // ==============================
                */
            }
            <div
                ref={ animatingBackgroundRef }
            >

                <AnimatingGradientBackground />

            </div>

        </div>

    );

} // end of CustomAnimationsComponent


