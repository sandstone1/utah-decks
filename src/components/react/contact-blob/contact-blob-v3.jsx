

// import in the useEffect and useRef hooks
import { useEffect, useRef } from 'react';
// import in the navigate component
import { navigate } from 'astro:transitions/client';
import { 
    gsap,
    ScrollTrigger,
    SplitText,
    CustomEase
} from '../../../lib/gsap';
// import in the scss file
import styles from './contact-blob-v3.module.scss';




export default function ContactBlobComponent() {

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
        // container ( contains the background image )
        // ==============================

        <div
            className={ `${ styles.contactBlobContainer } contact-blob-container` }
            ref={ containerRef }
        >

            {
                /*
                    // ==============================
                    // container > div 1 ( content )
                    // ==============================
                */
            }
            <div>

                <h2 className="contact-blob-h2">
                    Ready to feel like yourself again?{' '}
                    <a
                        // provide the fallback and accessibility with href='/'
                        href='/contact'
                        ref={ contactBlobAnchorRef }
                        className="contact-blob-anchor-tag"
                        onClick={ ( e ) => {

                            // stop the default browser navigation so navigate() handles it instead
                            e.preventDefault();

                            // ==============================
                            // morph video container to blue box on the contact page
                            // ==============================

                            const contactBlobH2 = document.querySelector( '.contact-blob-h2' );
                            contactBlobH2.style.viewTransitionName = 'contact-page-h1';

                            const contactBloBAnchorTag = document.querySelector( '.contact-blob-anchor-tag' );
                            contactBloBAnchorTag.style.viewTransitionName = 'contact-page-image-underline';

                            const contactBlobContainer = document.querySelector( '.contact-blob-container' );
                            contactBlobContainer.style.viewTransitionName = 'contact-page-yellow-box';

                            const contactBlobContainer2 = document.querySelector( '.contact-blob-container-2' );
                            contactBlobContainer2.style.viewTransitionName = 'contact-page-blue-box';

                            // ==============================
                            // end of morph video container to blue box on the contact page
                            // ==============================

                            // navigate to the home page
                            navigate( '/contact' );

                        } }
                    >
                        Let&apos;s talk<span></span><span></span><span></span><span></span><span></span><span></span>
                    </a>
                </h2>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2
                    // ==============================
                */
            }
            <div className="contact-blob-container-2"></div>

        </div>

    );

} // end of ContactBlobComponent

