

'use client';


// import in the useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in next dynamic
import dynamic from 'next/dynamic';
// import in the Contact Information component
import ContactInformationComponent from '@/components/react/contact/contact-information-v2';
// import in the Contact Us component
import ContactUsComponent from '@/components/contact/react/contact-form-other-postmark-badge-long-v3';
// import in the Where You Can Find Us component
// remember, since this component is below the fold, defer the loading on initial page load
const WhereYouCanFindUsComponent = dynamic( () => import( '@/components/react/where-you-can-find-us/where-you-can-find-us-v4' ) );
// import in the scss file
import styles from './contact-us-other-v1-cimikoski-stem-cells.module.scss';



export default function ContactUsOtherComponent() {

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
    const wrapperRef  = useRef();
    const postcardRef = useRef();

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
    // useEffect 1
    // ==============================

    // ==============================
    // purpose - fade in and slide up our section
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
        // remember, reCAPCHTA was causing the page transition to be janky so we decided to not
        // show the Contact Us Form component during the initial page load and we timed the
        // setTimeout to match the css animation duration ( 1600ms delay + 400ms duration )
        // ==============================

        // ==============================
        // code block 3
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

                        // ==============================
                        // additional check
                        //
                        // remember, we want to check and see if the user is scrolling
                        // up or down and depending on the direction we want different
                        // code to run
                        //
                        // remember, this check is only useful if the user had reloaded
                        // the page and happens to be underneth is container and the user
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

                            // Perform your desired action here

                            // ==============================
                            // animation - opacity and slide up
                            // ==============================

                            // ==============================
                            // browserWidth <= 768
                            // ==============================

                            // ==============================
                            // animation - opacity and slide up
                            // ==============================

                            // ==============================
                            // browserWidth <= 1376
                            // ==============================

                            // ==============================
                            // got the Firefox code by searching Google for " javascript code
                            // to test for firefox " and this was Ai's answer
                            // ==============================

                            // ==============================
                            // remember, we are using CSS instead of the code below to run the animation
                            // ==============================
/*
                            if ( 
                                wrapperRef.current &&
                                ( browserWidth > 1376 ) &&
                                ( !navigator.userAgent.includes( 'Firefox' ) ) &&
                                ( document.startViewTransition )
                            ) {

                                wrapperRef.current.animate(

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
                                        delay      : 2900, // delay based on view transition duration
                                        iterations : 1, // this is the default but leave for reference purposes
                                        fill       : "forwards" // this lets the " element retain the style values
                                        // from the last keyframe when the animation ends "
                    
                                    }

                                ); // end of wrapperRef.current.animate()

                            } // end of if ( browserWidth > 1376 )


                            if ( 
                                wrapperRef.current &&
                                ( browserWidth > 1376 ) &&
                                ( ( navigator.userAgent.includes( 'Firefox' ) ) || ( !document.startViewTransition ) ) 
                            ) {

                                wrapperRef.current.animate(

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

                                ); // end of wrapperRef.current.animate()

                            } // end of if ( browserWidth > 1376 )

                            // ==============================
                            // browserWidth <= 1376
                            // ==============================

                            if ( 
                                wrapperRef.current &&
                                ( browserWidth <= 1376 )
                            ) {

                                wrapperRef.current.animate(

                                    [

                                        {
                                            opacity   : 0,
                                            transform : "translateY( 2.0rem )"
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

                                ); // end of wrapperRef.current.animate()

                            } // end of else if ( browserWidth <= 1376 )
*/
                            // ==============================
                            // end of animation
                            // ==============================

                        } // end of if ( entry.boundingClientRect.top > 0 ) {}

                        // determine if the user is scrolling up and if so we do nothing
                        if ( entry.boundingClientRect.top < 0 ) {

                            // Element entered from the bottom or when the user is scrolling
                            // up
                            // console.log( 'Element entered from the top' );

                            // Perform your desired action here

                            // then just show the container with no animation and remember this
                            // is typically the case but we need this code here just in case the user
                            // reloads the page and the user happens to be under this container and
                            // assuming the user scrolls up to this container then in this case we
                            // don't want any animation, just a visible container
                            wrapperRef.current.style.opacity  = 1;

                        } // end of if ( entry.boundingClientRect.top < 0 ) {}

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        sectionObserver.unobserve( wrapperRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, sectionObserver )

            sectionOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        sectionObserver.observe( wrapperRef.current );

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

    // ==============================
    // IMPORTANT!
    //
    // remember, after days of trying to figure out to tell is a page reloaded in a child
    // component, I figured out a solution that works and to make it work we need the code from
    // function 2, 3 and useEffect 3
    //
    // remember, in a component that is present on all pages, like the nav or header components,
    // we can use " import { usePathname } from 'next/navigation'; " and then determine whether
    // or not ( page === undefined ) and if so, then we know the user reloaded the page
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // purpose : use localStorage to tell if the page has been reloaded and if so then change the
    // animation of the wrapper div ( remember, some of this code came from searching " next.js read if
    // browser refreash " and the anwser came from AI, although I modified to make it work )
    // ==============================
    
    // STEP 2
    // the beforeunload event inside useEffect 3 will call the handleBeforeUnload function, which will
    // set preloaded property to true in localStorage
    function handleBeforeUnload() {

        // test
        // console.log ( 'In the handleBeforeUnload function' );

        // " if ( typeof window !== 'undefined' ) {} " prevents the " ReferenceError:
        // localStorage is not defined " error during the build process
        if ( typeof window !== 'undefined' ) {

            localStorage.setItem( 'pageReloaded', 'true' );

        } // end of if

    }; // end of handleBeforeUnload function

    // STEP 3
    // test
    // as soon as STEP 2 has run we will see the STEP 3 message in the console and
    // " if ( typeof window !== 'undefined' ) {} " prevents the " ReferenceError:
    // localStorage is not defined " error during the build process
    if ( typeof window !== 'undefined' ) {

        // after STEP 2, this will evaluate to " true "
        // important comment for testing
        // console.log( localStorage.getItem( 'pageReloaded' ) === 'true' );

    } // end of if

    // STEP 5

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // on page reload, change animation timing for wrapper div below
    // ==============================

    // remember, we can't consistently get the laod event in next.js due to optimizations;
    // however, by doing STEP 1, 2, 3, 4 we are able to get the hanldeLoad function to run,
    // therby removing the pageReloaded item from localStorage and then performing the necessary
    // animation changes thereafter
    function handleLoad() {

        // test
        console.log ( 'In the handleLoad function' );

        // " if ( typeof window !== 'undefined' ) {} " prevents the " ReferenceError:
        // localStorage is not defined " error during the build process
        if ( typeof window !== 'undefined' ) {

            // last check, even though we know this is true from STEP 4 below
            if ( localStorage.getItem( 'pageReloaded' ) === 'true' ) {

                // remove the localStoreage item so that we can start over and this way we can
                // know if the page is reloaded for a second time
                localStorage.removeItem( 'pageReloaded' );

                // test
                console.log( 'Page was refreshed' );

                // actions to take if the page was refreshed

                // change animation here
                if ( wrapperRef.current ) {

                    // remember, we can't change the animation name but we can change the duration
                    // and delay
                    // wrapperRef.current.style.animationDuration        = '350ms'; // janky
                    // wrapperRef.current.style.animationDelay           = '300ms'; // janky

                    // ==============================
                    // option 1
                    //
                    // nice fade in ( think this may work better here )
                    //
                    // advantages : we don't have to create a duplicate class ( other than the animation
                    // characteristics ) in the css file
                    // ==============================

                    wrapperRef.current.style.animationName            = 'none'; // this will prevent the animation in the css file from running
                    wrapperRef.current.style.opacity                  = 1;
                    wrapperRef.current.style.transform                = 'translateY( 0 )';
                    wrapperRef.current.style.transitionDuration       = '400ms';
                    wrapperRef.current.style.transitionTimingFunction = 'ease-out';
                    wrapperRef.current.style.transitionDelay          = '200ms';

                    postcardRef.current.style.animationName            = 'none'; // this will prevent the animation in the css file from running
                    postcardRef.current.style.opacity                  = 1;
                    postcardRef.current.style.transform                = 'translateY( 0 )';
                    postcardRef.current.style.transitionDuration       = '400ms';
                    postcardRef.current.style.transitionTimingFunction = 'ease-out';
                    postcardRef.current.style.transitionDelay          = '200ms';

                    // ==============================
                    // option 2
                    //
                    // nice slide up
                    // ==============================

                    // remember, this style will only run on page reload so no need to change anything
                    // else
                    // wrapperRef.current.classList.add( styles.aboutUsOtherContainerWrapperActive );

                } // end of if ( wrapperRef.current )

            } else {

                // actions to take if the page was not refreshed
                // remmeber, in next.js we never get to the else clause since the handleLoad
                // is only called if " localStorage.getItem( 'pageReloaded' ) === 'true' " is true
                console.log( 'Page was not refreshed' );

            } // end of if else

        } // end of if

    }; // end of handleLoad function

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // purpose is to determine if the user had reloaded the page and if so, then make sure remove
    // the fade in and slide in and we did not have to make changes to useEffect 1 and 2 after
    // making the changes in useEffect 3
    // ==============================

    // ==============================
    // purpose : determine if the user reloaded the page and if so, then change some styles
    // ==============================

    useEffect( () => {

        // STEP 4
        // this runs after STEP 1, 2 and 3 and I was able to get inside the handleLoad
        // function by doing this; whereas, I was not able to get inside the handleLoad
        // function using " window.addEventListener( 'load', handleLoad ); " inside
        // useEffect 3
        if ( localStorage.getItem( 'pageReloaded' ) === 'true' ) {

            // call the handleLoad function
            handleLoad();

        } // end of if

        // test
        // we see that this message runs as soon as STEP 5 has completed :
        /*
            true
            true
            In the handleLoad function
            Page was refreshed
            DOM is ready
            DOM is ready
            false
            false
            false
            false
        */
        // important comment for testing
        // console.log( 'DOM is ready' );

        // ==============================
        // remember, the beforeunload event works on the desktop when the browser console is not
        // open but the beforeunload event may not work if the browser console is open
        // ==============================

        // STEP 1
        // remember, next will always call the beforeunload event but may not call the load due to
        // next.js specific optimizations and I found the code above worked; whereas, using
        // " window.addEventListener( 'load', handleLoad ); " did not work so I commented out below
        window.addEventListener( 'beforeunload', handleBeforeUnload );        
        // window.addEventListener( 'load', handleLoad );

        // cleanup to prevent memory leaks
        return () => {

            window.removeEventListener( 'beforeunload', handleBeforeUnload );
            // window.removeEventListener( 'load', handleLoad );

        }; // end of return();

    }, [] ); // end of useEffect 2


    return (

        <div className={ styles.contactUsOtherContainer }>

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

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 1 ( wrapper div )
                        // ==============================
                    */
                }
                <div>

                    <div>

                        <h1>Contact Us</h1>

                        <div>

                            {
                                /*
                                    // ==============================
                                    // container > div 1 ( wrapper div ) > div 1 ( wrapper div ) > div:nth-child( 2 ) > picture:nth-child( 1 ) ( picture of someone working at a desk )
                                    // ==============================

                                    // ==============================
                                    // remember, add the width and height to the image tag so
                                    // that the content below this div does not appear for a
                                    // split second on page load
                                    // ==============================

                                    // ==============================
                                    // remember, in order to make the width and height responsive,
                                    // we had to set the width figure in the css file
                                    // ==============================
                                */
                            }
                            <picture>
                                <source 
                                    srcSet={ '/images/dall_e_3_22.webp' }
                                    type={ 'image/webp' }
                                />
                                <img
                                    src={ '/images/dall_e_3_22.png' }
                                    width={ '512px' }
                                    height={ '512px' }
                                    fetchPriority={ 'high' }
                                    alt={ 'A man working typing on a computer at a desk' }
                                    // loading={ 'lazy' }
                                />
                            </picture>

                            {
                                /*
                                    // ==============================
                                    // container > div 1 ( wrapper div ) > div 1 ( wrapper div ) > div:nth-child( 2 ) > div:nth-child( 2 ) ( blue background circle )
                                    // ==============================
                                */
                            }
                            <div></div>

                        </div>

                    </div>

                    <div>

                        <ContactInformationComponent />             

                    </div>

                    <div>

                        <ContactUsComponent />
                    
                    </div>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 2 ( Google maps )
                    // ==============================
                */
            }
            <div>

                <WhereYouCanFindUsComponent />
            
            </div>

            {
                /*
                    // ==============================
                    // container > div 3 ( wrapper div ) > picture ( postcard image )
                    // ==============================
                */
            }
            <div
                ref={ postcardRef }
            >

                    <picture>
                        <source 
                            srcSet={ '/images/postcards.png' }
                            type={ 'image/png' }
                        />
                        <img
                            src={ '/images/postcards.png' }
                            width={ '350px' }
                            height={ '350px' }
                            fetchPriority={ 'high' }
                            alt={ 'A postcard' }
                            // loading={ 'lazy' }
                        />
                    </picture>

            </div>

        </div>

    );

} // end of ContactUsOtherComponent

