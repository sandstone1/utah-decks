

// import in Fragment, useEffect, useRef hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the gsap, ScrollTrigger, SplitText and CustomEase
import { 
    gsap,
    ScrollTrigger,
    SplitText,
    CustomEase
} from '../../../lib/gsap';
// import in the Blob Blue background component
import BlobBlueComponent from '../animations/blob/blob-v11';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v18';
// import in the Circle component
import CircleComponent from '../animations/circle/circle-v5';
// import in the scss file
import styles from './what-makes-us-different-v1.module.scss';



export default function WhatMakesUsDifferentComponent() {

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

    // use the useRef(); hook to create a reference to a DOM element(s)
    const wrapperRef = useRef();

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
            rootMargin : '0px 0px -50px 0px' // this works like margin in css and this
            // can help us control when the intersection observer fires
 
            // remember, it's the bottom rootMargin that controls when the element
            // isIntersecting

            // remember, a positive 400px bottom root margin means that isIntersecting
            // will be true once the user gets to a point in the code that is 400px
            // above the ref; in other words, a positive root margin is great for pre
            // loading images

            // remember, a negative 80px bottom root margin means that isIntersecting
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
    // purpose : use gsap to animate in the section title text
    // ==============================

    useEffect( () => {

        // ==============================
        // GSAP code here
        // ==============================

        // ==============================
        // code block 1
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

        // ==============================
        // determine of the user is on mobile
        // ==============================

        // get isMobile
        const isMobile = window.innerWidth <= 620;

        // ==============================
        // custom ease function to match my linear spring animation and remember it has to match
        // my easing and duration
        // ==============================

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // SplitText ( animate in either words or chars )
        // ==============================

        // get the first hero h1
        const sectionTitleText = SplitText.create( '.section-title', { 
            type      : 'words, chars',
            smartWrap : true
        } );

        // ==============================
        // code block 3
        // ==============================

        // ==============================
        // animate in the section title text based on when the section is entering the
        // viewport, which is determined by the intersection observer above
        // ==============================

        if ( isIntersecting ) {

            gsap.timeline()
                .from( sectionTitleText.chars,
                    {
                        /*
                        opacity  : 0,
                        duration : isMobile ? 1.5 : 2.0,
                        delay    : isMobile ? 0.0 : 0.0,
                        stagger  : isMobile ? 0.04 : 0.05,
                        x        : isMobile ? 50 : 100,
                        // y        : 80,
                        ease     : isMobile ? 'elastic.out( 1.2, 0.6 )' : 'elastic.out( 1.2, 0.75 )'
                        */
                        /*
                        opacity         : 0,
                        duration        : isMobile ? 0.55 : 0.7,
                        delay           : 0.0,
                        stagger         : isMobile ? 0.03 : 0.04,
                        y               : 20,           // subtle upward movement
                        rotateX         : 90,           // letters flip in from horizontal
                        transformOrigin : '0% 50% -50',
                        ease            : 'back.out( 1.7 )'
                        */
                        /*
                        opacity  : 0,
                        duration : 0.5,
                        stagger  : 0.03,
                        y        : 30,
                        ease     : 'power3.out'
                        */
                        /*
                        opacity         : 0,
                        duration        : 0.6,
                        delay           : 0.0,
                        stagger         : 0.02,
                        y               : 40,
                        scale           : 0.9,
                        transformOrigin : "50% 100%",   // Scale upward from bottom
                        ease            : "power3.out"
                        */
                        // underneth reveal

                        opacity  : 0,
                        duration : 0.6,
                        stagger  : 0.02,
                        y        : 50,
                        rotation : 5,                   // Subtle twist on entry
                        ease     : "back.out( 1.7 )"    // "1.7" dictates the strength of the bounce

                        /*
                        opacity  : 0,
                        y        : 30,
                        duration : 0.5,
                        stagger  : {
                            amount : 0.4,               // Total timeframe for all staggers to complete
                            from   : "random"           // Options: "random", "center", "edges"
                        },
                        ease     : "power3.out"
                        */
                        // typewriter
                        /*
                        opacity  : 0,
                        duration : 0.05,                // Very fast per character
                        stagger  : 0.04,                // Consistent delay between characters
                        ease     : "steps(1)" 
                        */
                    } 
                );

        }

    }, [ isIntersecting ] ); // end of useEffect 2

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
            <div className={ styles.whatMakesUsDifferentContainer }>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div )
                        // ==============================

                        <p>
                            Our goal is simple — be the fractional executive partner that increases 
                            your sales, improves your operations, and frees up your time to focus 
                            on what matters most: growing your business.

                            We learned some hard lessons on the
                            first one, resulting in the know-how that led to successful investor exits
                            on the next two.
                        </p>
                    */
                }
                <div
                    ref={ wrapperRef }
                >

                    <h2 className="section-title">
                        What Makes Us <span>Different</span>
                    </h2>

                    <p>
                        Most agencies are run by marketers. We&apos;re run by a business owner.
                    </p>

                    <p>
                        Over the last 20 years, we&apos;ve founded three companies and led two
                        of them as co founder and CEO. We applied critical operational lessons
                        from our first company to engineer successful investor exits on the
                        next two.
                    </p>

                    <p>
                        Along the way, we learned what it takes to manage a business, how to
                        avoid the landmines that kill promising companies, and how to 
                        make payroll when cash is tight.
                    </p>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 5 > picture
                            // ==============================
                        */
                    }
                    <div>

                        <picture>
                            { /* 1. mobile specific layout block */ }
                            <source
                                media="( max-width : 480px )"
                                srcSet="/images/mj_worried_owner_01_372.webp"
                                type="image/webp"
                            />

                            { /* 2. desktop / tablet layout block ( screens wider than 480px ) */ }
                            <source
                                media="( min-width : 481px )"
                                srcSet="/images/mj_worried_owner_01_800.webp"
                                type="image/webp"
                            />

                            { /* 3. base fallback for safety ( never make this webp ) */ }
                            <img
                                src="/images/mj_worried_owner_01_800.jpg"
                                width={ 800 }
                                height={ 500 }
                                loading="lazy"
                                // fetchpriority={ 'high' } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a cash strapped business CEO"
                            />
                        </picture>

                    </div>

                    <p>
                        That experience changes how we approach every engagement. When we
                        work on your marketing, we&apos;re not thinking about clicks and
                        impressions — we&apos;re thinking about revenue. When we step in
                        to help with operations, we&apos;re not guessing — we&apos;ve been in
                        that seat for almost 20 years.                    
                    </p>

                    <p>
                        Our goal is simple — increase sales, improve operational efficiencies, 
                        and free up your time so you can focus on what matters most: growing 
                        your business.
                    </p>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 2 ( square or blob )
                        // ==============================
                    */
                }
                {
                    /*
                        <BlobBlueComponent />
                    */
                }

                {
                    /*
                        // ==============================
                        // container > div 2 ( circle component )
                        // ==============================
                    */
                }
                {
                    /*
                        <CircleComponent />
                    */
                }

                {
                    /*
                        // ==============================
                        // container > div 2 ( animating backgrounds )
                        // ==============================
                    */
                }
                <div>
                    <AnimatingGradientBackground />
                </div>

            </div>

        </Fragment>

    );

} // end of WhatMakesUsDifferentComponent


