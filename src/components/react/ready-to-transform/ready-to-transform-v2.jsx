


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the gsap, ScrollTrigger and SplitText
import { 
    gsap,
    ScrollTrigger,
    SplitText
} from '../../../lib/gsap';
// import in the Font Awesome calendar check icon
import { FaRegCalendarCheck } from "react-icons/fa6";
// import in our stylesheet
import styles from './ready-to-transform-v2.module.scss';



export default function ReadyToTransformComponent() {

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
    const containerRef   = useRef();
    const wrapperRef     = useRef();
    const h2Ref          = useRef();
    const p2Ref          = useRef();
    const ctaButtonRef   = useRef();
    const p4Ref          = useRef();
    const phoneNumberRef = useRef();

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
    // purpose - fade in and slide in our text and buttons
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // get the browser width
        // ==============================

        let browserWidth = window.innerWidth;

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
        const readyToTransformOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -450px 0px' // this works like margin in css and this
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
        // readyToTransformObserver
        const readyToTransformObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, readyToTransformObserver ) { 

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
                            // console.log( 'Element entered from the bottom' );

                            // ==============================
                            // animation - opacity and slide in
                            // ==============================

                            // ==============================
                            // browserWidth <= 620
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth <= 620 )
                            ) {

                                // ==============================
                                // h2
                                // ==============================

                                h2Ref.current.animate(

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

                                ); // end of h2Ref.current.animate()

                                // ==============================
                                // paragragh 2
                                // ==============================

                                p2Ref.current.animate(

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
                                        delay      : 300,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of p2Ref.current.animate()

                                // ==============================
                                // cta button
                                // ==============================

                                ctaButtonRef.current.animate(

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
                                        delay      : 600,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of ctaButtonRef.current.animate()

                                // ==============================
                                // paragragh 4
                                // ==============================

                                p4Ref.current.animate(

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
                                        delay      : 900,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of p4Ref.current.animate()

                                // ==============================
                                // phone number
                                // ==============================

                                phoneNumberRef.current.animate(

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
                                        delay      : 1200,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of phoneNumberRef.current.animate()

                            } // end of if ( browserWidth <= 620 )

                            // ==============================
                            // end of animation
                            // ==============================

                        } // end of if ( entry.boundingClientRect.top > 0 ) {}

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        readyToTransformObserver.unobserve( containerRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, readyToTransformObserver )

            readyToTransformOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        readyToTransformObserver.observe( containerRef.current );

        // ==============================
        // end of intersection observer
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect(); 2
    // ==============================

    // ==============================
    // purpose : use gsap to animate in the hero image text
    // ==============================

    // ==============================
    // IMPORTANT!
    //
    // to eliminate the inital page jank after using gsap, we had to do the following 3 things :
    //
    // 1 - change the hero component from <HeroComponent client:only="react" /> to
    // <HeroComponent client:load />
    //
    // 2 - we had to add if ( typeof window === 'undefined' ) return; so that we make gsap
    // only run on the client side
    // 
    // 3 - we had to use document.fonts.ready.then( () => {} to make sure the page is at
    // least partially ready to run the gsap hero text animation code below
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // declare variables
        // ==============================

        let timeoutId; // declare here so cleanup can access it

        // ==============================
        // GSAP code here
        // ==============================

        // ==============================
        // code block 2
        // ==============================

        /*
            if ( typeof window === 'undefined' ) return;

            Means: "If we're on the server, stop here and don't run the rest of the code."

            Why it matters for your hero :

            With client:load Astro SSR runs your component on the server first. GSAP and
            document.fonts.ready don't exist on the server — calling them would throw an error.
        */

        // only run GSAP on client side and good safety check
        if ( typeof window === 'undefined' ) return;

        // this creates a Promise that automatically resolves after 500 ms
        const timeout = new Promise( ( resolve ) => setTimeout( resolve, 500 ) );

        /*
            document.fonts.ready.then() :

            A Promise that resolves when all fonts are fully loaded
            Fires as soon as fonts are ready — even if other resources (images, videos) are still loading
            Faster than window load event
            Specifically solves the SplitText problem — if fonts aren't loaded when SplitText measures text,
            it gets wrong dimensions and splits incorrectly

            window.addEventListener( 'load ') :

            Fires when everything is fully loaded — HTML, CSS, images, videos, fonts, all assets
            Always slower than fonts.ready because it waits for all resources
            More conservative — guarantees everything is ready before animating

            Which is better for your use case :
            For SplitText specifically — document.fonts.ready is better because :

            You only need fonts to be loaded for SplitText to measure correctly
            No need to wait for videos and images which take much longer
            Fires sooner = animation starts sooner = better user experience
        */
        /*
            Promise.race( [ document.fonts.ready, timeout ] ) resolves as soon as either
            promise resolves first, whichever wins. By pairing document.fonts.ready ( which
            resolves whenever fonts finish loading — could be fast, could be slow, could
            theoretically never happen on buggy iOS ) against this timeout Promise ( which
            always resolves, guaranteed, in exactly 2 seconds ), you get a safety ceiling :
            your code proceeds either when fonts are actually ready, or after 2 seconds pass
            — whichever happens first. That's what prevents the animation from being
            permanently stuck waiting on a promise that might never resolve
            ( i.e. document.fonts.ready )
        */
        Promise.race( [ document.fonts.ready, timeout ] ).then( () => {

            // ==============================
            // code block 3
            // ==============================

            // ==============================
            // determine of the user is on mobile
            // ==============================

            // get isMobile
            const isMobile = window.innerWidth <= 620;
            // no hero animation on mobile and use the intersection observer above to provide for
            // the animation
            if ( isMobile ) return;

            // had to set the opacity to 1 in order for the first video h1 and h5 elements
            // to show on the page after running the animation below
            wrapperRef.current.style.opacity = 1;

            // get is1376
            const is1376 = window.innerWidth > 620 && window.innerWidth <= 1376;

            // ==============================
            // code block 4
            // ==============================
/*
            if (
                isMobile &&
                wrapperRef.current
            ) {

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.hero-h2', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the container ref
                const wrapperDiv = document.querySelector( '.wrapper-div' );
                // get the CTA button
                const ctaButton = document.querySelector( '.cta-button' );
                // get the phone number
                const phoneNumber = document.querySelector( '.phone-number' );

                gsap.timeline( {
                    // delay         : 0.20,
                    scrollTrigger : {
                        trigger : containerRef.current,       // element to watch
                        start   : 'top 50.0%',                // waits until the div is 50.0% into view
                        once    : true,                       // only run the animation the first time it enters view
                    }
                } )
                /*
                .from( wrapperDiv,
                    {
                        opacity  : 0,
                        duration : 1.0,
                        delay    : 0.0,
                        // stagger  : 0.05,
                        x        : -125,
                        ease     : 'elastic.out( 1.4, 0.7 )'
                    } )
                */ /*
                .from( firstHeroH1Text.words, 
                    {
                        opacity  : 0,
                        duration : 0.96,
                        delay    : 0.0,
                        stagger  : 0.100,
                        x        : -20,
                        ease     : 'elastic.out( 1.4, 0.7 )'
                    }
                )
                .from( ctaButton,
                    {
                        opacity  : 0,
                        duration : 0.96,
                        delay    : 0.0,
                        // stagger  : 0.05,
                        x        : -20,
                        ease     : 'elastic.out( 1.4, 0.7 )'
                    },
                '-=00.56' ) // start 1.40s before the h2 animation ends and remember, use this
                // number as our delay
                .from( phoneNumber,
                    {
                        opacity  : 0,
                        duration : 0.96,
                        delay    : 0.0,
                        // stagger  : 0.05,
                        x        : -20,
                        ease     : 'elastic.out( 1.4, 0.7 )'
                    },
                '-=00.56' ) // start 1.40s before the h2 animation ends and remember, use this
                // number as our delay

            } // end of if ()

            // ==============================
            // code block 5
            // ==============================

            else */ if ( 
                is1376 &&
                wrapperRef.current
            ) {

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.hero-h2', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the CTA button
                const ctaButton = document.querySelector( '.cta-button' );
                // get the phone number
                const phoneNumber = document.querySelector( '.phone-number' );

                gsap.timeline( {
                    scrollTrigger : {
                        trigger : containerRef.current,       // element to watch
                        start   : 'top 50.0%',                // waits until the div is 50.0% into view
                        once    : true,                       // only run the animation the first time it enters view
                    }
                } )
                .from( firstHeroH1Text.words, 
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        stagger  : 0.05,
                        x        : -125,
                        ease     : 'elastic.out( 1.4, 0.70 )'
                    } 
                )
                .from( ctaButton,
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        // stagger  : 0.05,
                        x        : -125,
                        ease     : 'elastic.out( 1.4, 0.70 )'
                    },
                '-=01.40' ) // start 1.40s before the h2 animation ends and remember, use this
                // number as our delay
                .from( phoneNumber,
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        // stagger  : 0.05,
                        x        : -125,
                        ease     : 'elastic.out( 1.4, 0.70 )'
                    },
                '-=01.40' ) // start 1.40s before the h2 animation ends and remember, use this
                // number as our delay

            } // end of else if()

            // ==============================
            // code block 6
            // ==============================

            else {

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.hero-h2', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the CTA button
                const ctaButton = document.querySelector( '.cta-button' );
                // get the phone number
                const phoneNumber = document.querySelector( '.phone-number' );

                gsap.timeline( {
                    scrollTrigger : {
                        trigger       : containerRef.current,         // element to watch
                        start         : 'top 65.0%',                  // waits until the div is 35.0% into view
                        /*
                        ┌─────────────────────┐  ← 0% (top of viewport)
                        │                     │
                        │                     │
                        │                     │  ← trigger fires the INSTANT the top of this div crosses the 85% point
                        │                     │
                        └─────────────────────┘  ← 100% (bottom of viewport)

                            [containerRef.current]        
                        */
                        // end           : 'top 50%',                // finishes when top of the element hits 50% of viewport
                        // toggleActions : 'play none none none',    // onEnter, onLeave, onEnterBack, onLeaveBack and plays forward on
                        // enter and reverses if the user scrolls back up past it
                        once          : true,                        // only run the animation the first time it enters view
                        // onEnter       : () => console.log('ScrollTrigger fired!'),
                        // markers       : true                      // remove once you're done debugging
                    }
                } )
                .from( firstHeroH1Text.words,
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        stagger  : 0.05,
                        x        : -200,
                        ease       : 'elastic.out( 1.2, 0.75 )'
                    } 
                )
                .from( ctaButton,
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        // stagger  : 0.035,
                        x        : -200,
                        ease     : 'elastic.out( 1.2, 0.75 )'
                    },
                '-=01.40' ) // start 1.40s before the h2 animation ends and remember, use this
                // number as our delay
                .from( phoneNumber,
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        // stagger  : 0.035,
                        x        : -200,
                        ease     : 'elastic.out( 1.2, 0.75 )'
                    },
                '-=01.40' ) // start 1.40s before the h2 animation ends and remember, use this
                // number as our delay

            } // end of if else

        } ); // end of Promise.race( [ document.fonts.ready, timeout ] ).then( () => {}

        // ==============================
        // end of GSAP code
        // ==============================

        // ==============================
        // code block 7
        // ==============================

        // force ScrollTrigger to recalculate trigger positions once everything
        // ( images, iframes, late-loading fonts ) has fully finished loading —
        // fixes stale trigger positions on iOS specifically

        // refresh() just recalculates trigger positions based on current layout;
        // it doesn't restart or interrupt animations that are already in progress,
        // it just makes sure future scroll-triggered calculations are accurate
        const handleLoad = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener( 'load', handleLoad );

        // ==============================
        // code block 8
        // ==============================

        // clean up
        /*
            The clearTimeout in the cleanup function is what bridges that gap — it tells React
            "if this component goes away before the timer fires, cancel the timer so it never
            gets the chance to run against a now-nonexistent element."
        */
        return () => {

            clearTimeout( timeoutId );

            // remove the EventListener for the load event so that it doesn't leak across
            // component re-mounts / Astro navigations
            window.removeEventListener( 'load', handleLoad );

            // clean up ScrollTrigger instances on unmount so they don't stack up
            // across client-side navigations
            ScrollTrigger.getAll().forEach( ( trigger ) => trigger.kill() );

        }; // end of return

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

        <div
            className={ styles.readyToTransformContainer }
            ref={ containerRef }
        >

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div
                ref={ wrapperRef }
                className="wrapper-div"
            >

                <h2
                    ref={ h2Ref }
                    className="hero-h2"
                >
                    Ready to Transform Your <span style={ { color : 'var( --green-23-9 )' } }>Backyard?</span>
                </h2>

                <p
                    ref={ p2Ref }
                >
                    Get a free, no-pressure deck design or inspection from Utah Decks & Pergolas.
                </p>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 3 ( get started button )
                        // ==============================
                    */
                }
                <div
                    ref={ ctaButtonRef }
                    className="cta-button"
                >

                    <a
                        href="#"
                        onClick={ 
                            ( e ) => {
                                e.preventDefault();
                                document.getElementById( 'calendar-section' ).scrollIntoView( { behavior : 'smooth' } ); 
                            }
                        }
                    >
                        <FaRegCalendarCheck style={ { verticalAlign: '-3.0px', fontSize: '2.25rem', margin: '0 1.0rem 0 0' } } />
                        Schedule your project
                    </a>
        
                </div>

                <p
                    ref={ p4Ref }
                >
                    or call us directly at
                </p>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 5 ( phone number )
                        // ==============================
                    */
                }
                <div
                    ref={ phoneNumberRef }
                    className="phone-number"
                >
                    <a
                        href="tel:385-425-2299"
                        target="_blank"
                    >
                        {
                            /*
                                // ==============================
                                // wrap the number in html entities in order to remove the
                                // blue phone number color from iPad and iPhone
                                // ==============================
                            */
                        }
                        &#40;385&#41; 425&#45;2299
                    </a>
                </div>

            </div>

        </div>

    );

} // end of ReadyToTransformComponent

