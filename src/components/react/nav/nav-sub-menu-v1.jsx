



// ==============================
// remember, the below does not apply to this project but keep it here for reference
// ==============================

// ==============================
// note #1 - eliminate FOUT ( i.e. flash of unstyled text )
// ==============================

// ==============================
// this note pertains to the nav, side menu and hamburger menu elements
// ==============================

// ==============================
// remember, when the page is initially loaded, I was seeing the contact nav item
// text for a split second and this was before the hamburger menu was loaded so to
// resolve this issue and any other FOUT issues we did the following :
// ==============================

// ==============================
// step 1 - hide all nav items with " display : none " on page load
// step 2 - hide the hamburger menu item with " display : none " on page load
// step 3 - hide the side menu with " display : none " on page load
// step 4 - in the nav.js file, use the useEffect hook to show the nav items
// or the hamburger menu based on the user's screen size
// step 5 - in the side-menu.js file, use the useEffect hook to change " display : none "
// to " display : grid " and do this on page load and then use the setTimeout function
// and declare the number of milliseconds to wait before executing all the code inside
// the setTimeout function ( in my case, I used 100ms ) and remmeber all the code inside
// the setTimeout function is used to smoothly animate the opening of the side menu and
// do so on the first run
// step 6 - remember, step 5 solved our issue of having the side menu not animate on
// the first run
// ==============================

// ==============================
// files :
// pages/nav.js
// pages/nav.module.scss
// components/hamburger-menu/hamburger-menu.js
// components/hamburger-menu/hamburger-menu.module.scss
// components/side-menu/side-menu.js
// components/side-menu/side-menu.module.scss
// ==============================





// let's surround the anchor tags with the Link component and then add the href attribute
// to each Link component and then inside the Link component we have the anchor tags

// import in Fragment, useCallback, useEffect, useRef and useState hooks
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
// import in the navigate component
import { navigate } from 'astro:transitions/client';
// import in the Hamburger Menu component
import HamburgerMenuComponent from '../hamburger-menu/hamburger-menu.jsx';
// import in the Side Menu component
import SideMenuComponent from '../side-menu/side-menu-sub-menu-v1.jsx';
// import in the Logo component
import LogoComponent from '../logo/logo-utah-decks-mountain-v1.jsx';
// import in the Font Awesome calendar check icon
import { FaRegCalendarCheck } from "react-icons/fa6";
// import in the Feather layer outline icon
import { FiLayers } from "react-icons/fi";
// import in our stylesheet
import styles from './nav-sub-menu-v1.module.scss';


