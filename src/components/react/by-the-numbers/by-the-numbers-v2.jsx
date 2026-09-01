

// import in Fragment, useEffect, useRef hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the scss file
import styles from './by-the-numbers-v2.module.scss';



export default function ByTheNumbersComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ isIntersecting, setIsIntersecting ] = useState( false );

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

    const wrapperRef                    = useRef();
    const counterRefPatientsServed      = useRef( null );
    const counterRefYearsExperience     = useRef( null );
    const counterRefBoardCertifications = useRef( null );

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
    // purpose - slide up the wrapper div content and fade in the blob
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // get the browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // intersection observer 1
        // ==============================

        // ==============================
        // use the web animations api for the animation
        // ==============================

        // options object
        const wrapperOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -250px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires ( remember, this
            // component has 0 extra rem on the top so -80 - 0 = -80 )

            // remember, it's the bottom rootMargin that controls when the element
            // isIntersecting

            // remember, a positive 400px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 400px
            // above the ref; in other words, a positive root margin is great for pre
            // loading images

            // remember, a negative 200px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 50px
            // below the ref; in other words, a negative root margin is great if want
            // to fade in text or slide up some elements

        } // end of options object

        // create the intersection observer and save the result to the const
        // wrapperObserver
        const wrapperObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, wrapperObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    // if ( entry.isIntersecting ) {
                    if ( entry.isIntersecting ) {

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
                        // setIsIntersecting to true and use in useEffect 2
                        // ==============================

                        setIsIntersecting( true );
    
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
                            // console.log( 'Element entered from the bottom' );

                            // ==============================
                            // animation - fade in and slide up
                            // ==============================

                            // ==============================
                            // browserWidth > 620
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth > 620 )
                            ) {

                                // ==============================
                                // wrapper div
                                // ==============================

                                wrapperRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 6.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 0,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of wrapperRef.current.animate()

                            } // end of if ( browserWidth > 620 )

                            // ==============================
                            // animation - fade in and slide in from the left
                            // ==============================

                            // ==============================
                            // browserWidth <= 620
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth <= 620 )
                            ) {

                                // ==============================
                                // wrapper div
                                // ==============================

                                wrapperRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 3.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 0,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of wrapperRef.current.animate()

                            } // end of if ( browserWidth <= 620 )

                            // ==============================
                            // end of animation
                            // ==============================

                        } // end of if ( entry.boundingClientRect.top > 0 ) {}

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

                            // if the user is scrolling up, just show the elements without any animation
                            wrapperRef.current.style.opacity                  = 1;
                            wrapperRef.current.style.transform                = 'translateX( 0 )';
                            wrapperRef.current.style.transitionDuration       = '400ms';
                            wrapperRef.current.style.transitionTimingFunction = 'ease-out';

                        } // end of if ( entry.boundingClientRect.top <= 0 ) {}


                        // once the observation happens then we want to unobserve the DOM
                        // element
                        wrapperObserver.unobserve( wrapperRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, wrapperObserver )

            wrapperOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        wrapperObserver.observe( wrapperRef.current );

        // ==============================
        // end of intersection observer 1
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // purpose - create a counter animation for patients served
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        if ( !isIntersecting ) return;
    
        // our target is 5000 patients served
        const target   = 5000;
        const duration = 4000;
        // performance.now() returns the current time in milliseconds since the page loaded and is
        // best for animations

        // records exactly when animation started
        const start    = performance.now();

        // declare rafId
        let rafId;

        // ==============================
        // code block 2
        // ==============================

        // save this function to the const animate

        // timestamp is a high-precision time value automatically passed by requestAnimationFrame
        // and it represents the current time in milliseconds since the page loaded
        const animate = ( timestamp ) => {

            // ==============================
            // code block 3
            // ==============================

            /*
                const start     = performance.now();    // say 1000ms
                // rAF fires almost immediately
                const timestamp = 1016ms                // first frame ~16ms later
                const elapsed   = 1016 - 1000 = 16ms    // not exactly 0
            */
            const elapsed  = timestamp - start;
            /*
                - Converts elapsed time to a value between 0 and 1
                - elapsed / duration = how far through the animation
                ( e.g. 1500 / 3000 = 0.5 = halfway )
                - Math.min( ..., 1 ) caps it at 1 so it never exceeds 100% — prevents counter
                going past $1,000,000
            */
            const progress = Math.min( elapsed / duration, 1 );
            
            // ease out the animation
            /*
                - Applies an ease out curve to the linear progress value
                - Without this the counter increments at a constant speed — feels mechanical
                - With this it starts fast and slows down near $1,000,000 — feels natural

                Math.pow( 1 - progress, 3 ) — cubes that inverted value :
                progress = 0.0 → Math.pow( 1.0, 3 ) = 1.0
                progress = 0.5 → Math.pow( 0.5, 3 ) = 0.125
                progress = 1.0 → Math.pow( 0.0, 3 ) = 0.0
                
                Why cube it (³)?

                Math.pow( x, 2 ) — gentle ease out
                Math.pow( x, 3 ) — more pronounced ease out
                Math.pow( x, 4 ) — very strong ease out
            */
            const eased  = 1 - Math.pow( 1 - progress, 3 );

            // round to nearest 100
            /*
                eased * target — converts the eased progress to a patient count :

                eased = 0.0   → 0.0   * 5000 = 0
                eased = 0.5   → 0.5   * 5000 = 2,500
                eased = 0.875 → 0.875 * 5000 = 4,375
                eased = 1.0   → 1.0   * 5000 = 5,000

                / 100 — divides by your increment size :

                4,375 / 100 = 43.75

                Math.round( ... ) — rounds to nearest whole number :

                43.75 → 44

                * 100 — multiplies back to get the rounded increment :

                44 * 100 = 4,400

                Why divide then multiply?

                It's a rounding trick to snap to the nearest 100
                Without it you'd get values like 4,375 — not clean increments
                With it you only ever see 0, 100, 200... up to 5,000
            */
            const current = Math.round( ( eased * target ) / 100 ) * 100;

            // toLocaleString() formats a number according to the local language/region
            // conventions — specifically adds comma separators for thousands

            // guard against a null ref before touching it
            if ( counterRefPatientsServed.current ) {

                counterRefPatientsServed.current.textContent = `${ current.toLocaleString() }+`;

            } // end of if

            // ==============================
            // code block 4
            // ==============================

            // keep the animation going as long as progress is less than 1 and once progress
            // equals 1 then stop the animation
            if ( progress < 1 ) {

                rafId = requestAnimationFrame( animate );

            } // end of if ()

        }; // end of the animate function

        // ==============================
        // code block 5
        // ==============================

        // trigger the animation and remember, requestAnimationFrame eliminated the flash on my
        // iPhone for the infinite scroll by controlling the reset mathematically instead
        // of letting the CSS handle it
        rafId = requestAnimationFrame( animate );

        // ==============================
        // code block 6
        // ==============================

        // cancel the animation frame on cleanup, so it never fires against a stale
        // ref in the first place:
        return () => {

            if ( rafId ) cancelAnimationFrame( rafId );

        }; // end of return()

    }, [ isIntersecting ] ); // end of useEffect 2

    // ==============================
    // useEffect 3
    // ==============================

    // ==============================
    // purpose - create a counter animation for years experience
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        if ( !isIntersecting ) return;
    
        // our target is 35+ years of experience
        const target   = 35;
        const duration = 4000;
        // performance.now() returns the current time in milliseconds since the page loaded and is
        // best for animations

        // records exactly when animation started
        const start    = performance.now();

        // declare rafId
        let rafId;

        // ==============================
        // code block 2
        // ==============================

        // save this function to the const animate

        // timestamp is a high-precision time value automatically passed by requestAnimationFrame
        // and it represents the current time in milliseconds since the page loaded
        const animate = ( timestamp ) => {

            // ==============================
            // code block 3
            // ==============================

            /*
                const start     = performance.now();    // say 1000ms
                // rAF fires almost immediately
                const timestamp = 1016ms                // first frame ~16ms later
                const elapsed   = 1016 - 1000 = 16ms    // not exactly 0
            */
            const elapsed  = timestamp - start;
            /*
                - Converts elapsed time to a value between 0 and 1
                - elapsed / duration = how far through the animation
                ( e.g. 1500 / 3000 = 0.5 = halfway )
                - Math.min( ..., 1 ) caps it at 1 so it never exceeds 100% — prevents counter
                going past $1,000,000
            */
            const progress = Math.min( elapsed / duration, 1 );
            
            // ease out the animation
            /*
                - Applies an ease out curve to the linear progress value
                - Without this the counter increments at a constant speed — feels mechanical
                - With this it starts fast and slows down near $1,000,000 — feels natural

                Math.pow( 1 - progress, 3 ) — cubes that inverted value :
                progress = 0.0 → Math.pow( 1.0, 3 ) = 1.0
                progress = 0.5 → Math.pow( 0.5, 3 ) = 0.125
                progress = 1.0 → Math.pow( 0.0, 3 ) = 0.0
                
                Why cube it (³)?

                Math.pow( x, 2 ) — gentle ease out
                Math.pow( x, 3 ) — more pronounced ease out
                Math.pow( x, 4 ) — very strong ease out
            */
            const eased  = 1 - Math.pow( 1 - progress, 3 );
            
            // round to nearest 10k
            /*
                eased * target — converts the eased progress to a dollar amount :

                eased = 0.0   → 0.0   * 1000000 = $0
                eased = 0.5   → 0.5   * 1000000 = $500,000
                eased = 0.875 → 0.875 * 1000000 = $875,000
                eased = 1.0   → 1.0   * 1000000 = $1,000,000

                / 10000 — divides by your increment size :

                $875,000 / 10000 = 87.5

                Math.round( ... ) — rounds to nearest whole number :

                87.5 → 88

                * 10000 — multiplies back to get the rounded increment :

                88 * 10000 = $880,000

                Why divide then multiply?

                It's a rounding trick to snap to the nearest $10,000
                Without it you'd get values like $873,421 — not clean increments
                With it you only ever see $0, $10,000, $20,000... up to $1,000,000
            */
            // no complex rounding needed for smaller numbers
            const current = Math.round( eased * target );

            // current will always be a number between 1 and 40 so use current
            counterRefYearsExperience.current.textContent = `${ current }+`;

            // ==============================
            // code block 4
            // ==============================

            // keep the animation going as long as progress is less than 1 and once progress
            // equals 1 then stop the animation
            if ( progress < 1 ) {

                rafId = requestAnimationFrame( animate );

            } // end of if ()

        }; // end of the animate function

        // ==============================
        // code block 5
        // ==============================

        // trigger the animation and remember, requestAnimationFrame eliminated the flash on my
        // iPhone for the infinite scroll by controlling the reset mathematically instead
        // of letting the CSS handle it
        rafId = requestAnimationFrame( animate );

        // ==============================
        // code block 6
        // ==============================

        // cancel the animation frame on cleanup, so it never fires against a stale
        // ref in the first place:
        return () => {

            if ( rafId ) cancelAnimationFrame( rafId );

        }; // end of return()

    }, [ isIntersecting ] ); // end of useEffect 3

    // ==============================
    // useEffect 4
    // ==============================

    // ==============================
    // purpose - create a counter animation for board certifications
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        if ( !isIntersecting ) return;
    
        // our target is 3 board certifications
        const target   = 3;
        const duration = 4000;
        // performance.now() returns the current time in milliseconds since the page loaded and is
        // best for animations

        // records exactly when animation started
        const start    = performance.now();

        // declare rafId
        let rafId;

        // ==============================
        // code block 2
        // ==============================

        // save this function to the const animate

        // timestamp is a high-precision time value automatically passed by requestAnimationFrame
        // and it represents the current time in milliseconds since the page loaded
        const animate = ( timestamp ) => {

            // ==============================
            // code block 3
            // ==============================

            /*
                const start     = performance.now();    // say 1000ms
                // rAF fires almost immediately
                const timestamp = 1016ms                // first frame ~16ms later
                const elapsed   = 1016 - 1000 = 16ms    // not exactly 0
            */
            const elapsed  = timestamp - start;
            /*
                - Converts elapsed time to a value between 0 and 1
                - elapsed / duration = how far through the animation
                ( e.g. 1500 / 3000 = 0.5 = halfway )
                - Math.min( ..., 1 ) caps it at 1 so it never exceeds 100% — prevents counter
                going past $1,000,000
            */
            const progress = Math.min( elapsed / duration, 1 );
            
            // ease out the animation
            /*
                - Applies an ease out curve to the linear progress value
                - Without this the counter increments at a constant speed — feels mechanical
                - With this it starts fast and slows down near $1,000,000 — feels natural

                Math.pow( 1 - progress, 3 ) — cubes that inverted value :
                progress = 0.0 → Math.pow( 1.0, 3 ) = 1.0
                progress = 0.5 → Math.pow( 0.5, 3 ) = 0.125
                progress = 1.0 → Math.pow( 0.0, 3 ) = 0.0
                
                Why cube it (³)?

                Math.pow( x, 2 ) — gentle ease out
                Math.pow( x, 3 ) — more pronounced ease out
                Math.pow( x, 4 ) — very strong ease out
            */
            const eased  = 1 - Math.pow( 1 - progress, 3 );
            
            // round to nearest 10k
            /*
                eased * target — converts the eased progress to a dollar amount :

                eased = 0.0   → 0.0   * 1000000 = $0
                eased = 0.5   → 0.5   * 1000000 = $500,000
                eased = 0.875 → 0.875 * 1000000 = $875,000
                eased = 1.0   → 1.0   * 1000000 = $1,000,000

                / 10000 — divides by your increment size :

                $875,000 / 10000 = 87.5

                Math.round( ... ) — rounds to nearest whole number :

                87.5 → 88

                * 10000 — multiplies back to get the rounded increment :

                88 * 10000 = $880,000

                Why divide then multiply?

                It's a rounding trick to snap to the nearest $10,000
                Without it you'd get values like $873,421 — not clean increments
                With it you only ever see $0, $10,000, $20,000... up to $1,000,000
            */
            // no complex rounding needed for smaller numbers
            const current = Math.round( eased * target );

            // current will always be a number between 1 and 40 so use current
            counterRefBoardCertifications.current.textContent = `${ current }`;

            // ==============================
            // code block 4
            // ==============================

            // keep the animation going as long as progress is less than 1 and once progress
            // equals 1 then stop the animation
            if ( progress < 1 ) {

                rafId = requestAnimationFrame( animate );

            } // end of if ()

        }; // end of the animate function

        // ==============================
        // code block 5
        // ==============================

        // trigger the animation and remember, requestAnimationFrame eliminated the flash on my
        // iPhone for the infinite scroll by controlling the reset mathematically instead
        // of letting the CSS handle it
        rafId = requestAnimationFrame( animate );

        // ==============================
        // code block 6
        // ==============================

        // cancel the animation frame on cleanup, so it never fires against a stale
        // ref in the first place:
        return () => {

            if ( rafId ) cancelAnimationFrame( rafId );

        }; // end of return()
    
    }, [ isIntersecting ] ); // end of useEffect 4
