

// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in our stylesheet
import styles from './hero.module.scss';



// remember we are passing down props from the parent or the index.js file and
// " passParentToChildHeightHandlerFunction " is a function being passed from
// the parent to the child as a prop
export default function HeroComponent( { passParentToChildHeightHandlerFunction } ) {

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

    // use browserHeight inside the useEffect hook below
    let browserHeight;
    // use browserWidth inside the useEffect hook below
    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element
    const heroHomePageRef = useRef();
    const h1Ref           = useRef();
    const div1Ref         = useRef();
    const div2Ref         = useRef();
    const div3Ref         = useRef();
    const pRef            = useRef();

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
    // useEffect(); 1
    // ==============================

    // ==============================
    // purpose : center the hero home page content depending on screen size
    // ==============================

    // the useEffect hook will run on page load
    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // calculate browser height
        // ==============================

        // get the browser height so that I can change the side menu height based on the
        // window size
        browserHeight = window.innerHeight;

        // testing
        // console.log( `${ browserHeight } in the hero home page component` );

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can change the side menu width based on the
        // window size
        browserWidth = window.innerWidth;

        // testing
        // console.log( `${ browserWidth } in the hero home page component` );
    
        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // remember, on page load we need to run the if statement below so that we can
        // center the hero image content if needed
        // ==============================

        // if the browser window or screen size is greater than 1200px then
        // center the hero home page content and make sure the browser width is
        // greater than 1280px since we want the css media queries to take over once
        // the screen size is equal to or less than 1280px

        if (
            heroHomePageRef &&
            browserHeight > 1200 &&
            browserWidth > 1280
        ) {

            heroHomePageRef.current.style.paddingBottom = '80px'; // on larger screens, move
            // the content up slightly so that the content is centered ( remember, the hero
            // home page content is being centered in the hero home page container but the
            // container does not include the 160px header container so we need to make some
            // adjustments to make sure the content is centered )

        } // end of if

        // ==============================
        // code block 3
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, if we want the change the centering as the screen height changes ( not
        // just on page load through useEffect ) then we need to call the handleResize
        // function
        // ==============================

        // if browserHeight exist then call the handleResize function
        if ( browserHeight && browserWidth ) {

            window.addEventListener( 'resize', handleResize, false );

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                window.removeEventListener( 'resize', handleResize, false );

            }; // end of return

        } // end of if

    }, [] ) // end of useEffect 1

    // ==============================
    // useEffect(); 2
    // ==============================

    // ==============================
    // purpose : to get the height of the hero home page container and then
    // pass that height to the parent container
    // ==============================

    // the useEffect hook will run on page load
    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width
        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // calculate hero home page container height
        // ==============================

        // ==============================
        // and then use that height to adjust the top margin for div 2 > div 1 > h1
        // and do that in the index.js file
        // ==============================

        if ( 
            heroHomePageRef.current &&
            browserWidth <= 1280
        ) {

            // get the hero home page container height
            var height = heroHomePageRef.current.clientHeight;

            // testing
            // console.log( `${ height } in the useEffect #2 function in the hero home page component file` );

            // ==============================
            // pass the hero home page container height to the parent or index.js
            // file
            // ==============================

            // remember, call the function in the child component and pass in the data or
            // in this case the hero home page container height as an argument

            // remember, we subtracted 160 from the hero home page height and that seemed
            // to work out very close to the top margin that we needed; however, we're not
            // sure how to come up with this value from the css
            passParentToChildHeightHandlerFunction( `${ height - 160 }` );

        } // end of if

        // ==============================
        // code block 3
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, if we want the change the margin top for div2h1Ref in the index.js
        // file as the screen width or height changes ( not just on page load through
        // useEffect ) then we need to call the handleResizeVersion2 function
        // ==============================

        // if the browser width exist and the resize event is fired then
        // call the handleResizeVersion2 function and this function will recalculate
        // the hero home page container height and then pass that height up to the
        // parent component or the index.js file and it will pass the height up to the
        // parent component by calling the passParentToChildHeightHandlerFunction();
        if ( browserWidth ) {

            window.addEventListener( 'resize', handleResizeVersion2, false );

            // make sure we remove the event listener after we call the handleResizeVersion2
            // function
            return () => {

                window.removeEventListener( 'resize', handleResizeVersion2, false );

            };

        } // end of if

    }, [] ); // end of useEffect 2

