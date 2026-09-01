



// let's surround the anchor tags with the Link component and then add the href attribute
// to each Link component and then inside the Link component we have the anchor tags

// import in Fragment and the useCallback, useEffect, useRef, useState hooks
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
// import in Font Awesome home icon
import { FaHome } from 'react-icons/fa';
// import in Three.js icon
import { TbBrandThreejs } from "react-icons/tb";
// import in Font Awesome address card icon
import { FaAddressCard } from 'react-icons/fa';
// import in Font Awesome address space icon
import { FaSpaceAwesome } from "react-icons/fa6";
// import in Font Awesome camera
import { FaCamera } from "react-icons/fa";
// import in IcoMoon cube
import { IoCube } from "react-icons/io5";
// import in our stylesheet
import styles from './side-menu-rotating-cube_old_08.09.26.module.scss';


// pass down the resetShowSideMenu and showSideMenu properties from the nav component
// ( parent component )
export default function SideMenuComponent( { resetShowSideMenu, showSideMenu } ) {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ notInitialPageLoad, setNotInitialPageLoad ] = useState( false );
    const [ home, setHome ]                             = useState( false );
    const [ contact, setContact ]                       = useState( false );

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

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing two useRef variables
    const sideMenuContainerRef = useRef();
    const backgroundOverlayRef = useRef();
    const homeLinkRef          = useRef( null );
    const contactLinkRef       = useRef( null );

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // remember, in this case, we needed to define the handleClickOutside function
    // and the handleKeyPress function before the useEffect hook below; otherwise,
    // we run into initialization errors

    // ==============================
    // handleClickOutside function
    // ==============================

    const handleClickOutside = useCallback( ( e ) => {

        // if the user clicks outside the side menu container then close the side menu
        if (

            sideMenuContainerRef.current &&
            !sideMenuContainerRef.current.contains( e.target )

        ) {

            // call resetShowSideMenu and this will change the showSideMenu state in the
            // nav.js file, thereby closing the side menu
            resetShowSideMenu();

        } // end of if

    }, [ resetShowSideMenu ] ); // end of handleClickOutside

    // ==============================
    // handleKeyPress function
    // ==============================

    const handleKeyPress = useCallback( ( e ) => {
        
        // had to disable the Space Bar key since it was causing the page to move downward
        if ( e.key === " " ) {

            e.preventDefault();

        } // end of if

        // if the escape key is pressed then close the side menu
        if ( e.key === "Escape" ) {
    
            // call resetShowSideMenu and this will change the showSideMenu state in the
            // nav.js file, thereby closing the side menu
            resetShowSideMenu();

        } // end of if

    }, [ resetShowSideMenu ] ); // end of handleKeyPress

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // useEffect(); 1
    // ==============================

    // the useEffect hook will run after the initial page load ( this initial page load
    // will show the showSideMenu state as being false and will trigger the code below )
    // and then the useEffect hook will be called each time the showSideMenu states
    // changes 
    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // calculate the browser width
        // ==============================

        // get the browser width so that I can change the side menu width based on the
        // window size
        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        // ==============================
        // use the web animations API to animate the side menu
        // ==============================

        // ==============================
        // notes : remember, the great thing about using the web animations api is that
        // I no longer need to use the 100ms setTimeout function in order to be able
        // to open and close the side menu
        // ==============================

        // ==============================
        // 1376
        // ==============================

        // ==============================
        // browser width is less than or equal to 1376px and showSideMenu is true
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            showSideMenu &&
            ( browserWidth <= 1376 && browserWidth > 1280 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "hidden",
                        width      : '26vw',
                        transform  : "translateX( 26vw )" // the side menu starts off the screen
                        // to the right by 26vw
                    }, 
                    {
                        visibility : "visible",
                        width      : '26vw',
                        transform  : "translateX( 0 )" // this moves the side menu to the left by
                        // 26vw, thereby filling the viewport with the side menu
                    }
    
                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [
    
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }, 
                    {
                        visibility : "visible",
                        opacity    : 1
                    }

                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade in the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // see notes below for details on this state value
            setNotInitialPageLoad( true );

        } // end of if

        // ==============================
        // 1280
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is true
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            showSideMenu &&
            ( browserWidth <= 1280 && browserWidth > 1032 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "hidden",
                        width      : '32vw',
                        transform  : "translateX( 32vw )" // the side menu starts off the screen
                        // to the right by 32vw
                    }, 
                    {
                        visibility : "visible",
                        width      : '32vw',
                        transform  : "translateX( 0 )" // this moves the side menu to the left by
                        // 32vw, thereby filling the viewport with the side menu
                    }
    
                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [
    
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }, 
                    {
                        visibility : "visible",
                        opacity    : 1
                    }

                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade in the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // see notes below for details on this state value
            setNotInitialPageLoad( true );

        } // end of if

        // ==============================
        // 1032
        // ==============================

        // ==============================
        // browser width is less than or equal to 1032px and showSideMenu is true
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            showSideMenu &&
            ( browserWidth <= 1032 && browserWidth > 920 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "hidden",
                        width      : '35vw',
                        transform  : "translateX( 35vw )" // the side menu starts off the screen
                        // to the right by 35vw
                    }, 
                    {
                        visibility : "visible",
                        width      : '35vw',
                        transform  : "translateX( 0 )" // this moves the side menu to the left by
                        // 35vw, thereby filling the viewport with the side menu
                    }
    
                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [
    
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }, 
                    {
                        visibility : "visible",
                        opacity    : 1
                    }

                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade in the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // see notes below for details on this state value
            setNotInitialPageLoad( true );

        } // end of if

        // ==============================
        // 920
        // ==============================

        // ==============================
        // browser width is less than or equal to 920px and showSideMenu is true
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            showSideMenu &&
            ( browserWidth <= 920 && browserWidth > 768 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "hidden",
                        width      : '40vw',
                        transform  : "translateX( 40vw )" // the side menu starts off the screen
                        // to the right by 40vw
                    }, 
                    {
                        visibility : "visible",
                        width      : '40vw',
                        transform  : "translateX( 0 )" // this moves the side menu to the left by
                        // 40vw, thereby filling the viewport with the side menu
                    }
    
                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [
    
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }, 
                    {
                        visibility : "visible",
                        opacity    : 1
                    }

                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade in the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // see notes below for details on this state value
            setNotInitialPageLoad( true );

        } // end of if

        // ==============================
        // 768
        // ==============================

        // ==============================
        // browser width is less than or equal to 768px and showSideMenu is true
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            showSideMenu &&
            ( browserWidth <= 768 && browserWidth > 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "hidden",
                        width      : '47vw',
                        transform  : "translateX( 47vw )" // the side menu starts off the screen
                        // to the right by 47vw
                    }, 
                    {
                        visibility : "visible",
                        width      : '47vw',
                        transform  : "translateX( 0 )" // this moves the side menu to the left by
                        // 47vw, thereby filling the viewport with the side menu
                    }
    
                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [
    
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }, 
                    {
                        visibility : "visible",
                        opacity    : 1
                    }

                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade in the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // see notes below for details on this state value
            setNotInitialPageLoad( true );

        } // end of if

        // ==============================
        // 620
        // ==============================

        // ==============================
        // browser width is less than or equal to 620px and showSideMenu is true
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            showSideMenu &&
            ( browserWidth <= 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "hidden",
                        width      : '100vw',
                        transform  : "translateX( 100vw )" // the side menu starts off the screen
                        // to the right by 100vw
                    }, 
                    {
                        visibility : "visible",
                        width      : '100vw',
                        transform  : "translateX( 0 )" // this moves the side menu to the left by
                        // 100vw, thereby filling the viewport with the side menu
                    }
    
                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "hidden",
                        opacity    : 0
                    }, 
                    {
                        visibility : "visible",
                        opacity    : 1
                    }

                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade in the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // see notes below for details on this state value
            setNotInitialPageLoad( true );

        } // end of if

        // ==============================
        // code block 3
        // ==============================

        // ==============================
        // 1376
        // ==============================

        // ==============================
        // browser width is less than or equal to 1376px and showSideMenu is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === true || contact === true ) &&
            notInitialPageLoad &&
            ( browserWidth <= 1376 && browserWidth > 1280 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '26vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '26vw',
                        transform  : "translateX( 26vw )" // this moves the side menu off the
                        // screen to the right by 26vw
                    }

                ],
                {

                    // duration   : 300,
                    duration   : 0, // give our rotating cube transition, we needed to make the side menu
                    // disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // home tab
            homeLinkRef.current.style.opacity = '0';

            // contact tab
            contactLinkRef.current.style.opacity = '0';

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    // duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    duration   : 0, // give our rotating cube transition, we needed to make the background
                    // overlay disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 1280
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === true || contact === true ) &&
            notInitialPageLoad &&
            ( browserWidth <= 1280 && browserWidth > 1032 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '32vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '32vw',
                        transform  : "translateX( 32vw )" // this moves the side menu off the
                        // screen to the right by 32vw
                    }

                ],
                {

                    // duration   : 300,
                    duration   : 0, // give our rotating cube transition, we needed to make the side menu
                    // disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // home tab
            homeLinkRef.current.style.opacity = '0';

            // contact tab
            contactLinkRef.current.style.opacity = '0';

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    // duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    duration   : 0, // give our rotating cube transition, we needed to make the background
                    // overlay disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 1032
        // ==============================

        // ==============================
        // browser width is less than or equal to 1032px and showSideMenu is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === true || contact === true ) &&
            notInitialPageLoad &&
            ( browserWidth <= 1032 && browserWidth > 920 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '35vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '35vw',
                        transform  : "translateX( 35vw )" // this moves the side menu off the
                        // screen to the right by 35vw
                    }

                ],
                {

                    // duration   : 300,
                    duration   : 0, // give our rotating cube transition, we needed to make the side menu
                    // disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // home tab
            homeLinkRef.current.style.opacity = '0';

            // contact tab
            contactLinkRef.current.style.opacity = '0';

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    // duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    duration   : 0, // give our rotating cube transition, we needed to make the background
                    // overlay disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 920
        // ==============================

        // ==============================
        // browser width is less than or equal to 920px and showSideMenu is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === true || contact === true ) &&
            notInitialPageLoad &&
            ( browserWidth <= 920 && browserWidth > 768 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '40vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '40vw',
                        transform  : "translateX( 40vw )" // this moves the side menu off the
                        // screen to the right by 40vw
                    }

                ],
                {

                    // duration   : 300,
                    duration   : 0, // give our rotating cube transition, we needed to make the side menu
                    // disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // home tab
            homeLinkRef.current.style.opacity = '0';

            // contact tab
            contactLinkRef.current.style.opacity = '0';

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    // duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    duration   : 0, // give our rotating cube transition, we needed to make the background
                    // overlay disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 768
        // ==============================

        // ==============================
        // browser width is less than or equal to 768px and showSideMenu is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === true || contact === true ) &&
            notInitialPageLoad &&
            ( browserWidth <= 768 && browserWidth > 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '47vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '47vw',
                        transform  : "translateX( 47vw )" // this moves the side menu off the
                        // screen to the right by 47vw
                    }

                ],
                {

                    // duration   : 300,
                    duration   : 0, // give our rotating cube transition, we needed to make the side menu
                    // disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // home tab
            homeLinkRef.current.style.opacity = '0';

            // contact tab
            contactLinkRef.current.style.opacity = '0';

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    // duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    duration   : 0, // give our rotating cube transition, we needed to make the background
                    // overlay disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 620
        // ==============================

        // ==============================
        // scenario 1
        // ==============================

        // ==============================
        // browser width is less than or equal to 620px and showSideMenu is false
        // ==============================

        // ==============================
        // if the user is navigating back to the home page, turn off translateX since this was causing
        // occasional page jumping
        //
        // use the state value " home " to determine whether or not the user is navigating back to
        // the home page
        //
        // remember, we only had the page jumping problem on mobile devices
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === true || contact === true ) &&
            notInitialPageLoad &&
            home &&
            ( browserWidth <= 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '100vw',
                        // transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '100vw',
                        // transform  : "translateX( 100vw )" // this moves the side menu off the
                        // screen to the right by 100vw
                    }

                ],
                {

                    // duration   : 200, // the fragments of the side menu was sometimes showing up
                    // when the header overlay slide off the screen so to fix this issue we
                    // changed the duration from 300 to 200 and this seemed to help
                    duration   : 0, // give our rotating cube transition, we needed to make the side menu
                    // disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // home tab
            homeLinkRef.current.style.opacity = '0';

            // contact tab
            contactLinkRef.current.style.opacity = '0';

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    // duration   : 200, // match the slide open duration so that we can fade out the
                    // background overlay
                    duration   : 0, // give our rotating cube transition, we needed to make the background
                    // overlay disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 620
        // ==============================

        // ==============================
        // scenario 2
        // ==============================

        // ==============================
        // browser width is less than or equal to 620px and showSideMenu is false
        // ==============================

        // ==============================
        // if the user is navigating between pages, turn on translateX
        //
        // use the state value " home " to determine whether or not the user is navigating back to
        // the home page
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === true || contact === true ) &&
            notInitialPageLoad &&
            !home &&
            ( browserWidth <= 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '100vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '100vw',
                        transform  : "translateX( 100vw )" // this moves the side menu off the
                        // screen to the right by 100vw
                    }

                ],
                {

                    // duration   : 300,
                    duration   : 0, // give our rotating cube transition, we needed to make the side menu
                    // disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // home tab
            homeLinkRef.current.style.opacity = '0';

            // contact tab
            contactLinkRef.current.style.opacity = '0';

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {
                    // duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    duration   : 0, // give our rotating cube transition, we needed to make the background
                    // overlay disappear immediately upon clicking a side menu item
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // code block 4
        // ==============================

        // ==============================
        // 1376
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false and home is
        // false and contact is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === false && contact === false ) &&
            notInitialPageLoad &&
            ( browserWidth <= 1376 && browserWidth > 1280 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '26vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '26vw',
                        transform  : "translateX( 26vw )" // this moves the side menu off the
                        // screen to the right by 26vw
                    }

                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 1280
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false and home is
        // false and contact is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === false && contact === false ) &&
            notInitialPageLoad &&
            ( browserWidth <= 1280 && browserWidth > 1032 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '32vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '32vw',
                        transform  : "translateX( 32vw )" // this moves the side menu off the
                        // screen to the right by 32vw
                    }

                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 1032
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false and home is
        // false and contact is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === false && contact === false ) &&
            notInitialPageLoad &&
            ( browserWidth <= 1032 && browserWidth > 920 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '35vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '35vw',
                        transform  : "translateX( 35vw )" // this moves the side menu off the
                        // screen to the right by 35vw
                    }

                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 920
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false and home is
        // false and contact is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === false && contact === false ) &&
            notInitialPageLoad &&
            ( browserWidth <= 920 && browserWidth > 768 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '40vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '40vw',
                        transform  : "translateX( 40vw )" // this moves the side menu off the
                        // screen to the right by 40vw
                    }

                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 768
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false and home is
        // false and contact is false
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === false && contact === false ) &&
            notInitialPageLoad &&
            ( browserWidth <= 768 && browserWidth > 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '47vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '47vw',
                        transform  : "translateX( 47vw )" // this moves the side menu off the
                        // screen to the right by 47vw
                    }

                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 620
        // ==============================

        // ==============================
        // scenario 1
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false and home is
        // false and contact is false
        // ==============================

        // ==============================
        // if the user is navigating back to the home page, turn off translateX since this was causing
        // occasional page jumping
        //
        // use the state value " home " to determine whether or not the user is navigating back to
        // the home page
        //
        // remember, we only had the page jumping problem on mobile devices
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === false && contact === false ) &&
            notInitialPageLoad &&
            home &&
            ( browserWidth <= 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '100vw',
                        // transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '100vw',
                        // transform  : "translateX( 100vw )" // this moves the side menu off the
                        // screen to the right by 100vw
                    }

                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {

                    duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // 620
        // ==============================

        // ==============================
        // scenario 2
        // ==============================

        // ==============================
        // browser width is less than or equal to 1280px and showSideMenu is false and home is
        // false and contact is false
        // ==============================

        // ==============================
        // if the user is navigating between pages, turn on translateX
        //
        // use the state value " home " to determine whether or not the user is navigating back to
        // the home page
        // ==============================

        // ==============================
        // remember, the code below will not run until notInitialPageLoad is true; therefore the
        // code below won't run on page load, which is great since before making this update the
        // code was running on page load and creating an odd closing side menu effect and this
        // makes since showSideMenu is false by default
        // ==============================

        if ( 
            backgroundOverlayRef.current &&
            sideMenuContainerRef.current &&
            homeLinkRef.current &&
            contactLinkRef.current &&
            !showSideMenu &&
            ( home === false && contact === false ) &&
            notInitialPageLoad &&
            !home &&
            ( browserWidth <= 620 )
        ) {

            // side menu
            sideMenuContainerRef.current.animate(

                [

                    {
                        visibility : "visible",
                        width      : '100vw',
                        transform  : "translateX( 0 )" // this starts with the side menu filling
                        // the viewport
                    },
                    {
                        visibility : "hidden",
                        width      : '100vw',
                        transform  : "translateX( 100vw )" // this moves the side menu off the
                        // screen to the right by 100vw
                    }

                ],
                {

                    duration   : 300,
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of sideMenuContainerRef.current.animate()

            // background overlay
            backgroundOverlayRef.current.animate(

                [

                    {
                        visibility : "visible",
                        opacity    : 1
                    }, 
                    {
                        visibility : "hidden",
                        opacity    : 0
                    }
    
                ],
                {
                    duration   : 300, // match the slide open duration so that we can fade out the
                    // background overlay
                    easing     : "ease-out",
                    delay      : 0,
                    iterations : 1, // this is the default but leave for reference purposes
                    fill       : "forwards" // this lets the " element retain the style values
                    // from the last keyframe when the animation ends "

                }

            ); // end of backgroundOverlayRef.current.animate()

            // change this state value back to false so that this closing side menu animation
            // does not run by mistake
            setNotInitialPageLoad( false );

        } // end of if

        // ==============================
        // code block 5
        // ==============================

        // ==============================
        // add event listeners for the click and keydown events
        // ==============================

        // make sure the side menu is opened before adding the event listeners
        if ( sideMenuContainerRef.current && showSideMenu ) {

            // if we press the any key then we will call the handleKeyPress function above
            document.addEventListener( 'keydown', handleKeyPress, false );

            // if we click outside the modal ( anywhere in the document ) then we will call the
            // handleClickOutside function
            document.addEventListener( 'click', handleClickOutside, false );
            
            // make sure we remove the event listeners after we call the handleKeyPress and
            // handleClickOutside functions
            return () => {

                document.removeEventListener( 'keydown', handleKeyPress, false );

                document.removeEventListener( 'click', handleClickOutside, false );

            };

        } // end of if

    }, [ browserWidth, showSideMenu, handleKeyPress, handleClickOutside ] ); // end of useEffect 1

    // ==============================
    // useEffect(); 2
    // ==============================

    useEffect( () => {

        // define browserWidth
        browserWidth = window.innerWidth;

        // ==============================
        // add an event listener for the browser resize event
        // ==============================

        // ==============================
        // remember, if the side menu is open and then we resize the browser to a screen
        // size that is greater than 1376px then we hide the side menu
        // ==============================

        // if browserWidth exist then call the handleResize function
        if ( browserWidth ) {

            // remember, " Both methods achieve the same outcome, allowing you to pass arguments
            // to the function called by the event listener. It's important to avoid calling the
            // function directly in the addEventListener method like
            // window.addEventListener( 'click', myFunction( 'argument' ) ) because this will
            // execute the function immediately, instead of when the event occurs. "
            window.addEventListener( 'resize', () => { handleResize( showSideMenu ) }, false );

            // make sure we remove the event listener after we call the handleResize
            // function
            return () => {

                window.removeEventListener( 'resize', handleResize, false );

            };

        } // end of if

    }, [ browserWidth, showSideMenu ] ); // end of useEffect 2

    // ==============================
    // functions
    // ==============================

    // ==============================
    // handleResize function
    // ==============================

    async function handleResize( showSideMenu ) {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // remember, we had to define browserWidth inside this function in order
        // to the get the 2 conditional statements below to work
        // ==============================

        // define browserWidth
        browserWidth = window.innerWidth;

        // ==============================
        // code block 2
        // ==============================

        if (
            sideMenuContainerRef.current &&
            backgroundOverlayRef.current &&
            showSideMenu &&
            browserWidth > 1376
        ) {

            // if the browser window or screen size is greater than 1376px then we want
            // to hide the side menu
            sideMenuContainerRef.current.style.visibility = 'hidden';
            // if the browser window or screen size is greater than 1376px then we want
            // to hide the background overlay
            backgroundOverlayRef.current.style.visibility = 'hidden';

        } // end of if

        else if (
            sideMenuContainerRef.current &&
            backgroundOverlayRef.current &&
            showSideMenu &&
            browserWidth <= 1376
        ) {

            // if the browser window or screen size is less than or equal to 1376px then
            // we want to show the side menu
            sideMenuContainerRef.current.style.visibility = 'visible';
            // if the browser window or screen size is less than or equal to 1376px then
            // we want to show the background overlay
            backgroundOverlayRef.current.style.visibility = 'visible';

        } // end of if

    } // end of handleResize


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // background overlay div
                    // ==============================
                */
            }
            <div 
                className={ styles.backgroundOverlay }
                ref={ backgroundOverlayRef }
            >
            </div>

            {
                /*
                    // ==============================
                    // side menu container
                    // ==============================
                */
            }
            <div
                className={ styles.sideMenuContainer }
                ref={ sideMenuContainerRef }
            >

                {
                    /*
                        // ==============================
                        // navigation tabs
                        // ==============================
                    */
                }
                <ul>

                    { /* show the home tab at all times */ }
                    <li>
                        <a
                            href="/"
                            ref={ homeLinkRef }
                            onClick={ () => 
                                {
                                    resetShowSideMenu()
                                    setHome( true )
                                }
                            } // reset showSideMenu or close the side menu
                        >
                            <span>
                                <FaHome style={ { verticalAlign : '-3.0px', fontSize : '2.4rem', marginRight : '2.0rem' } } />
                            </span>
                            Home
                        </a>
                    </li>

                    { /* hode the 3d objects tab at all times */ }
                    <li>
                        <a
                            href="/3d-objects"
                            onClick={ () =>
                                {
                                    resetShowSideMenu()
                                    setHome( false )
                                }
                            } // reset showSideMenu or close the side menu
                        >
                            <span>
                                <IoCube style={ { verticalAlign : '-5.0px', fontSize : '2.6rem', marginRight : '2.0rem' } } />
                            </span>
                            3D Objects
                        </a>
                    </li>

                    { /* hide the 3d models tab at all times */ }
                    <li>
                        <a
                            href="/3d-models"
                            onClick={ () =>
                                {
                                    resetShowSideMenu()
                                    setHome( false )
                                }
                            } // reset showSideMenu or close the side menu
                        >
                            <span>
                                <FaCamera style={ { verticalAlign : '-3.0px', fontSize : '2.4rem', marginRight : '2.0rem' } } />
                            </span>
                            3D Models
                        </a>
                    </li>

                    { /* show the contact at all times */ }
                    <li>
                        <a
                            href="/contact"
                            ref={ contactLinkRef }
                            onClick={ () =>
                                {
                                    resetShowSideMenu()
                                    setHome( false )
                                    setContact( true )
                                }
                            } // reset showSideMenu or close the side menu
                        >
                            <span>
                                <FaAddressCard style={ { verticalAlign : '-3.5px', fontSize : '2.4rem', marginRight : '2.0rem' } } />
                            </span>
                            Contact
                        </a>
                    </li>

                </ul>

            </div> { /* end of side menu container div */ }

        </Fragment>

    );

} // end of SideMenuComponent


