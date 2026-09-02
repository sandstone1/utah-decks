

// import in useRef
import { useRef } from 'react';
// import in the Nav component
import Nav from '../nav/nav-v1';
// import in our stylesheet
import styles from './header.module.scss';


// pass in scrollDirection from the index.js file
export default function Header( { scrollDirection } = {} ) {

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

    const headerContainerRef = useRef();

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
    // IMPORTANT!!
    // decided to turn off the show and hide header for this project and it would be more useful
    // to go with a position : sticky header for a typical site or an ecommerce site ( Airbnb uses
    // position sticky )
    // ==============================

    // ==============================
    // but keep the code in the layout section as reference in case we ever decide to go back to
    // this header solution
    // ==============================

    // ==============================
    // for our hero section, we would want the header background to be transparent at the top
    // of the page but as we start to scroll down, we would change the background to maybe
    // var( --gray-600 ) using our scroll logic below and keep it at var( --gray-600 ) on the
    // way down the page and on the way up the page until we get to the top of the page
    // and then we would change the background back to transparent
    // ( see https://www.logospropertycare.com/ for an example of this effect )
    // ==============================
/*
    // ==============================
    // useEffect 1
    // ==============================
    
    // ==============================
    // purpose - hide the header when scrolling down and show the header when scrolling up
    // and do so based on state or scrollDirection and scrollDirection is set in the index.js
    // file
    // ==============================

    // test
    // console.log( scrollDirection );

    useEffect(() => {

        // ==============================
        // code block 1
        // ==============================

        if ( headerContainerRef.current && scrollDirection === null ) {

            // test
            console.log( 'scrollDirection is null' );

            // if we are at the top of the page, remove both scrollUp and scrollDown
            headerContainerRef.current.classList.remove( styles.scrollUp );
            headerContainerRef.current.classList.remove( styles.scrollDown );

        }

        else if ( headerContainerRef.current && scrollDirection === 'up' ) {

            // test
            console.log( 'up is true' );

            // if we are scrolling up, add scrollUp and remove scrollDown
            headerContainerRef.current.classList.add( styles.scrollUp );
            headerContainerRef.current.classList.remove( styles.scrollDown );

        }
    
        else if ( headerContainerRef.current && scrollDirection === 'down' ) {

            // test
            console.log( 'down is true' );

            // if we are scrolling down, remove scrollUp and add scrollDown
            headerContainerRef.current.classList.add( styles.scrollDown );
            headerContainerRef.current.classList.remove( styles.scrollUp );

        }

    }, [ scrollDirection ] ); // end of useEffect 1
*/

    // ==============================
    // functions
    // ==============================




    return (

        // ==============================
        // container
        // ==============================

        <header className={ styles.headerContainer } ref={ headerContainerRef }>

            <Nav />

        </header>

    );

} // end of Header



