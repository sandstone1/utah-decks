



// import in the Fragment, useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the gsap, ScrollTrigger, SplitText and CustomEase
import { 
    gsap,
    ScrollTrigger,
    SplitText,
    CustomEase
} from '../../../lib/gsap';
// import in our stylesheet
import styles from './hero-no-calc-no-load-4.module.scss';





export default function HeroVideoComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ currentVideoIndex, setCurrentVideoIndex ] = useState( 0 );

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

    const videos = [
        // { video : '/videos/adobe_preview_189.mov',        type : 'video/mp4', alt : 'A woman on a swing' },
        // { video : '/videos/adobe_preview_192.mov',        type : 'video/mp4', alt : 'A woman on a swing' },
        // { video : '/videos/adobe_preview_195.mov',        type : 'video/mp4', alt : 'A beautiful view of the Mediterranean' },
        // { video : '/videos/adobe_preview_197.mov',        type : 'video/mp4', alt : 'A grassy meadow' },
        // { video : '/videos/adobe_preview_202.mov',        type : 'video/mp4', alt : 'A backyard house' },
        // { video : '/videos/adobe_preview_207.mov',        type : 'video/mp4', alt : 'A picture of snowy mountains' },
        //{ video : '/videos/adobe_preview_211_37.mp4',        type : 'video/mp4', alt : 'A picture of a street in Greece' },
        // { video : '/videos/adobe_preview_220_37.mp4',        type : 'video/mp4', alt : 'A picture of a street in the old town of Bruges, Belgium' },
        // { video : '/videos/adobe_preview_222.mov',        type : 'video/mp4', alt : 'A picture of a street in Greece' },
        // { video : '/videos/adobe_preview_226.mov',        type : 'video/mp4', alt : 'A picture of a street in Greece' },
        // { video : '/videos/adobe_preview_233_37.mp4',        type : 'video/mp4', alt : 'A picture of a street in Greece' },
        //{ video : '/videos/adobe_preview_237.mov',        type : 'video/mp4', alt : 'A picture of a car on street in Cuba' },
        //{ video : '/videos/adobe_preview_238.mov',        type : 'video/mp4', alt : 'A picture of a calm all American city' },
        // { video : '/videos/adobe_preview_249_37.mp4',        type : 'video/mp4', alt : 'A picture of a street in Greece' },
        //{ video : '/videos/adobe_preview_259_37.mp4',        type : 'video/mp4', alt : 'A picture of a of St Paul\'s Cathedral' },
        //{ video : '/videos/adobe_preview_266_37.mp4',        type : 'video/mp4', alt : 'A picture of a bright flower tree' },
        // { video : '/videos/adobe_preview_269.mov',        type : 'video/mp4', alt : 'A peaceful Monterrey backyard' },
        // { video : '/videos/adobe_preview_278_37.mp4',        type : 'video/mp4', alt : 'A picture of a moonlit night' },
        //{ video : '/videos/adobe_preview_280.mov',        type : 'video/mp4', alt : 'A picture of palm trees at sunset' },
        //{ video : '/videos/adobe_preview_282_42.mp4',        type : 'video/mp4', alt : 'A picture of a blue bird' },
        //{ video : '/videos/adobe_preview_283_37.mp4',        type : 'video/mp4', alt : 'A picture of Arches National Park' },
        // { video : '/videos/adobe_preview_288.mov',        type : 'video/mp4', alt : 'A picture of a home with a fireplace' },
        //{ video : '/videos/adobe_preview_293_32_08.mp4',        type : 'video/mp4', alt : 'A colorful swirling background' },
        //{ video : '/videos/adobe_preview_297.mov',        type : 'video/mp4', alt : 'A picture of a talking horse' },
        //{ video : '/videos/adobe_preview_309_32.mp4',        type : 'video/mp4', alt : 'A picture of flowers moving' },
        //{ video : '/videos/adobe_preview_319_32.mp4',        type : 'video/mp4', alt : 'A picture of moving blue purple background' },
        { video : '/videos/moving_waves_blue_purple_32.mp4',        type : 'video/mp4', alt : 'A picture of moving blue purple background' },
        // { video : '/videos/adobe_preview_323_32.mp4',        type : 'video/mp4', alt : 'A picture of moving blue curvy background' },
        //{ video : '/videos/adobe_preview_348_32.mp4',        type : 'video/mp4', alt : 'A picture of a grass field at night' },
        //{ video : '/videos/adobe_preview_349_27.mp4',        type : 'video/mp4', alt : 'A picture of a glowing orb' },
        //{ video : '/videos/adobe_preview_328_32.mp4',        type : 'video/mp4', alt : 'A picture of geometric moving boxes' },
        //{ video : '/videos/adobe_preview_353_27.mp4',        type : 'video/mp4', alt : 'A picture of a glowing orb' },
        //{ video : '/videos/adobe_preview_355_32.mp4',        type : 'video/mp4', alt : 'A picture of a rotating cube' },
        //{ video : '/videos/adobe_preview_366_27.mp4',        type : 'video/mp4', alt : 'A picture of a moving blue purple black background' },
        //{ video : '/videos/adobe_preview_368.mov',        type : 'video/mp4', alt : 'A picture of a moving blue purple black background' },
        //{ video : '/videos/moving_circles_32.mp4',        type : 'video/mp4', alt : 'A picture of a moving blue circles background' },
        //{ video : '/videos/adobe_preview_374_32.mp4',        type : 'video/mp4', alt : 'A picture of a blue orange rotating tunnel' },
        //{ video : '/videos/adobe_preview_374.mov',        type : 'video/mp4', alt : 'A picture of a moving blue purple black background' },
        //{ video: '/videos/cozy_room_32.mp4',                 type : 'video/mp4', alt : 'A cozy room' },
        //{ video : '/videos/snowy_castle_37.mp4',    type : 'video/mp4', alt : 'Snowy castle' },
        //{ video : '/videos/enchanted_swamp_37.mp4', type : 'video/mp4', alt : 'Enchanted swamp' }
    ];

    let interval;

    // ==============================
    // useRef();
    // ==============================

    const div2Ref = useRef();
    const div3Ref = useRef();
    const div4Ref = useRef();

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
        // slide out the content for div 3 and animate in the content for div 4
        // ==============================

        // ==============================
        // remember, in the web animations api we can use or change the visibility,
        // opacity and the transform properties but we can't animate or change the display
        // property
        // ==============================

        // ==============================
        // remember, the only property we needed to change for div4 was the display property
        // so we removed div4 from the web animations api and instead we used a one line
        // piece of code to set the display values for each div
        // ==============================

        // ==============================
        // setTimeout 1
        // ==============================

        setTimeout( () => {

            if ( div3Ref.current ) {

                div3Ref.current.animate(
    
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
    
                ); // end of div3Ref.current.animate()

            } // end of if

            // animate in the abstract image
            if ( div2Ref.current ) {

                div2Ref.current.style.transition = 'opacity 600ms ease-out 0ms';
                div2Ref.current.style.opacity    = '1';

            } // end of if

        }, 9000 ); // end of setTimeout 1

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // setTimeout 2
        // ==============================

        setTimeout( () => {

            if ( div3Ref.current && div4Ref.current ) {

                // remove div3 after 400ms or after the div3 has slide off the screen
                div3Ref.current.style.display = 'none';

                // show div4 after 400ms and this will start the animation process ( see the
                // css file for details on the animation )
                div4Ref.current.style.display = 'grid';

                // give Safari 16 milliseconds to parse the 'grid' display state before it
                // attempts to paint the text layout and hopefully this solves my text problem
                // of not showing up every so often for div4

                /*
                    The requestAnimationFrame forces a tiny micro-delay ( about 16 milliseconds ).
                    This gives the iPad's hardware decoder enough breathing room to process the
                    second video before it tries to paint the text.
                    
                    Applying translateZ( 0 ) inside that frame kick permanently locks the text
                    into the visual layer so Safari cannot drop it.
                */ 
                requestAnimationFrame( () => {

                    if ( div4Ref.current ) {

                        div4Ref.current.style.transform = 'translateZ( 0 )';

                    } // end of if ( div4Ref.current )

                } ); // end of requestAnimationFrame()

            } // end of if

        }, 9400 ); // end of setTimeout 2

        // ==============================
        // code block 3
        // ==============================

        // make sure we remove the interval when we unmount the component
        return () => {

            clearInterval( interval );

        }; // end of return

    }, [ videos.length ] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // purpose : use gsap to animate in the hero video text
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
            div3Ref.current.style.opacity = 1;

            // ==============================
            // determine of the user is on mobile or iPad
            // ==============================

            // get isMobile
            const isMobile = window.innerWidth <= 620;
            // get is1376
            const is1376   = window.innerWidth <= 1376;

            // ==============================
            // code block 3
            // ==============================

            if (
                isMobile &&
                div3Ref.current &&
                div4Ref.current
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

                gsap.timeline( { delay : 1.25 } ) // 1.20 gives the mobile device time to settle before displaying the animation
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

                setTimeout( () => {

                    // had to set the opacity to 1 in order for the second video h2 and h5 elements
                    // to show on the page after running the animation below
                    div4Ref.current.style.opacity = 1;

                    // remember, we had to use SplitText inside SetTimeout in order for the animation
                    // to work since div4 has an opacity of 0 initially ( see in the scss file ) and
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
                    gsap.set( secondHeroH2Text.words, { opacity : 0, x : -140 } );
                    gsap.set( secondHeroH5Text.words, { opacity : 0, x : -140 } );

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

                }, 9400 ); // 9400ms is the same timing as when div4 becomes visible

            }

            // ==============================
            // code block 4
            // ==============================

            else if ( 
                is1376 &&
                div3Ref.current &&
                div4Ref.current
            ) {

                // ==============================
                // SplitText ( animate in either lines, words or chars )
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

                gsap.timeline( { delay : 1.20 } ) // 1.20 gives the mobile device time to settle before displaying the animation
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

                setTimeout( () => {

                    // had to set the opacity to 1 in order for the second video h2 and h5 elements
                    // to show on the page after running the animation below
                    div4Ref.current.style.opacity = 1;

                    // remember, we had to use SplitText inside SetTimeout in order for the animation
                    // to work since div4 has an opacity of 0 initially ( see in the scss file ) and
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
                                delay    : 0.00,
                                stagger  : 0.05,
                                x        : 0,                       // end state
                                ease     : 'elastic.out( 1.4, 0.70 )'
                            },
                        '-=1.40' ); // start 2.20s before the h2 animation ends and remember, use this
                        // number as our delay

                }, 9400 ); // 9400ms is the same timing as when div4 becomes visible

            } // end of else if()

            // ==============================
            // code block 5
            // ==============================

            else {
            
                // ==============================
                // SplitText ( animate in either lines, words or chars )
                // ==============================

                // get the first hero h1
                const firstHeroH1Text = SplitText.create( '.first-hero-h1', { 
                    type      : 'lines, words, chars',
                    smartWrap : true
                } );
                // get the first hero h5
                const firstHeroH5Text = SplitText.create( '.first-hero-h5', { 
                    type      : 'words, chars',
                    smartWrap : true
                } );
                // get the second hero h2
                const secondHeroH2Text = SplitText.create( '.second-hero-h2', { 
                    type      : 'words, chars',
                    smartWrap : true
                } );
                // get the second hero h5
                const secondHeroH5Text = SplitText.create( '.second-hero-h5', { 
                    type      : 'words, chars',
                    smartWrap : true
                } );

                // ==============================
                // first hero h2 and h5
                // ==============================

                // ==============================
                // animate in the text for the first hero image on page load
                // ==============================

                gsap.timeline( { delay : 0.90 } )
                    .from( firstHeroH1Text.words,
                        {
                            opacity  : 0,
                            duration : 1.8,
                            delay    : 0.0,
                            stagger  : 0.05,
                            x        : -200,
                            ease     : 'elastic.out( 1.2, 0.75 )'
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
                // code block 8
                // ==============================

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
                // div4Ref.current.style.opacity = 0;

                // ==============================
                // animate in the text for the second hero image ( remember we had to wait 9401 ms
                // in order to trigger this animation )
                // ==============================

                setTimeout( () => {

                    // had to set the opacity to 1 in order for the second video h2 and h5 elements
                    // to show on the page after running the animation below
                    div4Ref.current.style.opacity = 1;

                    // instantly hide words before animating

                    // remember, we had to declare gsap.set() within the setTimeout in order to get
                    // all the words in the h2 and h5 elements to separate
                    gsap.set( secondHeroH2Text.words, { opacity : 0, x : -200 } );
                    gsap.set( secondHeroH5Text.words, { opacity : 0, x : -200 } );

                    // animate the second hero h2 and h5 elements after 9400 ms
                    gsap.timeline( { delay : 0.250 } )
                        .to( secondHeroH2Text.words,
                            {
                                opacity  : 1,                       // end state
                                duration : 1.8,
                                delay    : 0.0,
                                stagger  : 0.05,
                                x        : 0,                       // end state
                                ease     : 'elastic.out( 1.2, 0.75 )'
                            } 
                        )
                        .to( secondHeroH5Text.words,
                            
                            {
                                opacity  : 1,                       // end state
                                duration : 1.8,
                                delay    : 0.0,
                                stagger  : 0.035,
                                x        : 0,                       // end state
                                ease     : 'elastic.out( 1.2, 0.75 )'
                            },
                        '-=1.30' ); // start 1.30s before the h2 animation ends

                }, 9400 ); // 9400ms is the same timing as when div4 becomes visible

            } // end of if else

        } ); document.fonts.ready.then()

        // ==============================
        // end of GSAP code
        // ==============================

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
                    // container 1 > div 1
                    // ==============================
                */
            }
            {
                /*
                    // ==============================
                    // Why you need both:

                    // styles.heroVideoContainer — keeps all your existing detailed SCSS styles
                    // working
                    //
                    // hero-video-container — gives the inline CSS something to target that isn't
                    // hashed and we can put this in main-layout.js as an inline style

                    // think of it like giving the element two names — one private ( hashed, scoped
                    // to the module ) and one public ( global, targetable by inline styles )
                    // ==============================
                    <div className={ styles.heroVideoContainer }>
                */
            }
            <div className={ `${styles.heroVideoContainer} hero-video-container` }>

                {
                    /*
                        // ==============================
                        // container 1 > div 1
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // how does video affect page load times
                            // ==============================

                            // ==============================
                            // from stackoverflow : " The source src= will load asynchronously,
                            // so has no ( direct ) impact on the rest of your page loading time,
                            // so will have no effect if you load it later. "
                            // source : " https://stackoverflow.com/questions/72854630/load-video-url-after-page-loads-completely "
                            // ==============================
                        */
                    }
                    {

                        videos.map( ( video, index ) => ( 

                            <video
                                // controls
                                // autoPlay // in Astro, this was causing my video to play for a split second and then disappear for a split second and then reappear a split second later
                                muted
                                loop
                                playsInline // video will not work on the iPhone without this control
                                // poster={ "/images/lama_bg_01.webp" } // this is not working, getting a white screen and then a quick flash before the video
                                preload='none' // if preload is not set, the default setting is metadata and preload=metadata tells the browser to download a
                                // percentage of the video ( typically 2-5% of the file ) to get metadata
                                key={ index }
                                className={ index === currentVideoIndex ? styles.active : '' }
                            >
                                <source
                                    key={ index }
                                    src={ video.video }
                                    type={ video.type }
                                    alt={ video.alt }
                                />

                                Sorry, your browser does not support embedded videos

                            </video>

                        ) )

                    }

                </div>

                {
                    /*
                        // ==============================
                        // container 1 > div 2 ( this div holds our background image )
                        // ==============================
                    */
                }
                <div
                    ref={ div2Ref }
                >
                </div>

                {
                    /*
                        // ==============================
                        // container 1 > div 3
                        // ==============================

                    */
                }
                <div
                    ref={ div3Ref }
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
                    <h1 className="first-hero-h1">We are a results-driven digital marketing agency in Utah</h1>

                    <h5 className="first-hero-h5">
                        We specialize in <span style={ { color : 'var( --green-23-5 )' } }>local SEO</span>,{' '}
                        amazing <span style={ { color : 'var( --green-23-5 )' } }>websites</span>, and{' '}
                        <span style={ { color : 'var( --green-23-5 )' } }>AI agents</span>{' '}
                        built for growing companies
                    </h5>

                </div>

                {
                    /*
                        // ==============================
                        // container 1 > div 4
                        // ==============================
                    */
                }
                <div
                    ref={ div4Ref }
                >

                        <h2 className="second-hero-h2">
                            Need a strategic partner, not just an agency?
                        </h2>

                        <h5 className="second-hero-h5">
                            We combine digital marketing, AI agents, and 18 years of CEO and 
                            operations experience to help your business{' '}
                            <span style={ { color : 'var( --green-23-5 )' } }>grow faster</span> and{' '}
                            <span style={ { color : 'var( --green-23-5 )' } }>run smarter</span>
                        </h5>

                </div>

            </div>

        </Fragment>

    );

} // end of HeroVideoComponent

