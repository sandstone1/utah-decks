


// import in useEffect, useRef hooks
import { useEffect, useRef } from 'react';
// import in our stylesheet
// import styles from './hamburger-menu-v1.module.scss';
import styles from './hamburger-menu.module.scss';


// pass down the showSideMenu properties from the nav component
export default function HamburgerMenuComponent( { showSideMenu } ) {

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

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing two useRef variables and we will call these variables " rect1Ref ",
    // " rect2Ref " and " rect3Ref "
    const rect1Ref = useRef();
    const rect2Ref = useRef();
    const rect3Ref = useRef();

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
    // useEffect(); #1
    // ==============================

    // remember, the initial page load will show the showSideMenu state as being false and
    // this will trigger the code below but nothing will happen to the hamburger menu item
    // since the code below matches the initial hamburger menu item state

    // however, once the side menu is open and then closed by either clicking the X or by
    // clicking outside the side menu or by pressing the escape key then the code below
    // will run again because the showSideMenu state at that point will be false

    // remember, the useEffect hook will be called each time the showSideMenu state
    // changes 
    useEffect( () => {

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // ==============================
        // animate the hamburger menu item to a new state
        // ==============================

        // ==============================
        // in this case, we will change the hamburger menu item to its open state
        // ==============================

        // ==============================
        // the code below runs (1) after the initial page load and (2) when the user
        // closes the side menu, thereby changing the showSideMenu state from true
        // to false
        // ==============================

        if (
            rect1Ref.current &&
            rect2Ref.current &&
            rect3Ref.current &&
            !showSideMenu
        ) {

            // testing
            // console.log( 'In useEffect' );

            // the anwser for the following changes came from caniuse or
            // " https://caniuse.com/?search=transform-origin " : " Only supported
            // for transformations applied using the CSS transform property
            // (e.g. .className { transform: rotate(45deg); transform-origin: center; }).
            // It has no effect on transformations applied using the transform SVG attribute
            // (e.g. <rect style=&quot;transform-origin: center;&quot; transform=&quot;rotate(45)&quot; />). "

            // reference the specified DOM elements below
            // rect1Ref.current.style.transition = 'y 150ms ease-out 150ms, rotate 150ms ease-out 0ms, opacity 0ms ease-out 150ms'; // iphone did not like this but worked for android
            // rect2Ref.current.style.transition = 'y 150ms ease-out 150ms, rotate 150ms ease-out 0ms, opacity 0ms ease-out 150ms'; // iphone did not like this but worked for android
            // rect3Ref.current.style.transition = 'y 150ms ease-out 150ms, rotate 150ms ease-out 0ms, opacity 0ms ease-out 150ms'; // iphone did not like this but worked for android

            rect1Ref.current.style.transition = 'y 150ms ease-out 150ms, transform 150ms ease-out 0ms, opacity 0ms ease-out 150ms';
            rect2Ref.current.style.transition = 'y 150ms ease-out 150ms, transform 150ms ease-out 0ms, opacity 0ms ease-out 150ms';
            rect3Ref.current.style.transition = 'y 150ms ease-out 150ms, transform 150ms ease-out 0ms, opacity 0ms ease-out 150ms';

            rect1Ref.current.style.transformOrigin = 'center';
            rect2Ref.current.style.transformOrigin = 'center';
            rect3Ref.current.style.transformOrigin = 'center';

            rect1Ref.current.setAttribute( 'y', '25' ); // this worked and the following did not
            // work in Firefox and Safari : " rect1Ref.current.style.y = '25'; "
            rect3Ref.current.setAttribute( 'y', '65' );

            // rect1Ref.current.style.rotate  = '0deg'; // iphone did not like this but worked for android
            // rect3Ref.current.style.rotate  = '0deg'; // iphone did not like this but worked for android

            rect1Ref.current.style.transform = 'rotate( 0deg )';
            rect3Ref.current.style.transform = 'rotate( 0deg )';

            rect2Ref.current.style.opacity = '1';

        } // end of if

    }, [ showSideMenu ] ) // end of useEffect #1

    // ==============================
    // functions
    // ==============================

    // ==============================
    // handleClick function
    // ==============================

    function handleClick( e ) {

        // testing
        // console.log( 'In handleClick' )

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 3

        // ==============================
        // animate the hamburger menu item to a new state
        // ==============================

        // ==============================
        // in this case, we will return the hamburger menu item to its initial state
        // ==============================

        // ==============================
        // the code below runs when the user clicks on the hamburger menu item so as to
        // open the side menu and remember when the user clicks on the hamburger menu item
        // the side menu will be hidden or the showSideMenu state will be false and this
        // will cause the code below to run
        // ==============================

        if (
            rect1Ref.current &&
            rect2Ref.current &&
            rect3Ref.current &&
            !showSideMenu
        ) {

            // testing
            // console.log( 'In the 2nd if statement' )

            // reference the specified DOM elements below
            // rect1Ref.current.style.transition = 'y 150ms ease-out 0ms, rotate 150ms ease-out 150ms, opacity 0ms ease-out 150ms'; // iphone did not like this but worked for android
            // rect2Ref.current.style.transition = 'y 150ms ease-out 0ms, rotate 150ms ease-out 150ms, opacity 0ms ease-out 150ms'; // iphone did not like this but worked for android
            // rect3Ref.current.style.transition = 'y 150ms ease-out 0ms, rotate 150ms ease-out 150ms, opacity 0ms ease-out 150ms'; // iphone did not like this but worked for android

            rect1Ref.current.style.transition = 'y 150ms ease-out 0ms, transform 150ms ease-out 150ms, opacity 0ms ease-out 150ms';
            rect2Ref.current.style.transition = 'y 150ms ease-out 0ms, transform 150ms ease-out 150ms, opacity 0ms ease-out 150ms';
            rect3Ref.current.style.transition = 'y 150ms ease-out 0ms, transform 150ms ease-out 150ms, opacity 0ms ease-out 150ms';

            rect1Ref.current.style.transformOrigin = 'center';
            rect2Ref.current.style.transformOrigin = 'center';
            rect3Ref.current.style.transformOrigin = 'center';

            rect1Ref.current.setAttribute( 'y', '45' ); // this worked and the following did not
            // work in Firefox and Safari : " rect1Ref.current.style.y = '45'; "
            rect3Ref.current.setAttribute( 'y', '45' );

            // rect1Ref.current.style.rotate  = '45deg'; // iphone did not like this but worked for android
            // rect3Ref.current.style.rotate  = '-45deg'; // iphone did not like this but worked for android

            rect1Ref.current.style.transform = 'rotate( 45deg )';
            rect3Ref.current.style.transform = 'rotate( -45deg )';

            rect2Ref.current.style.opacity = '0';

        } // end of if

        // the code below never ran since the useEffect hook if statement above ran first,
        // I believe, and therefore the code below never runs

        /*
            if (
                rect1Ref.current &&
                rect2Ref.current &&
                rect3Ref.current &&
                showSideMenu
            ) {

                console.log( 'In the 3rd if statement' )

                // reference the specified DOM elements below
                rect1Ref.current.style.transition = 'y 150ms ease-out 150ms, rotate 150ms ease-out 0ms, opacity 0ms ease-out 150ms';
                rect2Ref.current.style.transition = 'y 150ms ease-out 150ms, rotate 150ms ease-out 0ms, opacity 0ms ease-out 150ms';
                rect3Ref.current.style.transition = 'y 150ms ease-out 150ms, rotate 150ms ease-out 0ms, opacity 0ms ease-out 150ms';

                rect1Ref.current.style.transformOrigin = 'center';
                rect2Ref.current.style.transformOrigin = 'center';
                rect3Ref.current.style.transformOrigin = 'center';

                rect1Ref.current.setAttribute( 'y', '25' ); // this worked and the following did not
                // work in Firefox and Safari : " rect1Ref.current.style.y = '25'; "
                rect3Ref.current.setAttribute( 'y', '65' );

                rect1Ref.current.style.rotate  = '0deg';
                rect3Ref.current.style.rotate  = '0deg';

                rect2Ref.current.style.opacity = '1';

            } // end of if
        */

    } // end of handleClick

    // ==============================
    // svg information
    // ==============================

    /*
        the infomation on svg hamburger menu came from the following video by Kevin Powell :
        " https://www.youtube.com/watch?v=R00QiudbD4Y&t=1129s "

        remember, there are things we can do with svgs that we just can't do with a div or
        span tag

        remember, from Mozilla : " The viewBox attribute defines the position and dimension,
        in user space, of an SVG viewport. The value of the viewBox attribute is a list of
        four numbers: min-x , min-y , width and height. The numbers min-x and min-y represent
        the top left coordinates of the viewport. "
    */

    // ==============================
    // rect information
    // ==============================

    /*
        we are going to use a svg rectangle element

        remember, frpm w3 schools :
        " SVG has some predefined shape elements that can be used by developers:

        Rectangle <rect>
        Circle <circle>
        Ellipse <ellipse>
        Line <line>
        Polyline <polyline>
        Polygon <polygon>
        Path <path>

        The <rect> element is used to create a rectangle and variations of a rectangle shape:

        The width and height attributes of the <rect> element define the height and the width
        of the rectangle
        The style attribute is used to define CSS properties for the rectangle
        The CSS fill property defines the fill color of the rectangle
        The CSS stroke-width property defines the width of the border of the rectangle
        The CSS stroke property defines the color of the border of the rectangle 
        
        The rx and the ry attributes rounds the corners of the rectangle "

        remember, width="80" means that the width will take up 80% of the viewBox assuming
        the viewBox third value is 100 ( i.e. " viewBox="0 0 100 100" " )

        remember, height="10" means that the height will take up 10% of the viewBox assuming
        the viewBox fourth value is 100 ( i.e. " viewBox="0 0 100 100" " )
    */


    return (

        // ==============================
        // container
        // ==============================

        // ==============================
        // create DOM reference
        // ==============================

        // STEP 2 ( see below )

        // tie the initialized useRef variable from above into a specific DOM element so
        // that we can reference that DOM element in our code

        <div 
            className={ styles.hamburgerMenuContainer }
            onClick={ handleClick }
        >

            <button 
                className={ styles.hamburgerMenuContainerButton }
                aria-label="Hamburger Menu"
            >

                <svg
                    className={ styles.hamburgerMenuContainerButtonSvg }
                    viewBox="0 0 100 100" // setting the width and height to 100 will make
                    // the svg easier to work with
                    width="50" // this will make the svg box equal 50px * 50px and this
                    // will make the svg width equal 40px and the svg height equal 5px
                >

                    {
                        /*
                            // ==============================
                            // create DOM reference
                            // ==============================
                    
                            // STEP 2 ( see below )
                    
                            // tie the initialized useRef variable from above into a specific DOM element so
                            // that we can reference that DOM element in our code
                        */
                    }
                    <rect
                        className={ styles.hamburgerMenuContainerButtonSvgTopBar }
                        width="80" // since the viewBox width is 100 and the svg width is 50
                        // ( see above ) then a rect width of 80 will make the actual svg width
                        // equal to 40px
                        height="10" // since the viewBox width is 100 and the svg width is 50
                        // ( see above ) then a rect height of 10 will make the actual svg height
                        // equal to 5px
                        x="10" // this will move the rect to the right by 5px
                        // 5 ( x=10 ) + 40 ( width ) + 5 = 50 and this will center the width
                        // bar
                        y="25" // this will move the rect bar down 25px
                        rx="5" // this rounds the corners of the bar and just declaring
                        // rx and not ry seemed to work just fine

                        // Kevin Powell said the rx value should be one half of the x value
                        // and so in this case the rx value should be 5
                        ref={ rect1Ref }
                    />

                    <rect
                        className={ styles.hamburgerMenuContainerButtonSvgMiddleBar }
                        width="80" // since the viewBox width is 100 and the svg width is 50
                        // ( see above ) then a rect width of 80 will make the actual svg width
                        // equal to 40px
                        height="10" // since the viewBox width is 100 and the svg width is 50
                        // ( see above ) then a rect height of 10 will make the actual svg height
                        // equal to 5px
                        x="10" // this will move the rect to the right by 5px
                        // 5 ( x=10 ) + 40 ( width ) + 5 = 50 and this will center the width
                        // bar
                        y="45" // this will move the rect bar down 45px
                        rx="5" // this rounds the corners of the bar and just declaring
                        // rx and not ry seemed to work just fine
                        ref={ rect2Ref }
                    />

                    <rect
                        className={ styles.hamburgerMenuContainerButtonSvgBottomBar }
                        width="80" // since the viewBox width is 100 and the svg width is 50
                        // ( see above ) then a rect width of 80 will make the actual svg width
                        // equal to 40px
                        height="10" // since the viewBox width is 100 and the svg width is 50
                        // ( see above ) then a rect height of 10 will make the actual svg height
                        // equal to 5px
                        x="10" // this will move the rect to the right by 5px
                        // 5 ( x=10 ) + 40 ( width ) + 5 = 50 and this will center the width
                        // bar
                        y="65" // this will move the rect bar down 65px
                        rx="5" // this rounds the corners of the bar and just declaring
                        // rx and not ry seemed to work just fine
                        ref={ rect3Ref }
                    />

                </svg>

            </button>

        </div>

    );

} // end of HamburgerMenuComponent