export default function NavComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state
    const [ showSideMenu, setShowSideMenu ]     = useState( false );
    const [ isServicesOpen, setIsServicesOpen ] = useState( false );
    const [ skipFade, setSkipFade ]             = useState( false );
    // add state for the underline on the current page
    const [ currentPath, setCurrentPath ]       = useState( '' );

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

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variable(s)
    const navContainerRef  = useRef( null );
    const hamburgerMenuRef = useRef( null );
    const servicesRef      = useRef( null );

    // ==============================
    // create DOM reference
    // ==============================

    // ==============================
    // useSession();
    // ==============================

    // ==============================
    // initialize the context
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // remember, these functions had to be declared before useEffect 1 in order to work
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // handleClickOutside function
    // ==============================

    const handleClickOutside = useCallback( ( e ) => {

        if (
            servicesRef.current &&
            !servicesRef.current.contains( e.target ) &&
            isServicesOpen
        ) {
    
            setIsServicesOpen( false );

        } // end of if

    }, [ isServicesOpen ] ); // end of handleClickOutside

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // handleKeyPress function
    // ==============================

    const handleKeyPress = useCallback( ( e ) => {

        // had to disable the Space Bar key since it was causing the page to move downward
        if ( e.key === " " ) {

            e.preventDefault();

        } // end of if

        // if the escape key is pressed then close the modal
        if (

            e.key === "Escape" && isServicesOpen

        ) {

            setIsServicesOpen( false );

        } // end of if

    }, [ isServicesOpen ] ); // end of handleKeyPress

    // ==============================
    // useEffect();
    // ==============================

    // ==============================
    // useEffect 1
    // ==============================

    useEffect( () => {

        // if we press any key then we will call the handleKeyPress function above
        document.addEventListener( 'keydown', handleKeyPress, false );

        // if we click outside the modal ( anywhere in the document ) then we will call the
        // handleClickOutside function
        document.addEventListener( 'click', handleClickOutside, false );
        
        // make sure we remove the event listeners after we call the handleKeyPress and
        // handleClickOutside functions
        return () => {

            document.removeEventListener( 'keydown', handleKeyPress, false );

            document.removeEventListener( 'click', handleClickOutside, false );

        } // end of return() {}

    }, [ handleKeyPress, handleClickOutside ] ); // end of useEffect 1

    // ==============================
    // useEffect 2
    // ==============================

    useEffect( () => {

        // set the path after every Astro page change
        const updatePath = () => setCurrentPath( window.location.pathname );

        // call updatePath right away and set the path when the component first loads
        updatePath();

        // when we changes pages, call the updatePath function
        document.addEventListener( 'astro:page-load', updatePath );
    
        // remove the event listener when the component unmounts
        return () => document.removeEventListener( 'astro:page-load', updatePath );
    
    }, [] ); // end of useEffect 2

    // ==============================
    // functions
    // ==============================


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // container
                    // ==============================
                */
            }
            
            <nav 
                className={ styles.navContainer }
                ref={ navContainerRef }
                id="site-navbar" // needed for the _global.scss file
            >

                {
                    /*
                        // ==============================
                        // container > div ( container left )
                        // ==============================
                    */
                }
                <div
                    className={ styles.navContainerLeft }
                >

                    {
                        /*
                            // ==============================
                            // logo
                            // ==============================
                        */
                    }

                    <a
                        href='/'
                    >

                        <div>
                            <LogoComponent />
                        </div>

                        <picture>
                            <source 
                                srcSet="/images/mj_utah_decks_wordmark_33.png"
                                type="image/png"
                            />
                            <img
                                className="contact-page-image-underline"
                                src="/images/mj_utah_decks_wordmark_33.png"
                                width={ 240 }
                                height={ 90.41 }
                                loading="eager"
                                fetchpriority="high"
                                alt="Utah Decks & Pergolas"
                            />
                        </picture>

                    </a>

                </div>

                {
                    /*
                        // ==============================
                        // container > div ( container right )
                        // ==============================
                    */
                }
                <div className={ styles.navContainerRight } >

                    {
                        /*
                            // ==============================
                            // unordered list
                            // ==============================

                            // ==============================
                            // 1 - services
                            // 2 - request service
                            // 3 - free estimate
                            // 4 - hamburger menu ( conditionally shown )
                            // 5 - side menu ( conditionally shown )
                            // ==============================
                        */
                    }

                    <ul>

                        {
                            /*
                                show the SERVICES tab only if the user's screen size is greater than 1376px
                            */
                        }
                        {
                            /*
                                // ==============================
                                // container > nav > div ( nav container right ) > ul > li ( services )
                                // ==============================
                            */
                        }
                        <li
                            className={ styles.navContainerRightServices }
                            ref={ servicesRef }
                        >

                            <a
                                // className={ isServicesOpen ? styles.servicesActive : '' } // this keep the underline
                                // in place even after my cursor leaves the a element area but once my modal is
                                // removed then the underline slides off
                                onClick={ () => setIsServicesOpen( !isServicesOpen ) }
                                // keep underline if on this page
                                className={ currentPath.startsWith( '/decks' ) ? styles.navActive : '' }
                            >
                                <span data-content="Services" aria-hidden="true"></span>
                                Services
                            </a>

                            {
                                /*
                                    // ==============================
                                    // chevron
                                    // ==============================
                                */
                            }
                            <svg
                                className={ isServicesOpen ? styles.chevronOpen : styles.chevron }
                                width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"
                            >
                                <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {
                                /*
                                    // ==============================
                                    // modal
                                    // ==============================
                                */
                            }
                            <div
                                // after clicking on Deck Services, skipFade becomes true; therefore,
                                // the class modalNoFade is added, resulting in " transition : none; "
                                className={ `${ isServicesOpen ? styles.modalOpen : '' } ${ skipFade ? styles.modalNoFade : '' }` }
                            >

                                <a
                                    href='/decks'
                                    // add state for the blue background for the /decks sub menu when on that page
                                    className={ currentPath.startsWith( '/decks' ) ? styles.decksOpen : '' }
                                    onClick={ () => {
                                        setSkipFade( true ); // close instantly, no fade
                                        setIsServicesOpen( false ); // close the model after clicking on
                                        // Deck Services
                                    } }
                                >

                                    {
                                        /*
                                            // ==============================
                                            // modal block 1 - deck services
                                            // ==============================
                                        */
                                    }
                                    {
                                        /*
                                            // ==============================
                                            // container > picture ( picture of a deck )
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
                                            srcSet="/images/mj_icon_deck_03_120.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="/images/mj_icon_deck_03_120.png"
                                            width={ 120 }
                                            height={ 120 }
                                            loading="eager"
                                            fetchpriority="high"
                                            alt="Picture of a deck"
                                        />
                                    </picture>
                                    <span
                                        // underline this text if on this page or a sub page
                                        // className={ currentPath.startsWith( '/decks' ) ? styles.navActive : '' }
                                    >
                                        <span data-content="Deck Services" aria-hidden="true"></span>
                                        Deck Builder Services
                                    </span>
                                    <p>Custom decks, repair, replacement & railings</p>

                                </a>

                            </div>

                        </li>

                        {
                            /*
                                show the REQUEST SERVICE tab only if the user's screen size is greater than 1376px
                            */
                        }
                        {
                            /*
                                // ==============================
                                // container > nav > div ( nav container right ) > ul > li ( request service )
                                // ==============================
                            */
                        }
                        <li
                            className={ styles.navContainerRightRequestService }
                        >

                            <a 
                                href='/request-service'
                                // keep underline if on this page
                                className={ currentPath === '/request-service' ? styles.navActive : '' }
                            >
                                <span data-content="Request Service" aria-hidden="true"></span>
                                Request Service
                            </a>
    
                        </li>

                        {
                            /*
                                show the FREE ESTIMATE tab only if the user's screen size is greater than 1376px
                            */
                        }
                        {
                            /*
                                // ==============================
                                // container > nav > div ( nav container right ) > ul > div > li ( free estimate )
                                // ==============================
                            */
                        }
                        <li
                            className={ styles.navContainerRightFreeEstimate }
                        >

                            <a 
                                href='/get-started'
                                // keep underline if on this page
                                className={ currentPath === '/get-started' ? styles.navActive : '' }
                            >
                                <span data-content="Free Estimate" aria-hidden="true"></span>
                                Free Estimate
                            </a>

                        </li>

                        {
                            /*
                                show the Hamburger menu only if the user's screen size is 1376px or less
                            */
                        }
                        <li
                            className={ styles.navContainerRightHamburgerMenu }
                            ref={ hamburgerMenuRef }
                        >
                            <a
                                onClick={ ( e ) =>
                                    {
                                        // in order to stop the showSideMenu state from propagating
                                        // into the child components we had to make this change
                                        // after updating to react 18 and next 12
                                        e.stopPropagation();
                                        // change showSideMenu state on the click event
                                        setShowSideMenu( ( prevStatus ) => !prevStatus );
                                    }
                                }
                            >
                                <HamburgerMenuComponent
                                    showSideMenu={ showSideMenu }
                                />
                            </a>
                        </li>

                        {
                                
                            /*
                                show the SIDE MENU only when showSideMenu is true
                            */

                        }
                        <SideMenuComponent
                            resetShowSideMenu={ () => setShowSideMenu( ( prevStatus ) => !prevStatus ) }
                            showSideMenu={ showSideMenu }
                        />

                    </ul>

                </div>

            </nav>
                
        </Fragment>

    );

} // end of NavComponent


