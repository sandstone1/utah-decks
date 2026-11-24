


// import in the useEffect, useRef hook
import { useEffect, useRef } from 'react';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v23';
// import in the Font Awesome circle check icon
import { FaRegCircleCheck } from "react-icons/fa6";
// import in the Phosphor number 2 icon
import { PiNumberCircleTwoFill } from "react-icons/pi";
// import in our stylesheet
import styles from './deck-repair-signs-v1.module.scss';



export default function DeckRepairSignsComponent() {

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

    // use browserWidth inside the useEffect hook below
    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const wrapperRef = useRef( null );
    const h2Ref      = useRef( null );
    const p2Ref      = useRef( null );
    const p3Ref      = useRef( null );
    const div4Ref    = useRef( null );
    const p5Ref      = useRef( null );
    const img6Ref    = useRef( null );

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
                            // browserWidth > 1280
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth > 1280 )
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
                                // p3
                                // ==============================

                                p3Ref.current.animate(

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

                                ); // end of p3Ref.current.animate()

                                // ==============================
                                // div4 
                                // ==============================

                                div4Ref.current.animate(

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

                                ); // end of div4Ref.current.animate()

                                // ==============================
                                // p5
                                // ==============================

                                p5Ref.current.animate(

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

                                ); // end of p5Ref.current.animate()

                                // ==============================
                                // div6
                                // ==============================

                                img6Ref.current.animate(

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

                                ); // end of img6Ref.current.animate()

                            } // end of if ( browserWidth > 1280 )

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
                                // p3
                                // ==============================

                                p3Ref.current.animate(

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

                                ); // end of p3Ref.current.animate()

                                // ==============================
                                // div4 
                                // ==============================

                                div4Ref.current.animate(

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

                                ); // end of div4Ref.current.animate()

                                // ==============================
                                // p5
                                // ==============================

                                p5Ref.current.animate(

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

                                ); // end of p5Ref.current.animate()

                                // ==============================
                                // div6
                                // ==============================

                                img6Ref.current.animate(

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

                                ); // end of img6Ref.current.animate()

                            } // end of if ( browserWidth > 768 && browserWidth <= 1280 )

                            // ==============================
                            // browserWidth <= 768
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth <= 768 )
                            ) {

                                // ==============================
                                // h2   
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
                                // p3
                                // ==============================

                                p3Ref.current.animate(

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

                                ); // end of p3Ref.current.animate()

                                // ==============================
                                // div4 
                                // ==============================

                                div4Ref.current.animate(

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

                                ); // end of div4Ref.current.animate()

                                // ==============================
                                // p5
                                // ==============================

                                p5Ref.current.animate(

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

                                ); // end of p5Ref.current.animate()

                                // ==============================
                                // div6
                                // ==============================

                                img6Ref.current.animate(

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

                                ); // end of img6Ref.current.animate()

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
    // useEffect(); 2
    // ==============================

    // ==============================
    // make sure the content shows when we switch screen sizes during testing
    // ==============================

    useEffect( () => {

        // define browserWidth
        browserWidth = window.innerWidth;

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // if browserWidth exist then call the handleResize function
        if ( browserWidth ) {

            // remember, " Both methods achieve the same outcome, allowing you to pass arguments
            // to the function called by the event listener. It's important to avoid calling the
            // function directly in the addEventListener method like
            // window.addEventListener( 'click', myFunction( 'argument' ) ) because this will
            // execute the function immediately, instead of when the event occurs. "
            window.addEventListener( 'resize', () => { 
                
                if ( 

                    h2Ref.current &&
                    p2Ref.current &&
                    p3Ref.current &&  
                    div4Ref.current &&      
                    p5Ref.current &&
                    img6Ref.current  

                ) {

                    h2Ref.current.style.opacity   = 1;
                    p2Ref.current.style.opacity   = 1;
                    p3Ref.current.style.opacity   = 1;
                    div4Ref.current.style.opacity = 1;
                    p5Ref.current.style.opacity   = 1;
                    img6Ref.current.style.opacity = 1;

                } // end of if
            
            }, false ); // end of window.addEventListener()

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                window.removeEventListener( 'resize', handleResize, false );

            };

        } // end of if

    }, [ browserWidth ] ); // end of useEffect 2

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

        <div className={ styles.deckRepairSignsContainer }>

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
                    <span style={ { color : 'var( --green-23-9 )' } }>Signs</span> Your Deck Needs Repair
                </h2>

                <p 
                    ref={ p2Ref }
                >
                    Utah&apos;s freeze-thaw cycles are hard on decks. Water soaks into
                    the wood, freezes overnight, then thaws again, sometimes dozens of
                    times a winter. Over time, that opens cracks, loosens fasteners
                    and speeds up rot.
                </p>

                <p
                    ref={ p3Ref }
                >
                    Warning signs to look for include:
                </p>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 4 ( checklist )
                        // ==============================
                    */
                }
                <div
                    ref={ div4Ref }
                >

                    <ul>

                        <li>
                            <FaRegCircleCheck />
                            Soft, spongy or cracked boards
                        </li>
                        <li>
                            <FaRegCircleCheck />
                            Railings that wobble or feel loose
                        </li>
                        <li>
                            <FaRegCircleCheck />
                            Popped nails or loose screws
                        </li>
                        <li>
                            <FaRegCircleCheck />
                            Dark stains, mold or rot, especially near the house
                        </li>
                        <li>
                            <FaRegCircleCheck />
                            Posts that are leaning or sinking
                        </li>
                        <li>
                            <FaRegCircleCheck />
                            A deck that bounces or sways when you walk on it
                        </li>
                        <li>
                            <FaRegCircleCheck />
                            Water stains on the ceiling below the deck
                        </li>

                    </ul>
                
                </div>

                <p
                    ref={ p5Ref }
                >
                    If you notice{' '}
                    <PiNumberCircleTwoFill style={ { verticalAlign: '-11.5px', fontSize: '4.0rem', margin: '0 auto', color: 'var( --gray-225 )' } } />{' '}
                    or more of these signs, it&apos;s time for an inspection. Catching
                    damage early usually means a smaller, less expensive repair.
                </p>


                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 6 ( picture )
                            // ==============================
                        */
                    }
                    <picture>
                        <source 
                            srcSet="/images/mj_homeowner_02_800.webp"
                            type="image/webp"
                        />
                        <img
                            // need to include the ref here and not on the parent div; otherwise,
                            // the parent div becomes its own isolated layer and the image can’t
                            // blend with the dark background behind it
                            ref={ img6Ref }
                            src="/images/mj_homeowner_02_800_v2.jpg"
                            width={ 800 }
                            height={ 800 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Image of a homeowner holding a checklist from a completed deck repair"
                        />
                    </picture>
                
                </div>

            </div>


            {
                /*
                    // ==============================
                    // container > div 2 ( animating backgrounds )
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

} // end of DeckRepairSignsComponent

