



// import in the Fragment, useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the gsap, ScrollTrigger, SplitText and CustomEase
import { 
    gsap,
    // ScrollTrigger,
    SplitText,
    // CustomEase
} from '../../../../lib/gsap';
// import in the Bootstrap people icon
import { BsFillPeopleFill } from "react-icons/bs";
// import in the Font Awesome phone icon
import { FaPhone } from "react-icons/fa6";
// import in the Material Design phone icon
import { MdOutlinePhoneAndroid } from "react-icons/md";
// import in the Bootstrap shield icon
import { BsShieldCheck } from "react-icons/bs";
// import in the Font Awesome star icon
import { FaRegStar } from "react-icons/fa";
// import in the Font Awesome calendar check icon
import { FaRegCalendarCheck } from "react-icons/fa6";
// import in our stylesheet
import styles from './hero-image-v5.module.scss';





export default function HeroImageComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // ==============================
    // important!
    // ==============================

    // remember, setting the desktop conditional inside the return () statement below caused
    // a delay in loading the video across all screen sizes; however, we got the right first
    // video after the delay

    // remember, if we don't set the desktop conditional inside the return () statement below
    // then the browser will save in cache ( I believe ) that first video from the desktop code
    // or non conditional code so that whenever a new page is loaded that page will instantly
    // load the first video from the desktop code, resulting in a better user experience
    // const [ desktop, setDesktop ] = useState( false );

    // ==============================
    // zustand state
    // ==============================

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    let interval;

    // ==============================
    // useRef();
    // ==============================

    const div1Ref = useRef();
    const div2Ref = useRef();

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
    // purpose : set an interval so we can loop through the videos
    // ==============================

    // ==============================
    // remember, to have the video loop start over again, we need :
    // " prevIndex < videos.length - 1 ? prevIndex + 1 : 0 " and the 0 will start the interval
    // over again
    // ==============================

    // ==============================
    // remember, to have the video loop end on the last video, we need :
    // " prevIndex < videos.length - 1 ? prevIndex + 1 : videos.length - 1 " and this will
    // make the loop end on the last video
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // slide out the content for div 2 and animate in the content for div 3
        // ==============================

        // ==============================
        // remember, in the web animations api we can use or change the visibility,
        // opacity and the transform properties but we can't animate or change the display
        // property
        // ==============================

        // ==============================
        // remember, the only property we needed to change for div3 was the display property
        // so we removed div3 from the web animations api and instead we used a one line
        // piece of code to set the display values for each div
        // ==============================

        // ==============================
        // setTimeout 1
        // ==============================

        setTimeout( () => {

            if ( div1Ref.current ) {

                // div 1
                div1Ref.current.animate(
    
                    [
    
                        {
                            opacity    : 1,
                            transform  : "translateX( 0 )"
                        }, 
                        {
                            opacity    : 0,
                            transform  : "translateX( -60vw )" // this moves the content to the left by
                            // 60vw, thereby moving the content off the screen
                        }

                    ],
                    {
    
                        duration   : 400,
                        easing     : "ease-out",
                        delay      : 0,
                        iterations : 1, // this is the default but leave here for reference purposes
                        fill       : "forwards" // this lets the " element retain the style values
                        // from the last keyframe when the animation ends "
    
                    }
    
                ); // end of div1Ref.current.animate()

            } // end of if

        }, 9000 ); // end of setTimeout 1

        // ==============================
        // setTimeout 2
        // ==============================

        setTimeout( () => {

            if ( div1Ref.current && div2Ref.current ) {

                // remove div1 after 400ms or after the div2 has slide off the screen
                div1Ref.current.style.display = 'none';

                // show div2 after 400ms and this will start the animation process ( see the
                // css file for details on the animation )
                div2Ref.current.style.display = 'grid';

                // give Safari 16 milliseconds to parse the 'grid' display state before it
                // attempts to paint the text layout and hopefully this solves my text problem
                // of not showing up every so often for div3

                /*
                    The requestAnimationFrame forces a tiny micro-delay ( about 16 milliseconds ).
                    This gives the iPad's hardware decoder enough breathing room to process the
                    second video before it tries to paint the text.
                    
                    Applying translateZ( 0 ) inside that frame kick permanently locks the text
                    into the visual layer so Safari cannot drop it.
                */ 
                requestAnimationFrame( () => {

                    if ( div2Ref.current ) {

                        div2Ref.current.style.transform = 'translateZ( 0 )';

                    } // end of if ( div2Ref.current )

                } ); // end of requestAnimationFrame()

            } // end of if

        }, 9400 ); // end of setTimeout 2

        // ==============================
        // code block 5
        // ==============================

        // make sure we remove the interval when we unmount the component
        return () => {

            clearInterval( interval );

        }; // end of return

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
                div1Ref.current &&
                div2Ref.current
            ) {

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.first-hero-h1', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the first hero h5
                const firstHeroH5Text = SplitText.create( '.first-hero-h5', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );

                gsap.timeline( { delay : 0.70 } ) // 0.70 gives the mobile device time to settle before displaying the animation
                    .from( firstHeroH1Text.words, 
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        stagger  : 0.05,
                        x        : -140,
                        ease     : 'elastic.out( 1.2, 0.75 )'          
                    } 
                ),

                gsap.from( firstHeroH5Text.words,
                    { 
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        stagger  : 0.015,
                        x        : -140,
                        ease     : 'elastic.out( 1.2, 0.75 )'
                    },
                '-=1.60' ), // start 1.30s before the h2 animation ends and remember, use this
                // number as our delay

                timeoutId = setTimeout( () => {

                    // had to set the opacity to 1 in order for the second video h2 and h5 elements
                    // to show on the page after running the animation below
                    div2Ref.current.style.opacity = 1;

                    // remember, we had to use SplitText inside SetTimeout in order for the animation
                    // to work since div3 has an opacity of 0 initially ( see in the scss file ) and
                    // therefore the animation would not work when placing these 2 statements above and
                    // outside of setTimeout
                    const secondHeroH2Text = SplitText.create('.second-hero-h2', {
                        type      : 'lines, words, chars',
                        smartWrap : true
                    });
                    const secondHeroH5Text = SplitText.create('.second-hero-h5', {
                        type      : 'lines, words, chars',
                        smartWrap : true
                    });

                    // instantly hide words before animating

                    // remember, we had to declare gsap.set() within the setTimeout in order to get
                    // all the words in the h2 and h5 elements to separate
                    gsap.set( secondHeroH2Text.words, { opacity: 0, x : -140 } );
                    gsap.set( secondHeroH5Text.words, { opacity: 0, x : -140 } );

                    // animate the second hero h2 and h5 elements after 9400 ms
                    gsap.timeline( { delay : 0.150 } )
                        .to( secondHeroH2Text.words,
                            {
                                opacity  : 1,                       // end state
                                duration : 1.8,
                                delay    : 0.0,
                                stagger  : 0.03,
                                x        : 0,                       // end state
                                ease     : 'elastic.out( 1.2, 0.75 )'
                            }
                        )
                        .to( secondHeroH5Text.words,
                            {
                                opacity  : 1,                       // end state
                                duration : 1.8,
                                delay    : 0.00,
                                stagger  : 0.015,
                                x        : 0,                       // end state
                                ease     : 'elastic.out( 1.2, 0.75 )'
                            },
                        '-=1.60' ); // start 1.65s before the h2 animation ends and remember, use this
                        // number as our delay

                }, 9400 ); // 9400ms is the same timing as when div3 becomes visible

            } // end of if ()

            // ==============================
            // code block 5
            // ==============================

            else if ( 
                is1376 &&
                div1Ref.current &&
                div2Ref.current
            ) {

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.first-hero-h1', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the first hero h5
                const firstHeroH5Text = SplitText.create( '.first-hero-h5', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );

                gsap.timeline( { delay : 0.70 } ) // 0.70 gives the mobile device time to settle before displaying the animation
                    .from( firstHeroH1Text.words, 
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        stagger  : 0.05,
                        x        : -125,
                        ease     : 'elastic.out( 1.4, 0.70 )'
                    } 
                ),
                gsap.from( firstHeroH5Text.words,
                    {
                        opacity  : 0,
                        duration : 1.8,
                        delay    : 0.0,
                        stagger  : 0.05,
                        x        : -125,
                        ease     : 'elastic.out( 1.4, 0.70 )'
                    },
                '-=1.40' ), // start 2.20s before the h2 animation ends and remember, use this
                // number as our delay

                timeoutId = setTimeout( () => {

                    // had to set the opacity to 1 in order for the second video h2 and h5 elements
                    // to show on the page after running the animation below
                    div2Ref.current.style.opacity = 1;

                    // remember, we had to use SplitText inside SetTimeout in order for the animation
                    // to work since div3 has an opacity of 0 initially ( see in the scss file ) and
                    // therefore the animation would not work when placing these 2 statements above and
                    // outside of setTimeout
                    const secondHeroH2Text = SplitText.create('.second-hero-h2', {
                        type      : 'lines, words, chars',
                        smartWrap : true
                    });
                    const secondHeroH5Text = SplitText.create('.second-hero-h5', {
                        type      : 'lines, words, chars',
                        smartWrap : true
                    });

                    // instantly hide words before animating

                    // remember, we had to declare gsap.set() within the setTimeout in order to get
                    // all the words in the h2 and h5 elements to separate
                    gsap.set( secondHeroH2Text.words, { opacity: 0, x : -125 } );
                    gsap.set( secondHeroH5Text.words, { opacity: 0, x : -125 } );

                    // animate the second hero h2 and h5 elements after 9400 ms
                    gsap.timeline( { delay : 0.250 } )
                        .to( secondHeroH2Text.words,
                            {
                                opacity  : 1,                       // end state
                                duration : 1.8,
                                delay    : 0.0,
                                stagger  : 0.05,
                                x        : 0,                       // end state
                                ease     : 'elastic.out( 1.4, 0.70 )'
                            }
                        )
                        .to( secondHeroH5Text.words,
                            {
                                opacity  : 1,                       // end state
                                duration : 1.8,
                                delay    : 0.0,
                                stagger  : 0.05,
                                x        : 0,                       // end state
                                ease     : 'elastic.out( 1.4, 0.70 )'
                            },
                        '-=1.40' ); // start 2.20s before the h2 animation ends and remember, use this
                        // number as our delay

                }, 9400 ); // 9400ms is the same timing as when div3 becomes visible

            } // end of else if()

            // ==============================
            // code block 6
            // ==============================

            else {

                // ==============================
                // SplitText ( animate in either words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.first-hero-h1', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the first hero h5
                const firstHeroH5Text = SplitText.create( '.first-hero-h5', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the second hero h2
                const secondHeroH2Text = SplitText.create( '.second-hero-h2', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the second hero h5
                const secondHeroH5Text = SplitText.create( '.second-hero-h5', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );

                // 3. SEAMLESS HANDOFF: Remove the global hiding rule and switch to visibility: visible
                // Since opacity is now controlled by GSAP (.set to 0), the text remains hidden perfectly
                document.body.classList.remove( 'js-loading' );
                gsap.set( [ '.first-hero-h1', '.first-hero-h5' ], { visibility: 'visible' } );

                // ==============================
                // first hero h2 and h5
                // ==============================

                // ==============================
                // animate in the text for the first hero image on page load
                // ==============================

                gsap.timeline( { delay : 0.50 } )
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
                    .from( firstHeroH5Text.words,
                        {
                            opacity  : 0,
                            duration : 1.8,
                            delay    : 0.0,
                            stagger  : 0.035,
                            x        : -200,
                            ease     : 'elastic.out( 1.2, 0.75 )'
                        },
                    '-=1.30' ); // start 1.30s before h1 animation ends

                // ==============================
                // second hero h2 and h5
                // ==============================

                // ==============================
                // hide the second video h2 and h5 elements ( had to do it this way due to
                // setTimeout below )
                // ==============================

                // needed to ensure the second video hero text has an opacity of 0 on page load
                // and had to set here or in the css file for this to work

                // remember, could not set opacity to 0 on the second video h2 or h5 elements because
                // then both hero titles would never appear or show
                // div2Ref.current.style.opacity = 0;

                // ==============================
                // animate in the text for the second hero image ( remember we had to wait 9401 ms
                // in order to trigger this animation )
                // ==============================

                timeoutId = setTimeout( () => {

                    // had to set the opacity to 1 in order for the second video h2 and h5 elements
                    // to show on the page after running the animation below
                    div2Ref.current.style.opacity = 1;

                    // instantly hide words before animating

                    // remember, we had to declare gsap.set() within the setTimeout in order to get
                    // all the words in the h2 and h5 elements to separate
                    gsap.set( secondHeroH2Text.words, { opacity: 0, x : -200 } );
                    gsap.set( secondHeroH5Text.words, { opacity: 0, x : -200 } );

                    // animate the second hero h2 and h5 elements after 9400 ms
                    gsap.timeline( { delay : 0.400 } )
                        .to( secondHeroH2Text.words,
                            {
                                opacity  : 1,
                                duration : 1.8,
                                delay    : 0.0,
                                stagger  : 0.05,
                                x        : 0,
                                ease     : 'elastic.out( 1.2, 0.75 )'
                            } 
                        )
                        .to( secondHeroH5Text.words,
                            
                            {
                                opacity  : 1,
                                duration : 1.8,
                                delay    : 0.0,
                                stagger  : 0.035,
                                x        : 0,
                                ease     : 'elastic.out( 1.2, 0.75 )'
                            },
                        '-=1.30' ); // start 1.30s before the h2 animation ends

                }, 9400 ); // 9400ms is the same timing as when div3 becomes visible

            } // end of if else

        } ); document.fonts.ready.then()

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

        }; // end of return

    }, [] ); // end of useEffect 2

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
            {
                /*
                    // ==============================
                    // Why you need both:

                    // styles.heroImageContainer — keeps all your existing detailed SCSS styles
                    // working
                    //
                    // hero-image-container — gives the inline CSS something to target that isn't
                    // hashed and put this in main-layout.js as an inline style

                    // Think of it like giving the element two names — one private ( hashed, scoped
                    // to the module ) and one public ( global, targetable by inline styles )
                    // ==============================
                    <div className={ styles.heroImageContainer }>
                */
            }
            <div className={ `${styles.heroImageContainer} hero-image-container` }>

                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 1
                            // ==============================

                        */
                    }
                    <div
                        ref={ div1Ref }
                    >

                        {
                            /*
                                // ==============================
                                // remember, className="first-hero-h1" works in gsap because
                                // className="first-hero-h1" adds a plain global CSS class to the
                                // element — not a CSS module class.

                                // The difference:
                                // CSS module class - gets hashed
                                // className={ styles.firstHeroH1 }
                                // renders as: class="_firstHeroH1_1jd6t_67"

                                // plain global class - stays as is
                                // className="first-hero-h1"
                                // renders as: class="first-hero-h1"
                                // ==============================
                            */
                        }
                        <h1 className="first-hero-h1">Deck Builder in Draper, Utah</h1>

                        <h5 className="first-hero-h5">
                            Custom decks, built right. <span style={ { color : 'var( --gold-42 )' } }>7+ years</span>{ ' ' }
                            serving Salt Lake City, Utah and Davis counties.
                        </h5>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2
                            // ==============================

                        */
                    }
                    <div
                        ref={ div2Ref }
                    >

                        <h2 className="second-hero-h2">
                            Built to last, designed to impress
                        </h2>

                        <h5 className="second-hero-h5">
                            We bring your
                            backyard vision to life — <span style={{ color: 'var(--gold-42)' }}>licensed, insured,</span>{' '}
                            and backed by manufacturer warranties up to 50 years.
                        </h5>

                    </div>
                
                </div>

                {
                    /*
                        // ==============================
                        // container > div 2
                        // ==============================

                    */
                }
                <div>

                    <div>
                        <a href="#">
                            <FaRegCalendarCheck style={ { verticalAlign: '-3.0px', fontSize: '2.25rem', margin: '0 1.0rem 0 0' } } />
                            Free Estimate Coming Soon
                        </a>
                    </div>

                    <div>
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
                            <MdOutlinePhoneAndroid style={ { verticalAlign: '-6.5px', fontSize: '2.50rem', margin: '0 1.0rem 0 0' } } />&#40;385&#41; 425&#45;2299
                        </a>
                    </div>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 3
                        // ==============================

                    */
                }
                <div>

                    <div>
                        <span>
                            <FaRegStar style={ { verticalAlign: '-6.0px', fontSize: '2.4rem', margin: '0 1.0rem 0 0' } } />
                            5.0 Google Rating
                        </span>
                    </div>

                    <div>
                        <span>
                            <BsShieldCheck style={ { verticalAlign: '-5.5px', fontSize: '2.2rem', margin: '0 1.0rem 0 0' } } />
                            Licensed & Insured
                        </span>
                    </div>

                    <div>
                        <span>
                            <BsFillPeopleFill style={ { verticalAlign: '-6.0px', fontSize: '2.4rem', margin: '0 1.0rem 0 0' } } />
                            Locally Owned
                        </span>
                    </div>

                </div>

            </div>

        </Fragment>

    );

} // end of HeroImageComponent

