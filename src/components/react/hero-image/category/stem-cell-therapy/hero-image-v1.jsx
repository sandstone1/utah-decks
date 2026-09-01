



// import in the Fragment, useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the gsap, ScrollTrigger, SplitText and CustomEase
import { 
    gsap,
    ScrollTrigger,
    SplitText,
    CustomEase
} from '../../../../../lib/gsap';
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
import styles from './hero-image-v1.module.scss';





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

    // ==============================
    // useRef();
    // ==============================

    const div1Ref = useRef();

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
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
            // code block 2
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
            // code block 3
            // ==============================

            if (
                isMobile &&
                div1Ref.current
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
                '-=1.60' ) // start 1.30s before the h2 animation ends and remember, use this
                // number as our delay

            } // end of if ()

            // ==============================
            // code block 4
            // ==============================

            else if ( 
                is1376 &&
                div1Ref.current
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
                '-=1.40' ) // start 2.20s before the h2 animation ends and remember, use this
                // number as our delay

            } // end of else if()

            // ==============================
            // code block 5
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

            } // end of if else

        } ); document.fonts.ready.then()

        // ==============================
        // end of GSAP code
        // ==============================

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
            <div className={ `${ styles.heroImageContainer } hero-image-container` }>

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
                        <h1 className="first-hero-h1">Advanced stem cell therapy in Draper, Utah</h1>

                        <h5 className="first-hero-h5">
                            We use advanced <span style={ { color : 'var( --gold-42 )' } }>regenerative</span>{' '}
                            cell therapy to help heal orthopedic injuries
                            and joint damage <span style={ { color : 'var( --gold-42 )' } }>naturally,</span>{' '}
                            without surgery
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
                            Free Consultation
                        </a>
                    </div>

                    <div>
                        <a
                            href="tel:801-555-1212"
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
                            <MdOutlinePhoneAndroid style={ { verticalAlign: '-6.5px', fontSize: '2.50rem', margin: '0 1.0rem 0 0' } } />&#40;801&#41; 555&#45;1212
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
                            Board Certified
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

