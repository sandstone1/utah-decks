

// import in Fragment, the useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
/*
    That single change tells your bundler ( Vite, under Astro ) to split SphereMeshDistortBlob
    — and everything it imports ( Three.js, OrbitControls, etc. ) — into its own separate chunk,
    which is only fetched over the network when this component actually renders for the first
    time, instead of being bundled into your initial page load.
*/
// import in lazy and Suspense
import { lazy, Suspense } from 'react';
// lazy load SphereMeshDistortBlob
const SphereMeshDistortBlob8 = lazy( () => import( '../3d/react-three-fiber/lama-dev/sphere-8/sphere-mesh-distort-blob' ) );
// lazy load SphereMeshDistortBlob
const SphereMeshDistortBlob7 = lazy( () => import( '../3d/react-three-fiber/lama-dev/sphere-7/sphere-mesh-distort-blob' ) );
// import in the Circle component
// import CircleComponent from '../animations/circle/circle-v7';
import { 
    gsap,
    ScrollTrigger,
    SplitText,
    CustomEase
} from '../../../lib/gsap';
// import in the scss file
import styles from './contact-blob-v1.module.scss';




export default function ContactBlobComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ isThreeDBlobOpen, setIsThreeDBlobOpen ] = useState( false );
    
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

    const containerRef         = useRef( null );
    const contactBlobAnchorRef = useRef( null );

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
    // purpose - hide the 3D Blob on page load in order to optimize the inital page
    // loading performance and then show the 3D Blob after isIntersecting is true
    // ==============================

    useEffect( () => {

        // ==============================
        // if the user is on a mobile device, skip running the intersection observer
        // and just show the jsx and remember, we are showing a css rotating circle
        // on mobile devices so there is no need for useEffect 1 and conditionally
        // remdering the 3D blob
        // ==============================

        // ==============================
        // if I decide to keep the blob on mobile devices then comment out this code
        // ==============================
/*
        // get isMobile
        const isMobile = window.innerWidth <= 480;

        if ( isMobile ) {

            // show jsx immediately
            setIsThreeDBlobOpen( true );

            // exit useEffect 1
            return;
    
        } // end of if ()
*/
        // ==============================
        // intersection observer 1
        // ==============================

        // ==============================
        // show video after isIntersecting is true
        // ==============================

        // ==============================
        // note 1 - this set up will defer the loading of the large video file until the
        // user reaches the isIntersecting point, which is almost always ( always? )
        // after the page loads and remember, prior to adding this change PageSpeedInsights
        // was docking our app on performance in a major way
        // ==============================

        // ==============================
        // note 2 - this set up helped speed up the page load immensely on my iPhone and
        // prior to making this change my phone, in the background, would be downloading all
        // the stuff needed in order to display the page and the downloading process could
        // take many seconds and further more, what happened sometimes is that if I started
        // scrolling down the page while the page was still downloading then after the
        // page finished the downloading process then I would be automatically taken to the
        // top of page, resulting in a terrible user experience
        // ==============================

        // options object
        const ThreeDBlobShowOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '5000px 0px 0px 0px' // this works like margin in css and this
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

            // remember, I had to add a large top root margin since the video was not
            // displaying on the page if I reloaded the page while I was in the 3D
            // animation section and adding a large top root margin solved this issue

            // see notes in the threeDShowObserver below for details on the top and
            // bottom root margin

        } // end of options object

        // create the intersection observer and save the result to the const
        // videoShowObserver
        const ThreeDBlobShowObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, ThreeDBlobShowObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        // console.log( entry );

                        // ==============================
                        // create DOM reference
                        // ==============================

                        // STEP 3

                        // reference the specified DOM element below

                        // when the video element enters the viewport ( i.e. isIntersecting
                        // is true ) then we want to set the isVideoOpen state to true
                        // and thereby open the video
                        setIsThreeDBlobOpen( true );

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        ThreeDBlobShowObserver.unobserve( containerRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, ThreeDBlobShowObserver )

            ThreeDBlobShowOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        ThreeDBlobShowObserver.observe( containerRef.current );

        // ==============================
        // end of intersection observer 1
        // ==============================

    }, [ isThreeDBlobOpen ] ); // end of useEffect 1