/*
    // ==============================
    // useEffect(); 3
    // ==============================

    // ==============================
    // slide up animation
    // ==============================

    // ==============================
    // useEffect(); 3 purpose is to create a nice animation on initial page load
    // ==============================

    useEffect( () => {

        // ==============================
        // slide up text and cards after the page has loaded
        // ==============================

        // ==============================
        // remember, on page load we need to run the if else statement below
        // so that we can change the transition delay for browser widths
        // less than or equal to 768px
        // ==============================

        if (
            browserWidth > 768
        ) {

            // ==============================
            // purpose : slide up text animation after the page has loaded
            // ==============================

            // to make this work, see the scss file
            h1Ref.current.style.opacity     = 1;
            h1Ref.current.style.transform   = 'translateY( 0 )';
            div1Ref.current.style.opacity   = 1;
            div1Ref.current.style.transform = 'translateY( 0 )';
            div2Ref.current.style.opacity   = 1;
            div2Ref.current.style.transform = 'translateY( 0 )';
            div3Ref.current.style.opacity   = 1;
            div3Ref.current.style.transform = 'translateY( 0 )';
            pRef.current.style.opacity      = 1;
            pRef.current.style.transform    = 'translateY( 0 )';

        } else {

            // ==============================
            // purpose : slide up text animation after the page has loaded
            // ==============================

            // to make this work, see the scss file
            h1Ref.current.style.opacity           = 1;
            h1Ref.current.style.transform         = 'translateY( 0 )';
            //h1Ref.current.style.transitionDelay   = '600ms'; // override the css value
            div1Ref.current.style.opacity         = 1;
            div1Ref.current.style.transform       = 'translateY( 0 )';
            //div1Ref.current.style.transitionDelay = '800ms'; // override the css value
            div2Ref.current.style.opacity         = 1;
            div2Ref.current.style.transform       = 'translateY( 0 )';
            //div2Ref.current.style.transitionDelay = '1000ms'; // override the css value
            div3Ref.current.style.opacity         = 1;
            div3Ref.current.style.transform       = 'translateY( 0 )';
            //div3Ref.current.style.transitionDelay = '1200ms'; // override the css value
            pRef.current.style.opacity            = 1;
            pRef.current.style.transform          = 'translateY( 0 )';
            //pRef.current.style.transitionDelay    = '1400ms'; // override the css value

        } // end of if else

    }, [] ); // end of useEffect 3
*/

    // ==============================
    // functions
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    // ==============================
    // handleResize function purpose is to center the hero home page content depending on
    // screen size and using the resize event as the trigger
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // remember, we had to define browserHeight inside this function in order
        // to the get the 2 if statements below to work
        // ==============================

        // define browserHeight
        browserHeight = window.innerHeight;

        // testing
        // console.log( `${ browserHeight } in the handleResize function` );

        // ==============================
        // calculate browser width
        // ==============================

        // get the browser width so that I can change the side menu width based on the
        // window size
        browserWidth = window.innerWidth;

        // testing
        // console.log( `${ browserWidth } in the handleResize function` );

        // ==============================
        // code block #2
        // ==============================

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        if (
            heroHomePageRef &&
            browserHeight <= 1200 ||
            browserWidth <= 1280
        ) {

            // if the browser window or screen size is less that or eqaul to 1200px in
            // height or the browser width is less than or equal to 1280px then remove
            // the bottom padding and let the css styles rule the day and we do that by
            // giving paddingBottom an empty value as shown below
            heroHomePageRef.current.style.paddingBottom = '';

        } // end of if

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        else if (
            heroHomePageRef &&
            browserHeight > 1200 &&
            browserWidth > 1280
        ) {

            heroHomePageRef.current.style.paddingBottom = '80px'; // on larger screens, move
            // the content up slightly so that the content is centered ( remember, the hero
            // home page content is being centered in the hero home page container but the
            // container does not include the 160px header container so we need to make some
            // adjustments to make sure the content is centered )

        } // end of if

    } // end of handleResize

    // ==============================
    // handleResizeVersion2 function
    // ==============================

    // ==============================
    // handleResizeVersion2 function purpose is to pass a recalculated hero home page
    // container height up to the parent whenever the browser resize event is fired
    // ==============================

    async function handleResizeVersion2( e ) {

        // test
        // console.log( browserWidth );

        // ==============================
        // code block #1
        // ==============================

        // ==============================
        // calculate hero home page container height
        // ==============================

        // ==============================
        // and then use that height to adjust the top margin for div 2 > div 1 > h1
        // and do that in the index.js file
        // ==============================

        if ( heroHomePageRef.current ) {

            // get the hero home page container height
            var height = heroHomePageRef.current.clientHeight;

            // testing
            console.log( `${ height } is the hero home page container height in the handleResizeVersion2 function` );

            // ==============================
            // pass the hero home page container height to the parent or index.js
            // file
            // ==============================

            // remember, call the function in the child component and pass in the data or
            // in this case the hero home page container height as an argument

            // remember, we subtracted 160 from the hero home page height and that seemed
            // to work out very close to the top margin that we needed; however, we're not
            // sure how to come up with this value from the css
            passParentToChildHeightHandlerFunction( `${ height - 160 }` );

        } // end of if

    } // end of handleResizeVersion2


    return (

        // ==============================
        // container
        // ==============================

        <div 
            className={ styles.heroContainer }
            ref={ heroHomePageRef }
        >

            <h1
                ref={ h1Ref }
            >
                Services
            </h1>

            {
                /*
                    // ==============================
                    // card elements
                    // ==============================
                */
            }
            <div>

                <div
                    ref={ div1Ref }
                >
                    <div></div> { /* image div */ }
                    <h2>Digital Marketing</h2>
                </div>

                <div
                    ref={ div2Ref }
                >
                    <div></div> { /* image div */ }
                    <h2>Web <br />Development</h2>
                </div>

                <div
                    ref={ div3Ref }
                >
                    <div></div> { /* image div */ }
                    <h2>3D Animation & <br />Digital Art</h2>
                </div>

            </div>

            <p
                ref={ pRef }
            >
                We combine the latest in digital marketing and state-of-the-art websites
                to launch your new business or add significant amounts of new revenue to your
                existing business

            </p>

        </div>

    );

} // end of HeroComponent

