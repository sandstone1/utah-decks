


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the navigate component
import { navigate } from 'astro:transitions/client';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v12';
// import in the Circle component
import CircleComponent from '../animations/circle/circle-v5';
// import in the Tabler number one icon
import { TbCircleNumber1Filled } from "react-icons/tb";
// import in our stylesheet
import styles from './why-choose-us-v3.module.scss';



export default function WhyChooseUsComponent() {

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
    const wrapperRef = useRef( null );
    const h2Ref      = useRef( null );
    const badge1Ref  = useRef( null );
    const badge2Ref  = useRef( null );
    const badge3Ref  = useRef( null );
    const badge4Ref  = useRef( null );
    const badge5Ref  = useRef( null );
    const badge6Ref  = useRef( null );

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
    // purpose - fade in and slide in our badges and h2
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
        // need setTimeout in order to give the container time to set marginTop in
        // useEffect 1
        // ==============================

        // ==============================
        // comment this out now that this section is moved down one div but keep the code
        // in case I ever need to apply it to the section above
        // ==============================

        // setTimeout( () => {

            // ==============================
            // intersection observer
            // ==============================

            // ==============================
            // use the web animations api for the animation
            // ==============================

            // options object
            const servicesOptions = {

                root : null, // this is the default and this means our viewport is the canvas
                // we are working with here
                threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
                // 0 means that as soon as any little piece enters the defined viewport the
                // intersection observer will fire
                rootMargin : '0px 0px -200px 0px' // this works like margin in css and this
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
            // servicesObserver
            const servicesObserver = new IntersectionObserver( 

                // we pass in 2 arguments to the IntersectionObserver : a function and an
                // options object

                // the first argument ( i.e. the function )
                function( entries, servicesObserver ) { 

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
                                // browserWidth > 768 && browserWidth <= 1728
                                // ==============================

                                if ( 
                                    wrapperRef.current &&
                                    ( browserWidth > 1728 )
                                ) {

                                    // ==============================
                                    // h2 div
                                    // ==============================

                                    h2Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 400,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of h2Ref.current.animate()

                                    // ==============================
                                    // badge 1
                                    // ==============================

                                    badge1Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 400,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge1Ref.current.animate()

                                    // ==============================
                                    // badge 2
                                    // ==============================

                                    badge2Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 200,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge2Ref.current.animate()

                                    // ==============================
                                    // badge 3
                                    // ==============================

                                    badge3Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
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

                                    ); // end of badge3Ref.current.animate()

                                    // ==============================
                                    // badge 4
                                    // ==============================

                                    badge4Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 400,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge4Ref.current.animate()

                                    // ==============================
                                    // badge 5
                                    // ==============================

                                    badge5Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 200,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge5Ref.current.animate()

                                    // ==============================
                                    // badge 6
                                    // ==============================

                                    badge6Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
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

                                    ); // end of badge6Ref.current.animate()

                                } // end of if ( browserWidth > 1728 )

                                // ==============================
                                // browserWidth > 768 && browserWidth <= 1728
                                // ==============================

                                if ( 
                                    wrapperRef.current &&
                                    ( browserWidth > 768 && browserWidth <= 1728 )
                                ) {

                                    // ==============================
                                    // h2 div
                                    // ==============================

                                    h2Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 200,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of h2Ref.current.animate()

                                    // ==============================
                                    // badge 1
                                    // ==============================

                                    badge1Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 200,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge1Ref.current.animate()

                                    // ==============================
                                    // badge 2
                                    // ==============================

                                    badge2Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
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

                                    ); // end of badge2Ref.current.animate()

                                    // ==============================
                                    // badge 3
                                    // ==============================

                                    badge3Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 200,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge3Ref.current.animate()

                                    // ==============================
                                    // badge 4
                                    // ==============================

                                    badge4Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
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

                                    ); // end of badge4Ref.current.animate()

                                    // ==============================
                                    // badge 5
                                    // ==============================

                                    badge5Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 200,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge5Ref.current.animate()

                                    // ==============================
                                    // badge 6
                                    // ==============================

                                    badge6Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateX( -20.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateX( 0 )"
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

                                    ); // end of badge6Ref.current.animate()

                                } // end of if ( browserWidth > 768 && browserWidth <= 1728 )

                                // ==============================
                                // browserWidth <= 768
                                // ==============================

                                if ( 
                                    wrapperRef.current &&
                                    ( browserWidth <= 768 )
                                ) {

                                    // ==============================
                                    // h2 div
                                    // ==============================

                                    h2Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
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
                                    // badge 1
                                    // ==============================

                                    badge1Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
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

                                    ); // end of badge1Ref.current.animate()

                                    // ==============================
                                    // badge 2
                                    // ==============================

                                    badge2Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateY( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 400,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge2Ref.current.animate()

                                    // ==============================
                                    // badge 3
                                    // ==============================

                                    badge3Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateY( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 800,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge3Ref.current.animate()

                                    // ==============================
                                    // badge 4
                                    // ==============================

                                    badge4Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
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

                                    ); // end of badge4Ref.current.animate()

                                    // ==============================
                                    // badge 5
                                    // ==============================

                                    badge5Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateY( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 1600,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge5Ref.current.animate()

                                    // ==============================
                                    // badge 6
                                    // ==============================

                                    badge6Ref.current.animate(

                                        [

                                            {
                                                opacity   : 0,
                                                transform : "translateY( 4.0rem )"
                                            }, 
                                            {
                                                opacity   : 1,
                                                transform : "translateY( 0 )"
                                            }

                                        ],
                                        {

                                            duration   : 400,
                                            easing     : "ease-out",
                                            delay      : 2000,
                                            iterations : 1, // this is the default but leave for reference purposes
                                            fill       : "forwards" // this lets the " element retain the style values
                                            // from the last keyframe when the animation ends "
                        
                                        }

                                    ); // end of badge6Ref.current.animate()

                                } // end of if ( browserWidth <= 768 )

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
                                h2Ref.current.style.opacity                      = 1;
                                h2Ref.current.style.transform                    = 'translateX( 0 )';
                                h2Ref.current.style.transitionDuration           = '400ms';
                                h2Ref.current.style.transitionTimingFunction     = 'ease-out';
                                badge1Ref.current.style.opacity                  = 1;
                                badge1Ref.current.style.transform                = 'translateX( 0 )';
                                badge1Ref.current.style.transitionDuration       = '400ms';
                                badge1Ref.current.style.transitionTimingFunction = 'ease-out';
                                badge2Ref.current.style.opacity                  = 1;
                                badge2Ref.current.style.transform                = 'translateX( 0 )';
                                badge2Ref.current.style.transitionDuration       = '400ms';
                                badge2Ref.current.style.transitionTimingFunction = 'ease-out';
                                badge3Ref.current.style.opacity                  = 1;
                                badge3Ref.current.style.transform                = 'translateX( 0 )';
                                badge3Ref.current.style.transitionDuration       = '400ms';
                                badge3Ref.current.style.transitionTimingFunction = 'ease-out';
                                badge4Ref.current.style.opacity                  = 1;
                                badge4Ref.current.style.transform                = 'translateX( 0 )';
                                badge4Ref.current.style.transitionDuration       = '400ms';
                                badge4Ref.current.style.transitionTimingFunction = 'ease-out';
                                badge5Ref.current.style.opacity                  = 1;
                                badge5Ref.current.style.transform                = 'translateX( 0 )';
                                badge5Ref.current.style.transitionDuration       = '400ms';
                                badge5Ref.current.style.transitionTimingFunction = 'ease-out';
                                badge6Ref.current.style.opacity                  = 1;
                                badge6Ref.current.style.transform                = 'translateX( 0 )';
                                badge6Ref.current.style.transitionDuration       = '400ms';
                                badge6Ref.current.style.transitionTimingFunction = 'ease-out';

                            } // end of if ( entry.boundingClientRect.top <= 0 ) {}

                            // once the observation happens then we want to unobserve the DOM
                            // element
                            servicesObserver.unobserve( wrapperRef.current );

                        } // end of if

                    } ) // end of entries.forEach()

                }, // end of function( entries, servicesObserver )

                servicesOptions // the second argument

            ); // end of new IntersectionObserver()

            // let's have the observer observe our selected DOM element and then do something
            // once the DOM element enters the viewport and remember the criteria for when a
            // DOM element enters the viewport or triggers entry.isIntersecting is determined
            // by the options object above
            servicesObserver.observe( wrapperRef.current );

            // ==============================
            // end of intersection observer
            // ==============================

        // }, 100 );

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

        <div className={ styles.whyChooseUsContainer }>

            {
                /*
                    // ==============================
                    // wave shape
                    // ==============================
                */
            }
            {
                /*
                    // ==============================
                    // container > div 1
                    // ==============================
                */
            }
            <div>

                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>

                </svg>

            </div>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div
                ref={ wrapperRef }
            >

                <h2
                    ref={ h2Ref }
                >
                    <span>Why Choose</span> Canyon Sky Stem Cells
                </h2>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 2 ( wrapper div for badges )
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 1 ( service 1 )
                            // ==============================
                            {' '}
                            <span><a href="/contact">Contact us</a></span> and see how we 
                            can help.
                            With hands-on expertise in digital marketing and local SEO, we&apos;ll capture
                            significant local search traffic, connect with your target audience, and
                            grow your sales revenue.
                        */
                    }
                    <div
                        ref={ badge1Ref }
                    >

                        <h3>Verified Chain of Custody</h3>

                        <p>
                            Most regenerative clinics source biologics through third-party distributors, with
                            no way to verify what actually reaches you. Our physician's direct oversight of
                            our source company means every biologic is tracked from procurement to
                            administration — never diluted, never replicated.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 1 > picture
                                // ==============================
                            */
                        }
                        {
                            /*
                                // ==============================
                                // remember, we had to put the picture first in the source code
                                // and eliminate the grid at bp-1032 and do " float : right; "
                                // on the picture at bp-1032 in order to get the text to wrap
                                // around the picture
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet="/images/mj_chain_of_custody_03_300.webp"
                                type="image/webp"
                            />
                            <img
                                className="service-1-picture"
                                src="/images/mj_chain_of_custody_03_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of stem cells moving"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 2 ( service 2 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge2Ref }
                    >

                        <h3>Postnatal-Sourced Regenerative Cells</h3>

                        {
                            /*
                                <h3>AI and Operations Leadership</h3>

                                We have deep AI technical expertise, over 18 years of senior management
                                experience, and have co-founded two successful startups. Contact us
                                <a href="/contact"> here</a> and see how we can help.

                                We have strong AI technical expertise and over 18 years of senior management
                                experience.{' '}
                                <span><a href="/contact">Contact us</a></span>{' '} and see how 
                                we can help your business run smarter and grow faster.
                            */
                        }
                        <p>
                            We use donated umbilical cord and placental tissue — not adipose or
                            synthetic alternatives — for a higher concentration of the growth
                            factors your body needs to heal.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 1 > picture
                                // ==============================
                            */
                        }
                        {
                            /*
                                // ==============================
                                // remember, we had to put the picture first in the source code
                                // and eliminate the grid at bp-1032 and do " float : right; "
                                // on the picture at bp-1032 in order to get the text to wrap
                                // around the picture
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet="/images/mj_regen_cells_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_regen_cells_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a rocket launching out of a laptop"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 3 ( service 3 )
                            // ==============================
                            We build AI software that increases revenue and maximizes company productivity.
                        */
                    }
                    <div
                        ref={ badge3Ref }
                    >

                        <h3>[Doctor&apos;s Name] on Every Treatment Plan</h3>

                        <p>
                            Every case is reviewed and guided by [Dr. NAME] directly — not a
                            rotating cast of providers who&apos;ve never met you before your
                            appointment.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 1 > picture
                                // ==============================
                            */
                        }
                        {
                            /*
                                // ==============================
                                // remember, we had to put the picture first in the source code
                                // and eliminate the grid at bp-1032 and do " float : right; "
                                // on the picture at bp-1032 in order to get the text to wrap
                                // around the picture
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet="/images/mj_doctor_bag_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_doctor_bag_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a rocket launching out of a laptop"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 4 ( service 4 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge4Ref }
                    >

                        <h3>Local In-Person Care</h3>

                        <p>
                            Every consultation and treatment happens in Draper, Utah with a team
                            that knows your case — not a call center or a nationwide franchise
                            treating you like a number.                            
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 1 > picture
                                // ==============================
                            */
                        }
                        {
                            /*
                                // ==============================
                                // remember, we had to put the picture first in the source code
                                // and eliminate the grid at bp-1032 and do " float : right; "
                                // on the picture at bp-1032 in order to get the text to wrap
                                // around the picture
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet="/images/mj_location_pin_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_location_pin_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a rocket launching out of a laptop"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 5 ( service 5 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge5Ref }
                    >

                        <h3>Non-Surgical, Minimal Downtime</h3>

                        <p>
                            Our treatments are designed to help you heal without the risks,
                            recovery time, or costs of surgery — so you can get back to doing
                            what you love, faster.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 1 > picture
                                // ==============================
                            */
                        }
                        {
                            /*
                                // ==============================
                                // remember, we had to put the picture first in the source code
                                // and eliminate the grid at bp-1032 and do " float : right; "
                                // on the picture at bp-1032 in order to get the text to wrap
                                // around the picture
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet="/images/mj_woman_16_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_woman_17_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a woman getting ready for a Botox treatment"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 6 ( service 6 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge6Ref }
                    >

                        <h3>Comprehensive Care, All in One Place</h3>

                        <p>
                            From stem cell therapy to medical aesthetics, peptides to
                            hormone therapy, and more — six treatment
                            categories under one roof, built around a treatment plan
                            tailored to your specific needs, goals, and health history.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 1 > picture
                                // ==============================
                            */
                        }
                        {
                            /*
                                // ==============================
                                // remember, we had to put the picture first in the source code
                                // and eliminate the grid at bp-1032 and do " float : right; "
                                // on the picture at bp-1032 in order to get the text to wrap
                                // around the picture
                                // ==============================
                            */
                        }
                        <picture>
                            <source 
                                srcSet="/images/mj_treatment_plan_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_treatment_plan_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a rocket launching out of a laptop"
                            />
                        </picture>

                    </div>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 3 ( animating backgrounds )
                    // ==============================
                */
            }
            <div>

                <AnimatingGradientBackground />

            </div>

        </div>

    );

} // end of WhyChooseUsComponent

