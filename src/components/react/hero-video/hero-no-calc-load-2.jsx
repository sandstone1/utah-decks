



// import in the Fragment, useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the Spinner component
import SpinnerComponent from '../spinner/spinner-bounce-light';
// import in our stylesheet
import styles from './hero-no-calc-load-2.module.scss';



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
    const [ loading, setLoading ]                     = useState( false );
    
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
        //{ video : '/videos/adobe_preview_195.mov',        type : 'video/mp4', alt : 'A beautiful view of the Mediterranean' },
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
        // { video : '/videos/adobe_preview_293.mov',        type : 'video/mp4', alt : 'A swirling colorful background' },
        { video : '/videos/adobe_preview_293_32_08.mp4',        type : 'video/mp4', alt : 'A colorful swirling background' },
        { video : '/videos/adobe_preview_297.mov',        type : 'video/mp4', alt : 'A picture of a talking horse' },
        //{ video: '/videos/cozy_room_32.mp4',                 type : 'video/mp4', alt : 'A cozy room' },
        //{ video : '/videos/snowy_castle_37.mp4',    type : 'video/mp4', alt : 'Snowy castle' },
        //{ video : '/videos/enchanted_swamp_37.mp4', type : 'video/mp4', alt : 'Enchanted swamp' }
    ];

    let interval;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const div2Ref = useRef();
    const div3Ref = useRef();

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
        // use setTimeout to delay loading by 2 seconds so as to give time for the video
        // to load and show the spinner component during this 2 second period
        // ==============================

        // ==============================
        // remember, this approach works pretty well but I'm concerned that the 8.1 mb video
        // file is too large for some devices and may cause these devices to crash
        // ==============================

        if ( videos.length === 2 ) {

            // set loading to false
            setLoading( false );

            setTimeout( () => {

                if ( videos.length === 2 ) {

                    interval = setInterval( () => {

                        setCurrentVideoIndex( ( prevIndex ) =>

                            prevIndex < videos.length - 1 ? prevIndex + 1 : videos.length - 1

                        );

                    }, 8000 );

                } // end of if

                // set loading to true
                setLoading( true );

            }, 2000 ); // end of setTimeout

        } // end of if

        // ==============================
        // code block 2
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

            if ( div2Ref.current ) {

                // div 2
                div2Ref.current.animate(
    
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
    
                ); // end of div2Ref.current.animate()

            } // end of if

        }, 10000 ); // end of setTimeout 1

        // ==============================
        // setTimeout 2
        // ==============================

        setTimeout( () => {

            if ( div2Ref.current && div3Ref.current ) {

                // remove div2 after 400ms or after the div2 has slide off the screen
                div2Ref.current.style.display = 'none';

                // show div3 after 400ms and this will start the animation process ( see the
                // css file for details on the animation )
                div3Ref.current.style.display = 'grid';

            } // end of if

        }, 10400 ); // end of setTimeout 1

        // ==============================
        // code block 4
        // ==============================

        // make sure we remove the interval when we unmount the component
        return () => {

            clearInterval( interval );

        };

    }, [ videos.length ] ); // end of useEffect 1

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

                loading === false ? (

                    <div
                        className={ styles.spinnerContainer }
                    >

                        <SpinnerComponent />

                    </div>

                ) : (

                // ==============================
                // container
                // ==============================

                <div className={ styles.heroVideoContainer }>

                    {
                        /*
                            // ==============================
                            // container > div 1
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
                                    autoPlay
                                    muted
                                    loop
                                    playsInline // video will not work on the iPhone without this control
                                    // poster={ '' }
                                    preload='none'                                            
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
                            // container > div 2
                            // ==============================

                        */
                    }
                    <div
                        ref={ div2Ref }
                    >

                        <h1>We are a results-driven digital marketing agency in Salt Lake City</h1>

                        {
                            /*
                                {
                                    /*
                                        // ==============================
                                        // card elements
                                        // ==============================
                                    */ /*
                                }
                                <div>

                                    <div>
                                        <div></div> { /* image div */ /* }
                                        <h2>Digital Marketing</h2>
                                    </div>

                                    <div>
                                        <div></div> { /* image div */ /* }
                                        <h2>Web <br />Development</h2>
                                    </div>

                                    <div>
                                        <div></div> { /* image div */ /* }
                                        <h2>Business consulting</h2>
                                    </div>

                                </div>
                            */
                        }

                        <h5>
                            {
                                /*
                                    We combine over 18 years of C-suite experience, the latest in digital marketing
                                    and state-of-the-art websites to launch your new business or add significant
                                    amounts of new revenue to your existing business
                                */
                            }
                            We provide <span style={ { color : 'var( --red-25 )' } }>digital marketing</span> and
                            stunning <span style={ { color : 'var( --red-25 )' } }>websites</span> for growing companies
                        </h5>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 3
                            // ==============================

                        */
                    }
                    <div
                        ref={ div3Ref }
                    >

                        <h2>
                            Need more leads? Contact us today and see how we can help!
                        </h2>

                        <h5>
                            We offer proprietary apps for collecting Google reviews, building
                            your online reputation and ranking higher in organic search results
                        </h5>

                    </div>

                </div>

                )

            }

        </Fragment>

    );

} // end of HeroVideoComponent

