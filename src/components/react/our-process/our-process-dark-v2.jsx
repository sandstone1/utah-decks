


// import in the useRef hooks
import { useRef } from 'react';
// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v18';
// import in our stylesheet
import styles from './our-process-dark-v2.module.scss';



export default function OurProcessComponent( ) {

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

    // use the useRef(); hook to create a reference to a DOM element
    const wrapperDivRef = useRef();

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // useEffect();
    // ==============================
/*
    // ==============================
    // useEffect 1
    // ==============================

    // ==============================
    // purpose - fade in and slide up our section
    // ==============================

    useEffect( () => {

        // ==============================
        // intersection observer
        // ==============================

        // ==============================
        // use the web animations api for the animation
        // ==============================

        // options object
        const sectionOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -50px 0px' // this works like margin in css and this
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

        } // end of options object

        // create the intersection observer and save the result to the const
        // sectionObserver
        const sectionObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, sectionObserver ) { 

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
                            // animation - opacity and slide up
                            // ==============================

                            wrapperDivRef.current.animate(

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

                                    duration   : 350,
                                    easing     : "ease-out",
                                    delay      : 0,
                                    iterations : 1, // this is the default but leave for reference purposes
                                    fill       : "forwards" // this lets the " element retain the style values
                                    // from the last keyframe when the animation ends "
                
                                }

                            ); // end of wrapperDivRef.current.animate()

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

                        // if the user is scrolling up, just show the elements without any animation
                        if ( entry.boundingClientRect.top <= 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // up
                            // console.log( 'Element entered from the top' );

                            // if the user is scrolling up, just show the elements without any animation
                            wrapperDivRef.current.style.opacity                  = 1;
                            wrapperDivRef.current.style.transform                = 'translateX( 0 )';
                            wrapperDivRef.current.style.transitionDuration       = '400ms';
                            wrapperDivRef.current.style.transitionTimingFunction = 'ease-out';

                        } // end of if ( entry.boundingClientRect.top <= 0 ) {}

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( wrapperDivRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, sectionObserver )

            sectionOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        sectionObserver.observe( wrapperDivRef.current );

        // ==============================
        // end of intersection observer
        // ==============================

    }, [] ); // end of useEffect 1
*/
    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.ourProcessContainer }>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div
                className={ styles.ourProcessContainerDiv1 }
                ref={ wrapperDivRef }
            >

                {
                    /*
                        // ==============================
                        // container > div 1 > h2-1
                        // ==============================
                    */
                }
                <h2>Our Process</h2>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 2
                        // ==============================
                    */
                }
                <div>

                    <h3>Step 1: Discovery and Analysis</h3>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 2
                            // ==============================
                        */
                    }
                    <div>

                        <p>We dive deep into your business, competitors, and target audience to
                        understand exactly what it takes for your business to win online.</p>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > picture
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
                            srcSet="/images/mj_woman_15_300.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/mj_woman_15_300.jpg"
                            width={ 300 }
                            height={ 300 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Image for Step 1: Discovery and Analysis"
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 3
                        // ==============================
                    */
                }
                <div>

                    <h3>Step 2: Strategy and Website Creation</h3>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 3 > div 2
                            // ==============================
                        */
                    }
                    <div>

                        <p>We build a customized marketing plan and a custom state-of-the-art
                        website tailored specifically to your business.</p>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 3 > picture
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
                            srcSet="/images/mj_painter_01_300.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/mj_painter_01_300.jpg"
                            width={ 300 }
                            height={ 300 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Image for Step 2: Strategy and Website Creation"
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 4
                        // ==============================
                    */
                }
                <div>

                    <h3>Step 3: Implementation and Execution</h3>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 4 > div 2
                            // ==============================
                        */
                    }
                    <div>

                        <p>We put the plan into action — driving more traffic, capturing
                        more leads, and onboarding more clients.</p>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 4 > picture
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
                            srcSet="/images/mj_execution_03_300.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/mj_execution_03_300.jpg"
                            width={ 300 }
                            height={ 300 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Image for Step 3: Implementation and Execution"
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 5
                        // ==============================
                    */
                }
                <div>

                    <h3>Step 4: Continuous Optimization</h3>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 5 > div 2
                            // ==============================
                        */
                    }
                    <div>

                        <p>We actively monitor, refine, and report so your marketing keeps
                        getting better over time.</p>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 5 > picture
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
                            srcSet="/images/mj_beaver_02_300.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/mj_beaver_01_300.jpg"
                            width={ 300 }
                            height={ 300 }
                            loading="lazy"
                            // fetchpriority={ "high" } // needed in case someone scrolls down the
                            // page super fast
                            alt="Image for Step 4: Continuous Optimization"
                        />
                    </picture>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( animating backgrounds )
                    // ==============================
                    <div>
                        <AnimatingGradientBackground />
                    </div>
                */
            }

        </div>

    );

} // end of OurProcessComponent

