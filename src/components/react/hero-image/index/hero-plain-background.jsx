



// ==============================
// notes on the hero animation
// ==============================

// ==============================
// note 1
// ==============================

// please see the following articles for more details on how to use the linear() function
// to animate your hero page :
// " https://linear-easing-generator.netlify.app/ ",
// " https://caniuse.com/?search=linear() ",
// " https://developer.chrome.com/articles/css-linear-easing-function/ ",
// " https://fullystacked.net/posts/linear/ "
// " https://www.w3schools.com/cssref/css3_pr_animation-timing-function.php "


// ==============================
// note 2
// ==============================

// ==============================
// step 1 - remember to add a delay and I used a 600ms starting delay for my animation
// step 2 - instead of using ease-in-out, I created a bounce effect using the
// --spring-easing variable and then I gave the animation a duration using the
// --spring-duration variable and this created an awesome bounce effect and looks great
// ( see the hero.module.scss file for details )
// step 3 - use @supports to target browsers that support the linear() easing function
// that interpolates linearly between multiple points 
// ( see the hero.module.scss file for details ) and then
// step 4 - provide a fallback for browsers that do not support the linear() easing
// function that interpolates linearly between multiple points
// ( see the hero.module.scss file for details )
// ==============================

// ==============================
// files :
// components/hero/hero.js
// components/hero/hero.module.scss
// ==============================




// ==============================
// notes on the hero height value
// ==============================

// ==============================
// note 3
// ==============================

// ==============================
// step 1 - remember, we had to get the height of the hero container
// for all screen sizes, otherwise our conditional in the index.js file
// ( i.e. heroHeight != '' && () ) would not work and therefore the you are going to
// discover component would not render and then we pass that height value up to the
// parent component or the index.js file and then in the index file we set the state
// for the hero container height and then pass that height state value down to the
// child component or the you are going to discover component
// ==============================

// ==============================
// files :
// components/hero/hero.js ( see useEffect #2 and function #2 )
// pages/index.js ( see passParentToChildHeightHandlerFunction )
// components/you-are-going-to-discover/you-are-going-to-discover.js ( see useEffect #1 )
// components/hero/hero.module.scss
// ==============================




// ==============================
// note 4
// ==============================

// ==============================
// step 1 - remember we are passing the hero container height value from the hero.js
// file up to the parent or the index.js file and then from there we are passing the
// height value down to the child component or the you-are-going-to-discover.js file
// and from there we set the top margin for the component container div
// ==============================

// ==============================
// files :
// components/hero/hero.js ( see useEffect #2 and function #2 )
// pages/index.js ( see passParentToChildHeightHandlerFunction )
// components/you-are-going-to-discover/you-are-going-to-discover.js ( see useEffect #1 )
// components/hero/hero.module.scss
// ==============================










// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in the Font Awesome phone icon
import { FaPhoneAlt } from "react-icons/fa";
// import in our stylesheet
import styles from './hero-plain-background.module.scss';



// remember we are passing down props from the parent or the index.js file and
// " passParentToChildHeightHandlerFunction " is a function being passed from
// the parent to the child as a prop
export default function HeroPlainBackgroundComponent( /*{ passParentToChildHeightHandlerFunction }*/ ) {

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

    // define browserWidth
    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const heroContainerRef = useRef();

    // ==============================
    // useRouter();
    // ==============================

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
    // purpose : to get the height of the hero container and then pass that height
    // up to the parent component
    // ==============================
/*
    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // eliminate FOUC
        // ==============================

        // ==============================
        // part 2 - see scss file for part 1
        // ==============================

        if ( heroContainerRef.current ) {
         
            // heroContainerRef.current.style.opacity = 1;

        } // end of if

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // get the browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block 3
        // ==============================

        // ==============================
        // purpose : calculate the hero container height
        // ==============================

        // ==============================
        // and then use that height to adjust the top margin for the container div
        // in the why work with us component
        // ==============================

        if ( 
            heroContainerRef.current
        ) {

            // get the hero container height
            var height = heroContainerRef.current.clientHeight;

            // testing
            console.log( `hero container height : ${ height } in the useEffect #2 function in the hero component` );

            // ==============================
            // pass the hero container height up to the parent or the index.js file
            // ==============================

            // remember, call the function in the child component and pass in the data or
            // in this case the hero container height as an argument

            // remember, we subtracted 160 from the hero component height since that is the
            // height of the header container
            passParentToChildHeightHandlerFunction( `${ height - 160 }` );

        } // end of if

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // purpose : add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, if we want the change the margin top for container div in the first div
        // below the hero container as the screen width changes ( not just on page load )
        // then we need to call the handleResize function
        // ==============================

        // if the browser width exist and the resize event is fired then
        // call the handleResizeVersion2 function and this function will recalculate
        // the hero container height and then pass that height up to the parent component
        // or the index.js file and we will pass the height up to the parent component
        // by calling the passParentToChildHeightHandlerFunction(); below
        if ( browserWidth ) {

            window.addEventListener( 'resize', handleResize, false );

            // make sure we remove the event listener on component unmount
            return () => {

                window.removeEventListener( 'resize', handleResize, false );

            }; // end of return

        } // end of if

    }, [] ); // end of useEffect 1
*/
    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    // ==============================
    // purpose : to pass the recalculated hero container height up to the parent component
    // whenever the browser resize event is fired
    // ==============================
/*
    async function handleResize( e ) {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // purpose : calculate hero container height
        // ==============================

        // ==============================
        // and then use that height to adjust the top margin for container div in the
        // why-work-with-us.js file
        // ==============================

        if (
            heroContainerRef.current
        ) {

            // get the hero container height
            var height = heroContainerRef.current.clientHeight;

            // testing
            console.log( `hero container height : ${ height } in the handleResizeVersion2 function in the hero component` );

            // ==============================
            // pass the hero container height to the parent or index.js file
            // ==============================

            // remember, call the function in the child component and pass in the data or
            // in this case the hero container height as an argument

            // remember, we subtracted 160 from the hero component height since that is the
            // height of the header container and this worked great
            passParentToChildHeightHandlerFunction( `${ height - 160 }` );

        } // end of if

    } // end of handleResize
*/

    return (

        // ==============================
        // container
        // ==============================

        <div 
            className={ styles.heroPlainBackgroundContainer }
            ref={ heroContainerRef }
        >

            {
                /*
                    // ==============================
                    // container > div1 ( wrapper div )
                    // ==============================

                */
            }
            <div>

                <h1>
                    Auto Glass Repair Service
                </h1>

                <h2>
                    Fast and reliable auto glass repair in Raleigh, NC
                </h2>

                <div>

                    <a
                        href="tel:919-555-1212"
                        target="_blank"
                    >
                        <FaPhoneAlt style={ { verticalAlign: '-4px', fontSize: '2.55rem', margin: '0 2.0rem 0 0' } } />
                        Click To Call
                    </a>

                </div>

            </div>

        </div>

    );

} // end of HeroPlainBackgroundComponent

