


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the navigate component
import { navigate } from 'astro:transitions/client';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v25';
// import in our stylesheet
import styles from './deck-repair-includes-v1.module.scss';



export default function DeckRepairIncludesComponent() {

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
    const p2Ref      = useRef( null );
    const badge1Ref  = useRef( null );
    const badge2Ref  = useRef( null );
    const badge3Ref  = useRef( null );
    const badge4Ref  = useRef( null );
    const badge5Ref  = useRef( null );

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
            rootMargin : '0px 0px -150px 0px' // this works like margin in css and this
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
                                // p2
                                // ==============================

                                p2Ref.current.animate(

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

                                ); // end of p2Ref.current.animate()

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

                            } // end of if ( browserWidth > 1728 )

                            // ==============================
                            // browserWidth > 1280 && browserWidth <= 1728
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth > 1280 && browserWidth <= 1728 )
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
                                // p2
                                // ==============================

                                p2Ref.current.animate(

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

                                ); // end of p2Ref.current.animate()

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

                            } // end of if ( browserWidth > 1280 && browserWidth <= 1728 )

                            // ==============================
                            // browserWidth > 768 && browserWidth <= 1280
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth > 768 && browserWidth <= 1280 )
                            ) {

                                // ==============================
                                // h2 div
                                // ==============================

                                h2Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 6.0rem )"
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
                                // p2
                                // ==============================

                                p2Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 6.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 100,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of p2Ref.current.animate()

                                // ==============================
                                // badge 1
                                // ==============================

                                badge1Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 6.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
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
                                            transform : "translateY( 6.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 300,
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
                                            transform : "translateY( 6.0rem )"
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

                                ); // end of badge3Ref.current.animate()

                                // ==============================
                                // badge 4
                                // ==============================

                                badge4Ref.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 6.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 500,
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
                                            transform : "translateY( 6.0rem )"
                                        }, 
                                        {
                                            opacity   : 1,
                                            transform : "translateY( 0 )"
                                        }

                                    ],
                                    {

                                        duration   : 400,
                                        easing     : "ease-out",
                                        delay      : 600,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge5Ref.current.animate()

                            } // end of if ( browserWidth > 768 && browserWidth <= 1280 )

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
                                // p2
                                // ==============================

                                p2Ref.current.animate(

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
                                        delay      : 100,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of p2Ref.current.animate()

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
                                        delay      : 300,
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
                                        delay      : 400,
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
                                        delay      : 500,
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
                                        delay      : 600,
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of badge5Ref.current.animate()

                            } // end of if ( browserWidth <= 768 )

                            // ==============================
                            // end of animation
                            // ==============================

                        } // end of if ( entry.boundingClientRect.top > 0 ) {}

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

        <div className={ styles.deckRepairIncludesContainer }>

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
                    What Does <span style={ { color : 'var( --green-23-9 )' } }>Deck Repair</span> in Midvale Include?
                </h2>

                <p ref={ p2Ref }>
                    We repair everything from damaged boards to the
                    framing underneath.
                </p>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 5 ( wrapper div for badges )
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 1 ( service 1 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge1Ref }
                    >

                        <h3>Deck Boards</h3>

                        <p>
                            We replace cracked, rotted, warped or loose boards so your deck is safe
                            to walk on again.
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
                                srcSet="/images/mj_boards_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_boards_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of some replacement boards and a cordless drill"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 2 ( step 2 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge2Ref }
                    >

                        <h3>Joists</h3>

                        <p>
                            We repair or reinforce damaged joists to keep your deck
                            level and strong.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 2 > picture
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
                                srcSet="/images/mj_joists_04_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_joists_04_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a wooden deck joist with a metal joist hanger bracket and a hammer beside it"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 3 ( step 3 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge3Ref }
                    >

                        <h3>Ledger Boards</h3>

                        <p>
                            We secure and flash the board that connects your deck
                            to the house, one of the most common places for water
                            damage to start.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 3 > picture
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
                                srcSet="/images/mj_ledger_boards_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_ledger_boards_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a calendar"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 4 ( step 4 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge4Ref }
                    >

                        <h3>Footings and Posts</h3>

                        <p>
                            We fix sinking, shifting or rotted supports so
                            your deck sits on a solid foundation.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 4 > picture
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
                                srcSet="/images/mj_posts_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_posts_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a construction crew building"
                            />
                        </picture>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 5 ( step 5 )
                            // ==============================
                        */
                    }
                    <div
                        ref={ badge5Ref }
                    >

                        <h3>Railings and Stairs</h3>

                        <p>
                            We tighten, rebuild or replace railings and stairs to keep
                            your family and guests safe.
                        </p>

                        {
                            /*
                                // ==============================
                                // container > div 1 > div 2 > div 5 > picture
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
                                srcSet="/images/mj_railings_01_300.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_railings_01_300.jpg"
                                width={ 300 }
                                height={ 300 }
                                loading="lazy"
                                // fetchpriority={ "high" } // needed in case someone scrolls down the
                                // page super fast
                                alt="Image of a beautiful deck"
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

} // end of DeckRepairIncludesComponent

