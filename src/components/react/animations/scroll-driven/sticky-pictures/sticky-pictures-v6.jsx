

// ==============================
// IMPORTANT!
//
// remember, we either show the rudder and use the animation-timeline API or if the browser does
// not support the animation-timeline API then we show the 3D cube once and then the square
// everytime thereafter ( see the useEffect hook 3 and the if statement below for details )
// ==============================


// import in the useRef, useEffect, useState hooks
import { useRef, useEffect, useState } from 'react';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../../animating-gradient/animating-gradient-background-v2';
// import in Cube Component
import CubeComponent from '../../cube/cube-v1';
// import in the scss file
import styles from './sticky-pictures-v6.module.scss';


export default function StickyPicturesComponent() {

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
    const [ windowScrollY, setWindowScrollY ]                                         = useState( 0 );
    const [ totalScrollY, setTotalScrollY ]                                           = useState( 0 );
    const [ hasRun, setHasRun ]                                                       = useState( false );

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
    const secondH2Ref            = useRef();
    const boxRef                 = useRef();
    const card1Ref               = useRef();
    const card2Ref               = useRef();
    const card3Ref               = useRef();
    const card4Ref               = useRef();
    const imageBackgroundRef     = useRef();
    const animatingBackgroundRef = useRef();
    const squareBackgroundRef    = useRef();
    const cubeRef                = useRef();


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

                        // ==============================
                        // rudder rotation
                        // ==============================

                        // ==============================
                        // remember, the if statement below deals with the rudder rotation and
                        // if animation-timeline is not supported then we show a rotating square
                        // or something else after the 4 cards have disappeared
                        // ==============================

                        // determine if the user is scrolling down and if so then run
                        // our opacity and slide up animation
                        if ( entry.boundingClientRect.top > 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // down
                            // console.log( 'Element entered from the bottom' );

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
                            // animation - handleScroll
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
                                    boxRef.current &&
                                    imageBackgroundRef.current &&
                                    animatingBackgroundRef.current &&
                                    squareBackgroundRef.current
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
                                        // make each block progressively slower
                                        //
                                        // first block - 1.25
                                        // second block - 1.75
                                        // third block - 1.75
                                        // fourth block - 1.75
                                        // ==============================

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

                                        if ( -scrollPositionInsideDiv >= ( distance * 3.75 ) && -scrollPositionInsideDiv < ( distance * 5.50 ) && secondBlock === false ) {

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

                                        if ( -scrollPositionInsideDiv >= ( distance * 5.50 ) && -scrollPositionInsideDiv < ( distance * 7.25 ) && thirdBlock === false ) {

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

                                        if ( -scrollPositionInsideDiv >= ( distance * 7.25 ) && -scrollPositionInsideDiv < ( distance * 9.00 ) && fourthBlock === false ) {

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

                                            // remember, we have to put the boxRef through another test

                                            // if the browser supports animation-timeline then don't show the h5 text
                                            if ( CSS.supports( 'animation-timeline : scroll()' ) ) {

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

                                            }
                                            else {

                                                boxRef.current.style.opacity = 0;

                                            } // end of if else

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
                                            // IMPORTANT!
                                            //
                                            // remember, we either show the rudder and use the animation-timeline API or if the browser does
                                            // not support the animation-timeline API then we show the 3D cube once and then the square
                                            // everytime thereafter ( see the useEffect hook 3 and the if statement below for details )
                                            // ==============================

                                            // ==============================
                                            // animation - opacity
                                            // ==============================

                                            // remember, we have to put the boxRef through another test

                                            // if the browser supports animation-timeline then don't show the h5 text
                                            if ( CSS.supports( 'animation-timeline : scroll()' ) ) {

                                                squareBackgroundRef.current.style.opacity = 0;

                                            }
                                            else {

                                                squareBackgroundRef.current.animate(

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
    
                                                ); // end of squareBackgroundRef.current.animate()

                                            } // end of if else

                                            // ==============================
                                            // animation - opacity
                                            // ==============================

                                            // remember, we have to put the boxRef through another test

                                            // if the browser supports animation-timeline then don't show the h5 text
                                            if ( CSS.supports( 'animation-timeline : scroll()' ) ) {

                                                cubeRef.current.style.opacity = 0;

                                            }
                                            else {

                                                cubeRef.current.animate(

                                                    [
                                                        {
                                                            opacity : 0
                                                        },
                                                        {
                                                            opacity : 1 // this is turned off in the if statement below, depending on the situation
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
    
                                                ); // end of cubeRef.current.animate()

                                            } // end of if else

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
                            // console.log( 'Element entered from the top' );

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
                            imageBackgroundRef.current.style.opacity                      = 1; // show
                            imageBackgroundRef.current.style.transitionDuration           = '400ms';
                            imageBackgroundRef.current.style.transitionTimingFunction     = 'ease-out';
                            animatingBackgroundRef.current.style.opacity                  = 1; // show
                            animatingBackgroundRef.current.style.transitionDuration       = '400ms';
                            animatingBackgroundRef.current.style.transitionTimingFunction = 'ease-out';

                            // remember, we have to put the boxH5Ref through another test

                            // if the browser supports animation-timeline then don't show the h5 text
                            if ( CSS.supports( 'animation-timeline : scroll()' ) ) {

                                boxRef.current.style.opacity                  = 1; // show
                                boxRef.current.style.transitionDuration       = '400ms';
                                boxRef.current.style.transitionTimingFunction = 'ease-out';

                            }
                            else {

                                squareBackgroundRef.current.style.opacity                  = 1; // show
                                squareBackgroundRef.current.style.transitionDuration       = '400ms';
                                squareBackgroundRef.current.style.transitionTimingFunction = 'ease-out';
                                // cubeRef.current.style.opacity                  = 1; // show
                                // cubeRef.current.style.transitionDuration       = '400ms';
                                // cubeRef.current.style.transitionTimingFunction = 'ease-out';

                            } // end of if else

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
                            // if the browser supports the animation timeline API then use view
                            // timeline to animate the rotation
                            // ==============================

                            // ==============================
                            // remember, the if statement below deals with the rudder rotation and
                            // if animation-timeline is not supported then we show a rotating square
                            // or something else after the 4 cards have disappeared
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
    // purpose : get totalScrollY and windowScrollY so can use these values in the if statement
    // below and determine whether or not we are ( 1 ) using a browser that can handle the
    // animation-timeline and ( 2 ) if not, then determine whether we have scrolled past the
    // the bottom of the sticky pictures container and if so then only show the square from
    // that point forward
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
                        // console.log( 'top :', entry.boundingClientRect.top );
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

    }, [] ) // end of useEffect 2

    // ==============================
    // if statement
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

    // ==============================
    // IMPORTANT!
    //
    // remember, when windowScrollY > totalScrollY then we have reached the
    // bottom of the container and we want to show the square from here on out
    // and the reason why is because after the first pass through the sticky
    // pictures container the cube becomes janky upon further scrolling; whereas,
    // that does not really happen with the square
    // ==============================

    if ( windowScrollY > totalScrollY && containerRef.current && !CSS.supports( 'animation-timeline : scroll()' ) && hasRun === false ) {

        // test
        // console.log( 'In if statement' );

        // turn on the square
        squareBackgroundRef.current.style.display = 'block';

        // turn off the animating background
        animatingBackgroundRef.current.style.display = 'none';

        // turn off the cube
        cubeRef.current.style.display = 'none';

        setHasRun( true );

    } // end of else if ( windowScrollY > totalScrollY && containerRef.current && !CSS.supports( 'animation-timeline : scroll()' ) )

    // ==============================
    // useEffect 3
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

    }, [] ) // end of useEffect 3

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


    return (

        // ==============================
        // container
        // ==============================

        <div 
            className={ styles.stickyPicturesContainer }
            ref={ containerRef }            
        >

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 1
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 ( wrapper div ) > div 1 > h2 ( the h2 word animation )
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
                            // container > div 1 ( wrapper div ) > div 1 > h2 ( static h2 ) ( remember, only one h2 will run and see the code above for details )
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
                        // container > div 1 ( wrapper div ) > div 2 ( box ) ( box that contains the rudder image )
                        // ==============================
                    */
                }
                <div
                    ref={ boxRef }
                >

                    {
                        /*
                            // ==============================
                            // container > div 1 ( wrapper div ) > div2 > picture ( picture of rudder )
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
                        // container > div 1 ( wrapper div ) > div 3 ( cards )
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 ( wrapper div ) > div 3 > div 1 ( card 1 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ card1Ref }
                    >

                        {
                            /*
                                // ==============================
                                // container > div 1 ( wrapper div ) > div 3 > div 1 ( card 1 ) > picture ( picture of old typewriter )
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
                            // container > div 1 ( wrapper div ) > div 3 > div 2 ( card 2 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ card2Ref }
                    >

                        {
                            /*
                                // ==============================
                                // container > div 1 ( wrapper div ) > div 3 > div 2 ( card 2 ) > picture ( picture of old camera )
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
                            // container > div 1 ( wrapper div ) > div 3 > div 3 ( card 3 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ card3Ref }
                    >

                        {
                            /*
                                // ==============================
                                // container > div 1 ( wrapper div ) > div 3 > div 3 ( card 3 ) > picture ( picture of house )
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
                            // container > div 1 ( wrapper div ) > div 3 > div 4 ( card 4 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ card4Ref }
                    >

                        {
                            /*
                                // ==============================
                                // container > div 1 ( wrapper div ) > div 3 > div 4 ( card 4 ) > picture ( picture of fashionable woman )
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
                        // container > div 1 ( wrapper div ) > div 4 ( image background )
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
                        // container > div 1 ( wrapper div ) > div 5 ( animating backgrounds )
                        // ==============================
                    */
                }
                <div
                    ref={ animatingBackgroundRef }
                >

                    <AnimatingGradientBackground />

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 6 ( square )
                        // ==============================
                    */
                    /*
                        // ==============================
                        // remember, the reason we had to declare the square styling here
                        // versus in a separate component is due to the mix-blend-mode : color dodge
                        // only rendering correctly when it is declared on the parent div and not in
                        // a child div or child component
                        // ==============================
                    */
                }
                <div
                    ref={ squareBackgroundRef }
                >
                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 7 ( cube )
                        // ==============================
                    */
                }
                <div
                    ref={ cubeRef }
                >
                    
                    <CubeComponent />

                </div>

            </div>

        </div>

    );

} // end of StickyPicturesComponent


