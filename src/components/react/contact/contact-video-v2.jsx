


// import in Fragment, the useEffect, useRef and useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the Confetti Movement Down component
import ConfettiMovementDown from '../button-animation/confetti-movement-down';
// import in our stylesheet
import styles from './contact-video-v2.module.scss';


export default function ContactVideoComponent( ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ isVideoOpen, setIsVideoOpen ] = useState( false );

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

    const div1Ref = useRef( null );

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
    // purpose - hide the video on page load in order to optimize the inital page
    // loading performance and then show the video after isIntersecting is true
    // ==============================

    useEffect( () => {

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
        const videoShowOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '5000px 0px 1700px 0px' // this works like margin in css and this
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
        const videoShowObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, videoShowObserver ) { 

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
                        setIsVideoOpen( true );

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        videoShowObserver.unobserve( div1Ref.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, videoShowObserver )

            videoShowOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        videoShowObserver.observe( div1Ref.current );

        // ==============================
        // end of intersection observer 1
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function #1
    // ==============================

    // ==============================
    // handleButtonClick function
    // ==============================

    // ==============================
    // dataLayer push
    // ==============================

    // ==============================
    // purpose : to push information into the dataLayer method so that we can track
    // this click event in GTM and GA4
    // ==============================

    async function handleButtonClick( e ) {

        // push the following object into the dataLayer
        window.dataLayer.push(

            {

                'event'      : 'button_click',
                'button_id'  : 'Contact Us - Contact Video Component',
                'page_url'   : 'enchantingapps.com',
                'page_title' : 'Enchanting Apps | Contact Video Component | Contact Us | Button Click'

            }

        );

    } // end of handleButtonClick function


    return (

        // ==============================
        // container
        // ==============================

        <div
            className={ `${ styles.contactVideoContainer } contact-video-container` }
            ref={ div1Ref }
        >

            {
                /*
                    // ==============================
                    // isVideoOpen && ()
                    // ==============================
                */
            }
            {

                isVideoOpen && (

                    <Fragment>

                        {
                            /*
                                // ==============================
                                // container > div 1
                                // ==============================
                            */
                        }
                        <div className={ styles.contactVideoContainerDiv1 }>

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
                            <video
                                // controls
                                autoPlay
                                muted
                                loop
                                playsInline // video will not work on the iPhone without this control
                                // I commneted out the poster and added background-color : var( --gray-872 );
                                // to the container and this seemed to prevent the sudden quick white flash
                                // I was gettingright when I got to the video component
                                // poster={ "/images/extrovert_event_1200.jpg" }
                            >

                                <source 
                                    src={ '/videos/cozy_room_32.mp4' }
                                    type={ 'video/mp4' }
                                    alt={ 'Connect with us' }
                                />

                                Sorry, your browser does not support embedded videos

                            </video>

                        </div>

                        {
                            /*
                                // ==============================
                                // container > div 2
                                // ==============================
                            */
                        }
                        <div className={ `${ styles.contactVideoContainerDiv2 } contact-video-container-div2` }>

                            <h2 className="contact-video-h2">Let&apos;s Get In Touch</h2>

                            <p className="contact-video-p">Need help generating more sales or building an amazing website? Contact
                            us and see how we can help!</p>

                            <ConfettiMovementDown />

                        </div>

                    </Fragment>

                )

            }

        </div>

    );

} // end of ContactVideoComponent

