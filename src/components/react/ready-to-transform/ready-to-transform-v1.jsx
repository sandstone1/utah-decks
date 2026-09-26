


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the gsap, ScrollTrigger and SplitText
import { 
    gsap,
    ScrollTrigger,
    SplitText
} from '../../../lib/gsap';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v21';
// import in the Font Awesome calendar check icon
import { FaRegCalendarCheck } from "react-icons/fa6";
// import in the Material Design phone icon
import { MdOutlinePhoneAndroid } from "react-icons/md";
// import in our stylesheet
import styles from './ready-to-transform-v1.module.scss';



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
    const containerRef = useRef();
    const div1Ref      = useRef();

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

            // ==============================
            // code block 3
            // ==============================

            // had to set the opacity to 1 in order for the first video h1 and h5 elements
            // to show on the page after running the animation below
            div1Ref.current.style.opacity = 1;

            // ==============================
            // determine of the user is on mobile
            // ==============================

            // get isMobile
            const isMobile = window.innerWidth <= 620;
            // get is1376
            const is1376 = window.innerWidth <= 1376;

            // ==============================
            // code block 4
            // ==============================

            if (
                isMobile &&
                div1Ref.current
            ) {

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.hero-h2', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );

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
                        x        : -140,
                        ease     : 'elastic.out( 1.2, 0.75 )'          
                    } 
                )

            } // end of if ()

            // ==============================
            // code block 5
            // ==============================

            else if ( 
                is1376 &&
                div1Ref.current
            ) {

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.hero-h2', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );

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

                gsap.timeline( {
                    scrollTrigger : {
                        trigger       : containerRef.current,         // element to watch
                        start         : 'top 50.0%',                  // waits until the div is 50.0% into view
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

            } // end of if else

        } ); // end of document.fonts.ready.then()

        // ==============================
        // end of GSAP code
        // ==============================

        // ==============================
        // code block 7
        // ==============================

        // clean up
        /*
            The clearTimeout in the cleanup function is what bridges that gap — it tells React
            "if this component goes away before the timer fires, cancel the timer so it never
            gets the chance to run against a now-nonexistent element."
        */
        return () => {

            clearTimeout( timeoutId );

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
                ref={ div1Ref }
            >

                <h2 className="hero-h2">
                    Ready to Transform Your <span style={ { color : 'var( --green-23-9 )' } }>Backyard?</span>
                </h2>

                <p>
                    Get a free, no-pressure deck design or inspection from Utah Decks & Pergolas.
                </p>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 3 ( get started button )
                        // ==============================
                    */
                }
                <div>

                    <a href="/get-started#calendar-section">
                        <FaRegCalendarCheck style={ { verticalAlign: '-3.0px', fontSize: '2.25rem', margin: '0 1.0rem 0 0' } } />
                        Get Started
                    </a>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 4 ( phone number )
                        // ==============================
                    */
                }
                <div>
                    <p>or call us directly at</p>
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

            {
                /*
                    // ==============================
                    // container > div 3 ( animating backgrounds )
                    // ==============================
                */
            }
            {
                /*
                    <AnimatingGradientBackground />
                */
            }
            <div>

                <AnimatingGradientBackground />

            </div>

        </div>

    );

} // end of ReadyToTransformComponent