/*
    // ==============================
    // useEffect 5
    // ==============================

    // ==============================
    // purpose - create a counter animation for years of senior management experience
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        if ( !isIntersecting ) return;
    
        // our target is 3 AI agents built
        const target   = 3;
        const duration = 4000;
        // performance.now() returns the current time in milliseconds since the page loaded and is
        // best for animations

        // records exactly when animation started
        const start    = performance.now();

        // ==============================
        // code block 2
        // ==============================

        // save this function to the const animate

        // timestamp is a high-precision time value automatically passed by requestAnimationFrame
        // and it represents the current time in milliseconds since the page loaded
        const animate = ( timestamp ) => {

            // ==============================
            // code block 3
            // ==============================

            /*
                const start     = performance.now();    // say 1000ms
                // rAF fires almost immediately
                const timestamp = 1016ms                // first frame ~16ms later
                const elapsed   = 1016 - 1000 = 16ms    // not exactly 0
            */ /*
            const elapsed  = timestamp - start;
            /*
                - Converts elapsed time to a value between 0 and 1
                - elapsed / duration = how far through the animation
                ( e.g. 1500 / 3000 = 0.5 = halfway )
                - Math.min( ..., 1 ) caps it at 1 so it never exceeds 100% — prevents counter
                going past $1,000,000
            */ /*
            const progress = Math.min( elapsed / duration, 1 );
            
            // ease out the animation
            /*
                - Applies an ease out curve to the linear progress value
                - Without this the counter increments at a constant speed — feels mechanical
                - With this it starts fast and slows down near $1,000,000 — feels natural

                Math.pow( 1 - progress, 3 ) — cubes that inverted value :
                progress = 0.0 → Math.pow( 1.0, 3 ) = 1.0
                progress = 0.5 → Math.pow( 0.5, 3 ) = 0.125
                progress = 1.0 → Math.pow( 0.0, 3 ) = 0.0
                
                Why cube it (³)?

                Math.pow( x, 2 ) — gentle ease out
                Math.pow( x, 3 ) — more pronounced ease out
                Math.pow( x, 4 ) — very strong ease out
            */ /*
            const eased  = 1 - Math.pow( 1 - progress, 3 );
            
            // round to nearest 10k
            /*
                eased * target — converts the eased progress to a dollar amount :

                eased = 0.0   → 0.0   * 1000000 = $0
                eased = 0.5   → 0.5   * 1000000 = $500,000
                eased = 0.875 → 0.875 * 1000000 = $875,000
                eased = 1.0   → 1.0   * 1000000 = $1,000,000

                / 10000 — divides by your increment size :

                $875,000 / 10000 = 87.5

                Math.round( ... ) — rounds to nearest whole number :

                87.5 → 88

                * 10000 — multiplies back to get the rounded increment :

                88 * 10000 = $880,000

                Why divide then multiply?

                It's a rounding trick to snap to the nearest $10,000
                Without it you'd get values like $873,421 — not clean increments
                With it you only ever see $0, $10,000, $20,000... up to $1,000,000
            */ /*
            // no complex rounding needed for smaller numbers
            const current = Math.round( eased * target );

            // current will always be a number between 1 and 3 so use current
            counterRefAIAgentsBuilt.current.textContent = current;

            // ==============================
            // code block 4
            // ==============================

            // keep the animation going as long as progress is less than 1 and once progress
            // equals 1 then stop the animation
            if ( progress < 1 ) {

                requestAnimationFrame( animate );

            } // end of if ()

        }; // end of the animate function

        // ==============================
        // code block 5
        // ==============================

        // trigger the animation and remember, requestAnimationFrame eliminated the flash on my
        // iPhone for the infinite scroll by controlling the reset mathematically instead
        // of letting the CSS handle it
        requestAnimationFrame( animate );
    
    }, [ isIntersecting ] ); // end of useEffect 5
*/
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

        <Fragment>

            {
                /*
                    // ==============================
                    // container
                    // ==============================
                */
            }
            <div className={ styles.byTheNumbersContainer }>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div )
                        // ==============================
                    */
                }
                <div
                    ref={ wrapperRef }
                >

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 1 ( the h2 )
                            // ==============================
                        */
                    }
                    <div>

                        <h2>
                            By The <span>Numbers</span>
                        </h2>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 ( counters )
                            // ==============================
                        */
                    }
                    <div>

                        <div>

                            <p>Patients served</p>

                            <div ref={ counterRefPatientsServed }></div>

                        </div>

                        <div>

                            <p>Years experience</p>

                            <div ref={ counterRefYearsExperience    }></div>

                        </div>

                        <div>

                            <p>Board certifications</p>

                            <div ref={ counterRefBoardCertifications }></div>

                        </div>

                        {
                            /*
                                <div>

                                    <p>AI agents built</p>

                                    <div ref={ counterRefAIAgentsBuilt }></div>

                                </div>
                            */
                        }

                    </div>

                </div>

            </div>

        </Fragment>

    );

} // end of ByTheNumbersComponent

