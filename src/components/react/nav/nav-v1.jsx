



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

// import in Fragment, useRef and useState hooks
import { Fragment, useRef, useState } from 'react';
// import in the navigate component
import { navigate } from 'astro:transitions/client';
// import in the Hamburger Menu component
import HamburgerMenuComponent from '../hamburger-menu/hamburger-menu.jsx';
// import in the Side Menu component
import SideMenuComponent from '../side-menu/side-menu.jsx';
// import in the Logo component
import LogoComponent from '../logo/logo-utah-decks-mountain-v1.jsx';
// import in our stylesheet
import styles from './nav-v1.module.scss';


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
    const [ showSideMenu, setShowSideMenu ] = useState( false );

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
    const navContainerRef   = useRef( null );
    const requestServiceRef = useRef( null );
    const hamburgerMenuRef  = useRef( null );

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
    // useEffect();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
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

        // ==============================
        // remmeber : since we have a 3 second set timeout in the GTM script in the
        // app.js file we want to make sure that " window.dataLayer " exist; otherwise,
        // we could get an error; for example, if a user presses the nav " Contact " button
        // before the 3 second setTimeout function has run then an error will be thrown
        // ==============================

        // test
        // console.log( window.dataLayer );

        if ( window.dataLayer ) {

            // push the following object into the dataLayer
            window.dataLayer.push(

                {

                    'event'      : 'button_click',
                    'button_id'  : 'Contact - Nav Component',
                    'page_url'   : 'enchantingapps.com',
                    'page_title' : 'Enchanting Apps | Nav Component | Contact | Button Click'

                }

            );

        } // end of if

    } // end of handleButtonClick function


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // container
                    // ==============================
                */
            }
            {
                /*

                    // ==============================
                    // part 2 - fade in the nav on initial paint and only on the initial paint
                    // ==============================

                    see main-layout.astro, _global.scss and layout.astro for parts 1, 3 and 4
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

                            // ==============================
                            // remember, we need the onClick={} code below in order to make sure
                            // the blue box doesn't show up for a split second when navigating back
                            // to the home page and before this change we could see the blue box for
                            // a split second since it was running in reverse and the blue box had
                            // a duration of 400ms ( see the _global.scss file ); whereas, our view
                            // transition had an animation duration of 250ms
                            //
                            // ( see the layout.astro file for details on removing this animation when
                            // using the browser back button )
                            //
                            // ( see the side-menu.jsx file for details on removing this animation when
                            // clicking on the home page link in the side menu )
                            // ==============================
                        */
                    }

                    <a
                        // provide the fallback and accessibility with href='/'
                        href='/'
                        onClick={ ( e ) => {

                            // stop the default browser navigation so navigate() handles it instead
                            e.preventDefault();

                            // remove the view transition names before navigating back to the home page
                            // and this prevents the morph animation from showing up when navigating
                            // back to the home page
                            const contactPageH1             = document.querySelector( '.contact-page-h1' );
                            const contactPageImageUnderline = document.querySelector( '.contact-page-image-underline' );
                            const contactPageYellowBox      = document.querySelector( '.contact-page-yellow-box' );
                            const contactPageBlueBox        = document.querySelector( '.contact-page-blue-box' );

                            if ( contactPageH1             ) contactPageH1.style.viewTransitionName              = 'none';
                            if ( contactPageImageUnderline ) contactPageImageUnderline.style.viewTransitionName  = 'none';
                            if ( contactPageYellowBox      ) contactPageYellowBox.style.viewTransitionName       = 'none';
                            if ( contactPageBlueBox        ) contactPageBlueBox.style.viewTransitionName         = 'none';

                            const categoryPageH1             = document.querySelector( '.category-page-h1' );
                            const categoryPageImageUnderline = document.querySelector( '.category-page-image-underline' );
                            const categoryPagePicture        = document.querySelector( '.category-page-picture' );

                            if ( categoryPageH1             ) categoryPageH1.style.viewTransitionName             = 'none';
                            if ( categoryPageImageUnderline ) categoryPageImageUnderline.style.viewTransitionName = 'none';
                            if ( categoryPagePicture        ) categoryPagePicture.style.viewTransitionName        = 'none';

                            // navigate to the home page
                            navigate( '/' );

                        } }
                    >

                        <div>
                            <LogoComponent />
                        </div>

                        <picture>
                            <source 
                                srcset="/images/mj_utah_decks_wordmark_33.png"
                                type="image/png"
                            />
                            <img
                                class="contact-page-image-underline"
                                src="/images/mj_utah_decks_wordmark_33.png"
                                width={ 240 }
                                height={ 90.41 }
                                loading="eager"
                                fetchpriority="high"
                                alt="Utah Decks & Pergoals"
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
                            // 1 - request service
                            // 2 - hamburger menu ( conditionally shown )
                            // 3 - side menu ( conditionally shown )
                            // ==============================
                        */
                    }

                    <ul>

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
                            ref={ requestServiceRef }
                        >
                            <a
                                // provide the fallback and accessibility with href='/'
                                href='/request-service'
                                onClick={ ( e ) => {

                                    handleButtonClick
        
                                    // stop the default browser navigation so navigate() handles it instead
                                    e.preventDefault();

                                    // remove the view transition names before navigating back to the home page
                                    // and this prevents the morph animation from showing up when navigating
                                    // back to the home page
                                    const contactPageH1             = document.querySelector( '.contact-page-h1' );
                                    const contactPageImageUnderline = document.querySelector( '.contact-page-image-underline' );
                                    const contactPageYellowBox      = document.querySelector( '.contact-page-yellow-box' );
                                    const contactPageBlueBox        = document.querySelector( '.contact-page-blue-box' );
        
                                    if ( contactPageH1             ) contactPageH1.style.viewTransitionName              = 'none';
                                    if ( contactPageImageUnderline ) contactPageImageUnderline.style.viewTransitionName  = 'none';
                                    if ( contactPageYellowBox      ) contactPageYellowBox.style.viewTransitionName       = 'none';
                                    if ( contactPageBlueBox        ) contactPageBlueBox.style.viewTransitionName         = 'none';
        
                                    const categoryPageH1             = document.querySelector( '.category-page-h1' );
                                    const categoryPageImageUnderline = document.querySelector( '.category-page-image-underline' );
                                    const categoryPagePicture        = document.querySelector( '.category-page-picture' );
        
                                    if ( categoryPageH1             ) categoryPageH1.style.viewTransitionName             = 'none';
                                    if ( categoryPageImageUnderline ) categoryPageImageUnderline.style.viewTransitionName = 'none';
                                    if ( categoryPagePicture        ) categoryPagePicture.style.viewTransitionName        = 'none';
        
                                    // navigate to the home page
                                    navigate( '/request-service' );
        
                                } }
                            >
                                Request Service
                            </a>
                        </li>

                        {
                            /*
                                show the Hamburger menu only if the user's screen size is 1376px or less
                            */
                        }
                        {

                            // ==============================
                            // create DOM reference
                            // ==============================

                            // STEP 2 ( see below )
                    
                            // tie the initialized useRef variable from above into a specific DOM element so
                            // that we can reference that DOM element in our code

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
                                
                        }

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


