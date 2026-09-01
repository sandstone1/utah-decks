



// import in Fragment, the useRef, useEffect hooks
import { Fragment, useRef, useEffect } from 'react';
// import in the scss file
import styles from './highlight-text.module.scss';




export default function HighlightTextComponent() {

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

    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // use the useRef(); hook to create a reference to a DOM element(s)
    const containerRef = useRef();
    const spanRef      = useRef();

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
    // scroll triggered animation
    // ==============================

    // ==============================
    // purpose - highlight the selected text when isIntersecting is true and this is a
    // scroll triggered event
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // get browser width
        // ==============================

        browserWidth = window.innerWidth;

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
        const sectionOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px -200px 0px' // this works like margin in css and this
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

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        // ==============================
                        // important comment
                        // ==============================
                        // console.log( entry );

                        // test
                        // ==============================
                        // important comment
                        // ==============================
                        // if the user ever reloads the page we can use
                        // entry.boundingClientRect.top to tell where the user is at
                        // on the page and then act accordingly
                        console.log( entry.boundingClientRect.top );

                        // ==============================
                        // additional check
                        //
                        // remember, we want to check and see if the user is scrolling
                        // up or down and depending on the direction we want different
                        // code to run
                        //
                        // remember, this check is useful if the user had reloaded
                        // the page and happens to be underneth the container and the user
                        // is scrolling up to this container and the reason this
                        // code is useful is because it prevents the unsual animation
                        // behavior if the user is scrolling up to this container
                        // ==============================

                        // ==============================
                        // entry.boundingClientRect.top definition : " This property tells
                        // you the vertical position of the element relative to the top of
                        // the viewport. If it's less than 0, the element is above the top
                        // edge of the viewport. "
                        // ==============================

                        // ==============================
                        // scenario 1
                        //
                        // the user is above the about us section and the user is scrolling
                        // down the page, then do the following
                        //
                        // remember, scenario 1 is the only time that the animation will run
                        // ==============================

                        // determine if the user is scrolling down and if so then run
                        // our animation
                        if ( entry.boundingClientRect.top > 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // down
                            // console.log( 'Element entered from the bottom' );

                            // Perform your desired action here

                            spanRef.current.animate(

                                [

                                    {
                                        backgroundPosition : "0%"
                                    }, 
                                    {
                                        backgroundPosition : "-100%"
                                    }

                                ],
                                {

                                    duration   : 500,
                                    easing     : "ease-out",
                                    delay      : 0,
                                    iterations : 1, // this is the default but leave for reference purposes
                                    fill       : "forwards", // this lets the " element retain the style values
                                    // from the last keyframe when the animation ends "
                                    // rangeStart : "90%",
                                    // rangeEnd   : "100%"
                
                                }

                            ); // end of spanRef.current.animate()

                        } // end of if ( entry.boundingClientRect.top > 0 ) {}

                        // ==============================
                        // scenario 2
                        //
                        // the user reloads the page and the section element is directly in the
                        // center of the page, then do the following
                        // ==============================

                        // if the user reloads the page and section is directly on the screen, we want
                        // to highlight the text and leave it highlighted for the duration of the user session
                        if ( 
                            entry.boundingClientRect.top > 0 &&
                            entry.boundingClientRect.top < 800 &&
                            spanRef
                        ) {

                            spanRef.current.style.backgroundPosition = "-100%";

                        } // end of if

                        // ==============================
                        // scenario 3
                        //
                        // the user reloads the page and is below the where you can find us section and the
                        // user is scrolling up the page, then do the following
                        // ==============================

                        // determine if the user is scrolling up and if so we do nothing
                        if ( entry.boundingClientRect.top < 0 ) {

                            // test
                            console.log( 'In entry.boundingClientRect.top < 0' );

                            // Element entered from the bottom or when the user is scrolling
                            // up
                            // console.log( 'Element entered from the top' );

                            // Perform your desired action here

                            // then just show the image with no animation and remember this
                            // is typically not the case but we need this code here just in case the user
                            // reloads the page and the user happens to be underneth this container and
                            // assuming the user scrolls up to this container then in this case we
                            // don't want any animation, just a visible image
                            spanRef.current.style.backgroundPosition = "-100%";

                        } // end of if ( entry.boundingClientRect.top < 0 ) {}

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( containerRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, sectionObserver )

            sectionOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        sectionObserver.observe( containerRef.current );

        // ==============================
        // end of intersection observer
        // ==============================

    }, [] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // purpose : call the handleResize function on the browser resize event
    // ==============================

    // ==============================
    // remember, the useEffect hook will run after the initial page load and then the
    // useEffect hook will be called each time the browserWidth changes
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // calculate browser width
        // ==============================

        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // if browserWidth exist then call the handleResize function
        if ( browserWidth ) {

            window.addEventListener( 'resize', handleResize, false );

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                window.removeEventListener( 'resize', handleResize, false );

            };

        } // end of if

    }, [] ) // end of useEffect 2

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
    // purpose : just log the browserWidth changes for now
    // ==============================

    async function handleResize( e ) {

        // ==============================
        // code block 1
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // test
        // console.log( `${ browserWidth } in handleResize` );

    } // end of handleResize function



    return (

        <Fragment>

            {
                /*
                // ==============================
                // container
                // ==============================

                // ==============================
                // remember, the way this is set up it is better to keep the container and have the span ref
                // inside the container
                // ==============================

                // ==============================
                // remember, we have to position the html code in the correct spot so that our
                // highlighted text appears where it needs to appear
                // ==============================
                */
            }
            
            <div 
                className={ styles.highlightTextContainer }
                ref={ containerRef }
            >

                {
                    /*
                        // ==============================
                        // container > span ( scroll triggered animation - highlight text )
                        // ==============================
                    */
                }
                <span ref={ spanRef }>We are located in Lehi, Utah,</span>

                <span> in an area known as </span>
                
                <a href="https://en.wikipedia.org/wiki/Silicon_Slopes" target="_blank">Silicon Slopes</a>.

            </div>

        </Fragment>

    );

} // end of HighlightTextComponent