/*
    // ==============================
    // useEffect 1
    // ==============================

    // ==============================
    // purpose - hide the 3D Blob on page load for 5 seconds and we do this in order to optimize
    // the inital page loading performance and then show the 3D Blob after 5 seconds
    // ==============================

    useEffect(() => {

        const timer = setTimeout(() => {

            setIsThreeDBlobOpen( true );

        }, 5000 );
    
        return () => clearTimeout( timer );

    }, [] ); // end of useEffect 1
*/
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

        // bail out early if the content isn't rendered yet
        if ( !isThreeDBlobOpen ) return;

        // ==============================
        // code block 2
        // ==============================

        // ctx declared here because ctx needs to be accessible in two separate places that
        // run at different times
        let ctx;
        // cancelled starts as false
        let cancelled = false;

        // ==============================
        // code block 3
        // ==============================

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
        document.fonts.ready.then( () => {

            // document.fonts.ready is a Promise — it might resolve instantly, or it might take
            // a second or two so if the component unmounted before fonts resolved then bail out
            if ( cancelled ) return;

            // what gsap.context() actually does : it scopes and tracks every GSAP
            // animation/ScrollTrigger created inside its callback, so that later calling
            // ctx.revert() automatically kills all of them at once
            ctx = gsap.context(() => {

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
                // code block 4
                // ==============================

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const sectionTitleText = SplitText.create( '.contact-blob-h2', { 
                    type      : 'words, chars',
                    // type      : 'words, lines',
                    smartWrap : true,
                    // ignore    : 'a' // don't split anything inside <a> tags
                } );

                // ==============================
                // code block 5
                // ==============================

                // ==============================
                // animate in the section title text based on when the section is entering the
                // viewport, which is determined by the intersection observer above
                // ==============================

                gsap.timeline(

                    {
                        scrollTrigger : {
                            trigger       : '.contact-blob-h2',         // element to watch
                            start         : 'top 87.5%',                  // waits until the div is 15% into view
                            /*
                            ┌─────────────────────┐  ← 0% (top of viewport)
                            │                     │
                            │                     │
                            │                     │  ← trigger fires the INSTANT the top of this div crosses the 85% point
                            │                     │
                            └─────────────────────┘  ← 100% (bottom of viewport)

                                [.contact-blob-h2]        
                            */
                            // end           : 'top 50%',               // finishes when top of the element hits 50% of viewport
                            toggleActions : 'play none none none',      // onEnter, onLeave, onEnterBack, onLeaveBack and plays forward on
                            // enter and reverses if the user scrolls back up past it
                            once          : true,                       // fire once and don't reverse/replay
                            // onEnter    : () => console.log('ScrollTrigger fired!'),
                            // markers       : true                     // remove once you're done debugging
                        },
                        onComplete : () => {

                            if ( contactBlobAnchorRef.current ) {

                                // get the stars
                                const star1 = contactBlobAnchorRef.current.querySelector( 'span:nth-of-type( 1 )' );
                                const star2 = contactBlobAnchorRef.current.querySelector( 'span:nth-of-type( 2 )' );
                                const star3 = contactBlobAnchorRef.current.querySelector( 'span:nth-of-type( 3 )' );
                                const star4 = contactBlobAnchorRef.current.querySelector( 'span:nth-of-type( 4 )' );
                                const star5 = contactBlobAnchorRef.current.querySelector( 'span:nth-of-type( 5 )' );
                                const star6 = contactBlobAnchorRef.current.querySelector( 'span:nth-of-type( 6 )' );

                                // remember, in the css, we set " animation-play-state : paused; "
                                if ( star1 ) {
                                    star1.style.animationPlayState = 'running';
                                }
                                if ( star2 ) {
                                    star2.style.animationDelay     = '0.2s';
                                    star2.style.animationPlayState = 'running';
                                }
                                if ( star3 ) {
                                    star3.style.animationDelay     = '0.4s';
                                    star3.style.animationPlayState = 'running';
                                }
                                if ( star4 ) {
                                    star4.style.animationDelay     = '0.6s';
                                    star4.style.animationPlayState = 'running';
                                }
                                if ( star5 ) {
                                    star5.style.animationDelay     = '0.8s';
                                    star5.style.animationPlayState = 'running';
                                }
                                if ( star6 ) {
                                    star6.style.animationDelay     = '1.0s';
                                    star6.style.animationPlayState = 'running';
                                }

                            } // end of if ()

                        } // end of onComplete
                    }
                ) // end of gsap.timeline()
                .from( sectionTitleText.chars,
                    {

                        // ==============================
                        // chars animations
                        // ==============================

                        // letter flip in ( good )
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
     
                        // fade-up ( good )
                        /*
                        opacity  : 0,
                        duration : 0.5,
                        stagger  : 0.03,
                        y        : 30,
                        ease     : 'power3.out'
                        */

                        // scale-up reveal ( good )
                        /*
                        opacity         : 0,
                        duration        : 0.6,
                        delay           : 0.0,
                        stagger         : 0.02,
                        y               : 40,
                        scale           : 0.9,
                        transformOrigin : "50% 100%",   // scale upward from bottom
                        ease            : "power3.out"
                        */
      
                        // underneth reveal ( great )
                        /*
                        opacity  : 0,
                        duration : 0.6,
                        stagger  : 0.02,
                        y        : 50,
                        rotation : 5,                   // subtle twist on entry
                        ease     : "back.out( 1.7 )"    // "1.7" dictates the strength of the bounce
                        */

                        // fade-up with random stagger 
                        /*
                        opacity  : 0,
                        y        : 30,
                        duration : 0.5,
                        stagger  : {
                            amount : 0.4,               // total timeframe for all staggers to complete
                            from   : "random"           // options: "random", "center", "edges"
                        },
                        ease     : "power3.out"
                        */

                        // typewriter ( good )
                        /*
                        opacity  : 0,
                        duration : 0.0275,               // very fast per character
                        stagger  : 0.035,                // consistent delay between characters
                        ease     : "steps(1)" 
                        */

                        // fade + rise ( good )
                        /*
                        opacity  : 0,
                        y        : 20,
                        duration : 0.6,
                        stagger  : 0.0275,
                        ease     : 'power3.out'
                        */

                        // blur in ( modern, trendy right now ) ( great )
                        
                        opacity  : 0,
                        filter   : 'blur( 2px )',
                        y        : 10,
                        duration : 0.75,
                        stagger  : 0.025,
                        ease     : 'power2.out'
                        

                        // curtain reveal
                        /*
                        y        : '100%',
                        duration : 0.6,
                        stagger  : 0.06,
                        ease     : 'power4.out'
                        */

                        // ==============================
                        // lines animations
                        // ==============================

                        // left-to-right reveal ( good )
                        /*
                        clipPath : 'inset(0 100% 0 0)',
                        duration : 0.8,
                        stagger  : 0.15,
                        ease     : 'power4.inOut'
                        */

                    } 
                );

                // SplitText.create() restructures the DOM — it tears our h2's text content apart
                // into a bunch of individual <div> / <span> wrapped characters

                // this is a safety net that forces ScrollTrigger to recalculate the position of
                // every trigger on the page
                ScrollTrigger.refresh();

            } ); // ctx wraps the synchronous code that creates the animations

        } ); // end of document.fonts.ready.then()

        // ==============================
        // code block 6
        // ==============================
    
        // clean up everything
        return () => {

            // when the component unmounts then cancelled becomes true
            cancelled = true;
            // kills everything created above
            ctx.revert();

        }; // end of return

    }, [ isThreeDBlobOpen ] ); // end of useEffect 2

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
            className={ styles.contactBlobContainer }
            ref={ containerRef }
        >

            {
                /*
                    // ==============================
                    // isThreeDBlobOpen && ()
                    // ==============================
                */
            }
            {
                isThreeDBlobOpen && (

                    <Fragment>
            
                        {
                            /*
                                // ==============================
                                // container > div 1 ( wrapper div )
                                // ==============================
                            */
                        }
                        <div>

                            <h2 className="contact-blob-h2">
                                Ready to grow your business? <a href="/contact" ref={ contactBlobAnchorRef }>Let&apos;s talk<span></span><span></span><span></span><span></span><span></span><span></span></a>
                            </h2>
            
                        </div>
            
                        {
                            /*
                                // ==============================
                                // 3container > div 2 ( 3d blob )
                                // ==============================
                                <SphereMeshDistortBlob />
                            */
                        }
                        <div>

                            <Suspense fallback={ null }>
                                <SphereMeshDistortBlob8 />
                            </Suspense>
            
                        </div>

                        {
                            /*
                                // ==============================
                                // 3container > div 3 ( 3d blob )
                                // ==============================
                                <SphereMeshDistortBlob />
                            */
                        }
                        <div>

                            <Suspense fallback={ null }>
                                <SphereMeshDistortBlob7 />
                            </Suspense>
            
                        </div>

                        {
                            /*
                                // ==============================
                                // container > div 4 ( circle component )
                                // ==============================
                                <div>
                                    <CircleComponent />
                                </div>
                            */
                        }

                    </Fragment>
            
                )

            }

        </div>

    );

} // end of ContactBlobComponent

