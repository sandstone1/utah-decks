



// import in Fragment, useEffect, useRef, useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in the scss file
import styles from './letters.module.scss';



export default function LettersAnimationComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ startingScrollPosition, setStartingScrollPosition ]                       = useState( 0 );
    const [ scrollPositionInsideDiv, setScrollPositionInsideDiv ]                     = useState( 0 );
    const [ scrollPositionInsideDivPercentage, setScrollPositionInsideDivPercentage ] = useState( 0 );
    let   [ index, setIndex ]                                                         = useState( 0 );
    const [ letters, setLetters ]                                                     = useState();
    

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

    // use the useRef(); hook to create a reference to a DOM element(s)
    const containerRef  = useRef();
    const wrapperRef    = useRef();
    const h2Ref         = useRef( [ 'Why, Work, With, Us?' ] );
    const spanLetterRef = useRef( [] );


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
    // purpose - fade in the contents of the section
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // ==============================
        // intersection observer 1
        // ==============================

        // ==============================
        // use the web animations api for the animation
        // ==============================

        // options object
        const containerOptions = {

            root : null, // this is the default and this means our viewport is the canvas
            // we are working with here
            threshold : 0.0, // this value can be between 0 and 1 and 0 is the default and
            // 0 means that as soon as any little piece enters the defined viewport the
            // intersection observer will fire
            rootMargin : '0px 0px 0px 0px' // this works like margin in css and this
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
        // containerObserver
        const containerObserver = new IntersectionObserver( 

            // we pass in 2 arguments to the IntersectionObserver : a function and an
            // options object

            // the first argument ( i.e. the function )
            function( entries, containerObserver ) { 

                entries.forEach( ( entry ) => {

                    // if our element is in the viewport then do something
                    if ( entry.isIntersecting ) {

                        // log the entry to console so that we can see the 
                        // IntersectionObserverEntry object and what we are concerned
                        // with is the isIntersecting value
                        console.log( entry );

                        // ==============================
                        // start of animation
                        // ==============================

                        const handleScroll = ( e ) => {

                            // make sure our references exist before running the code below
                            if ( containerRef.current && wrapperRef.current && h2Ref.current && spanLetterRef ) {

                                // indicate where we are at in the code
                                console.log( 'In handleScroll' );

                                // ==============================
                                // set the index
                                // ==============================

                                // to set a new index value everytime the scroll event is called we have
                                // to ( 1 ) do " index = index + 1; " and ( 2 ) " setIndex( index ); "
                                index = index + 1;

                                // save the index to state
                                setIndex( index );

                                // show the index value
                                console.log( 'Index :', index );

                                // ==============================
                                // show the event object
                                // ==============================

                                console.log( 'Event :', e );

                                // show the event timestamp value
                                console.log( 'Event timestamp :', e.timeStamp );

                                // ==============================
                                // start of building block code
                                // ==============================

                                // getBoundingClientRect() gives us all kinds of good information
                                console.log( 'getBoundingClientRect() :', containerRef.current.getBoundingClientRect() );

                                // show the height of the div in question
                                console.log( 'getBoundingClientRect().height :', containerRef.current.getBoundingClientRect().height );

                                // show the scroll value to the top of the screen or window
                                console.log( 'window.scrollY :', window.scrollY );

                                // show the starting scroll position from the top of the div
                                // to the top of the screen or window
                                console.log( 'startingScrollPosition :', startingScrollPosition );

                                // get the scroll position inside the div
                                const scrollPositionInsideDiv = startingScrollPosition - window.scrollY;

                                // show the scroll position inside the div
                                console.log( 'scrollPositionInsideDiv :', -scrollPositionInsideDiv );

                                // set the scroll position inside the div
                                setScrollPositionInsideDiv( scrollPositionInsideDiv );

                                // get the scroll position percentage inside the div
                                // and remember this number will be betweem 0 and 1
                                const scrollPositionInsideDivPercentage = -scrollPositionInsideDiv / containerRef.current.getBoundingClientRect().height;

                                // set the scroll position percentage inside the div
                                setScrollPositionInsideDivPercentage( scrollPositionInsideDivPercentage );

                                // show the scroll position percentage inside the div
                                console.log( 'scrollPositionInsideDivPercentage :', scrollPositionInsideDivPercentage );

                                // get pageYOffset and scrollY for reference purposes and remember
                                // pageYOffset has been depreciated
                                const { pageYOffset, scrollY } = window;

                                // show pageYOffset and scrollY
                                console.log( 'pageYOffset :', pageYOffset, 'scrollY :', scrollY );

                                // ==============================
                                // end of building block code
                                // ==============================

                                // ==============================
                                // animation - fade in the h2 letters
                                // part 2
                                // ==============================

                                // ==============================
                                // start of the letters animation code
                                // ==============================

                                // show the first span element
                                console.log( 'First span element :', spanLetterRef.current[ 0 ] );

                                // show the second span element
                                console.log( 'Second span element :', spanLetterRef.current[ 1 ] );

                                // provide the spacing between the words at time 0
                                spanLetterRef.current[ 2 ].style.margin  = '0 1.0rem 1.5rem 0';
                                spanLetterRef.current[ 7 ].style.margin  = '0 1.0rem 1.5rem 0';
                                spanLetterRef.current[ 12 ].style.margin = '0 1.0rem 1.5rem 0';

                                // ==============================
                                // remember, I decided not to use the range values; instead used
                                // values that looked good while scrolling down the page
                                // ==============================

                                // fade in 1 letter based on scroll position
                                if ( scrollPositionInsideDivPercentage > 0.075 && scrollPositionInsideDivPercentage <= 0.0809 ) {

                                    console.log( '1 letter' );

                                    spanLetterRef.current[ 0 ].style.opacity    = 1;
                                    spanLetterRef.current[ 0 ].style.transition = '200ms';

                                } // end of if

                                // fade in 2 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.081 && scrollPositionInsideDivPercentage <= 0.0869 ) {

                                    console.log( '2 letter' );

                                    spanLetterRef.current[ 1 ].style.opacity    = 1;
                                    spanLetterRef.current[ 1 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 3 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.087 && scrollPositionInsideDivPercentage <= 0.0929 ) {

                                    console.log( '3 letter' );

                                    spanLetterRef.current[ 2 ].style.opacity    = 1;
                                    spanLetterRef.current[ 2 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 4 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.93 && scrollPositionInsideDivPercentage <= 0.0989 ) {

                                    console.log( '4 letter' );

                                    spanLetterRef.current[ 3 ].style.opacity    = 1;
                                    spanLetterRef.current[ 3 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 5 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.099 && scrollPositionInsideDivPercentage <= 0.1049 ) {

                                    console.log( '5 letter' );

                                    spanLetterRef.current[ 4 ].style.opacity    = 1;
                                    spanLetterRef.current[ 4 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 6 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.105 && scrollPositionInsideDivPercentage <= 0.1109 ) {

                                    console.log( '6 letter' );

                                    spanLetterRef.current[ 5 ].style.opacity    = 1;
                                    spanLetterRef.current[ 5 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 7 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.111 && scrollPositionInsideDivPercentage <= 0.1169 ) {

                                    console.log( '7 letter' );

                                    spanLetterRef.current[ 6 ].style.opacity    = 1;
                                    spanLetterRef.current[ 6 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 8 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.117 && scrollPositionInsideDivPercentage <= 0.1229 ) {

                                    console.log( '8 letter' );

                                    spanLetterRef.current[ 7 ].style.opacity    = 1;
                                    spanLetterRef.current[ 7 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 9 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.123 && scrollPositionInsideDivPercentage <= 0.1289 ) {

                                    console.log( '9 letter' );

                                    spanLetterRef.current[ 8 ].style.opacity    = 1;
                                    spanLetterRef.current[ 8 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 10 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.129 && scrollPositionInsideDivPercentage <= 0.1349 ) {

                                    console.log( '10 letter' );

                                    spanLetterRef.current[ 9 ].style.opacity    = 1;
                                    spanLetterRef.current[ 9 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 11 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.135 && scrollPositionInsideDivPercentage <= 0.1409 ) {

                                    console.log( '11 letter' );

                                    spanLetterRef.current[ 10 ].style.opacity    = 1;
                                    spanLetterRef.current[ 10 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 12 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.141 && scrollPositionInsideDivPercentage <= 0.1479 ) {

                                    console.log( '12 letter' );

                                    spanLetterRef.current[ 11 ].style.opacity    = 1;
                                    spanLetterRef.current[ 11 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 13 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.148 && scrollPositionInsideDivPercentage <= 0.1539 ) {

                                    console.log( '13 letter' );

                                    spanLetterRef.current[ 12 ].style.opacity    = 1;
                                    spanLetterRef.current[ 12 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 14 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.154 && scrollPositionInsideDivPercentage <= 0.1599 ) {

                                    console.log( '14 letter' );

                                    spanLetterRef.current[ 13 ].style.opacity    = 1;
                                    spanLetterRef.current[ 13 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 15 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.160 && scrollPositionInsideDivPercentage <= 0.1659 ) {

                                    console.log( '15 letter' );

                                    spanLetterRef.current[ 14 ].style.opacity    = 1;
                                    spanLetterRef.current[ 14 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 16 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.166 && scrollPositionInsideDivPercentage <= 0.1719 ) {

                                    console.log( '16 letter' );

                                    spanLetterRef.current[ 15 ].style.opacity    = 1;
                                    spanLetterRef.current[ 15 ].style.transition = '200ms';

                                } // end of else if

                                // fade in 17 letter based on scroll position
                                else if ( scrollPositionInsideDivPercentage > 0.172 && scrollPositionInsideDivPercentage <= 0.1779 ) {

                                    console.log( '17 letter' );

                                    spanLetterRef.current[ 16 ].style.opacity    = 1;
                                    spanLetterRef.current[ 16 ].style.transition = '200ms';

                                } // end of else if

                                // catch all if statement, in case we don't catch all the letters
                                // while scrolling
                                else if ( scrollPositionInsideDivPercentage > 0.180 ) {

                                    spanLetterRef.current[ 0 ].style.opacity    = 1;
                                    spanLetterRef.current[ 0 ].style.transition = '200ms';
                                    spanLetterRef.current[ 1 ].style.opacity    = 1;
                                    spanLetterRef.current[ 1 ].style.transition = '200ms';
                                    spanLetterRef.current[ 2 ].style.opacity    = 1;
                                    spanLetterRef.current[ 2 ].style.transition = '200ms';
                                    spanLetterRef.current[ 3 ].style.opacity    = 1;
                                    spanLetterRef.current[ 3 ].style.transition = '200ms';
                                    spanLetterRef.current[ 4 ].style.opacity    = 1;
                                    spanLetterRef.current[ 4 ].style.transition = '200ms';
                                    spanLetterRef.current[ 5 ].style.opacity    = 1;
                                    spanLetterRef.current[ 5 ].style.transition = '200ms';
                                    spanLetterRef.current[ 6 ].style.opacity    = 1;
                                    spanLetterRef.current[ 6 ].style.transition = '200ms';
                                    spanLetterRef.current[ 7 ].style.opacity    = 1;
                                    spanLetterRef.current[ 7 ].style.transition = '200ms';
                                    spanLetterRef.current[ 8 ].style.opacity    = 1;
                                    spanLetterRef.current[ 8 ].style.transition = '200ms';
                                    spanLetterRef.current[ 9 ].style.opacity    = 1;
                                    spanLetterRef.current[ 9 ].style.transition = '200ms';
                                    spanLetterRef.current[ 10 ].style.opacity    = 1;
                                    spanLetterRef.current[ 10 ].style.transition = '200ms';
                                    spanLetterRef.current[ 11 ].style.opacity    = 1;
                                    spanLetterRef.current[ 11 ].style.transition = '200ms';
                                    spanLetterRef.current[ 12 ].style.opacity    = 1;
                                    spanLetterRef.current[ 12 ].style.transition = '200ms';
                                    spanLetterRef.current[ 13 ].style.opacity    = 1;
                                    spanLetterRef.current[ 13 ].style.transition = '200ms';
                                    spanLetterRef.current[ 14 ].style.opacity    = 1;
                                    spanLetterRef.current[ 14 ].style.transition = '200ms';
                                    spanLetterRef.current[ 15 ].style.opacity    = 1;
                                    spanLetterRef.current[ 15 ].style.transition = '200ms';
                                    spanLetterRef.current[ 16 ].style.opacity    = 1;
                                    spanLetterRef.current[ 16 ].style.transition = '200ms';

                                } // end of else if

                                // ==============================
                                // animation - fade in the h2 letters
                                // part 2
                                // ==============================

                                // ==============================
                                // end of the letters animation code
                                // ==============================

                            } // end of if

                        }; // end of handleScroll

                        // ==============================
                        // animation - fade in the h2 letters
                        // part 1
                        // ==============================

                        // show the containerRef
                        console.log( 'containerRef :', containerRef.current );

                        // get the pixel value of the distance between the top of the screen or window
                        // and the top of the container div
                        let startingScrollPosition = window.scrollY;

                        // set the state and then use this value inside the handleScroll function
                        // above
                        setStartingScrollPosition( startingScrollPosition );

                        // show the startingScrollPosition value
                        console.log( 'startingScrollPosition :', startingScrollPosition );

                        // let's keep all this code inside useEffect as an educational
                        // reference in case I need some code like this in the future
                        console.log( 'h2Ref :', h2Ref.current.innerText );

                        // this will create an array of letters from " Why Word With Us? "
                        // or an array of 17 letters
                        let letters = h2Ref.current.innerText.split( '' );

                        // show the array of 17 letters
                        console.log( 'letters :', [ ...letters ] );

                        // set the array of letters and [ ...letters ] will create an array
                        // of 17 letters
                        setLetters( [ ...letters ] );

                        // show the array of 17 letters
                        console.log( 'letters :', letters );

                        // remember, containerRef.current only runs when we are scrolling on the
                        // container; whereas, window.addEventListener() only runs when we are
                        // scrolling the window

                        // containerRef.current.addEventListener( 'scroll', handleScroll, false );

                        // in almost all cases, we will be scrolling the window
                        window.addEventListener( 'scroll', handleScroll, false );

                        // ==============================
                        // animation - fade in the h2 letters
                        // part 1
                        // ==============================

                        // ==============================
                        // end of animation
                        // ==============================

                        // once the observation happens then we want to unobserve the DOM
                        // element
                        containerObserver.unobserve( containerRef.current );

                    } // end of if

                } ) // end of entries.forEach()

            }, // end of function( entries, containerObserver )

            containerOptions // the second argument

        ); // end of new IntersectionObserver()

        // let's have the observer observe our selected DOM element and then do something
        // once the DOM element enters the viewport and remember the criteria for when a
        // DOM element enters the viewport or triggers entry.isIntersecting is determined
        // by the options object above
        containerObserver.observe( containerRef.current );

        // ==============================
        // end of intersection observer 1
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


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // container
                    // ==============================
                */
            }
            <div 
                className={ styles.lettersAnimationContainer }
                ref={ containerRef }
                // style={ { overflowY : 'scroll', height : '2000px' } } // this how to create a container that we can scroll
                // and this allows us to use containerRef.current inside useEffect to call the handleScroll function; otherwise,
                // we have to use window.addEventListener in order to call the handleScroll function and remember in almost cases
                // we are scrolling the window and not the container and therefore we have to add some math inside the
                // handleScroll function to get how much we have scrolled the container but once we get that number then we can
                // do all kinds of scroll driven animations
            >

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
                        style={ { display : 'none' } } // instead of just creating a words string,
                        // let's hide this element and then keep all this code inside useEffect as
                        // an educational reference in case I need some code like this in the future
                    >
                        Why Work With Us?
                    </h2>

                    <h2>

                        {

                            letters ? (

                                letters.map( ( letter, i ) => {

                                    return (
                                        <span
                                            key={ i }
                                            style={ 
                                                { 
                                                    display    : 'inline-block',
                                                    fontFamily : 'Roboto Condensed',
                                                    fontSize   : '4.0rem',
                                                    fontWeight : '700',
                                                    color      : 'var( --gray-870 )',
                                                    opacity    : 0.1
                                                }
                                            }
                                            ref={ ( ref ) => ( spanLetterRef.current[ i ] = ref ) } // rememeber, this code came from an anwser in stackoverflow :
                                            // " https://stackoverflow.com/questions/62386786/how-do-i-assign-ref-to-each-element-rendered-by-array-mapping-and-how-do-i-refer "
                                            // " Initialize the reference as an array, and for each index assign the related reference. "
                                        >
                                            { letter }
                                        </span>
                                    )

                                } )

                            ) : null

                        }
                    
                    </h2>

                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus laoreet ut aptent
                        habitant donec habitasse arcu. Litora eget vitae inceptos, mollis tincidunt lorem
                        cras natoque. Curae volutpat semper vel aptent curae non tristique maecenas.
                        Vestibulum eget eu urna nulla dictumst pharetra mus metus. Cubilia interdum auctor
                        mollis euismod ultrices quis. Porttitor class maecenas magnis pulvinar conubia.
                        Nascetur torquent nullam vulputate blandit placerat platea finibus. Dui libero
                        sodales nam natoque rutrum velit efficitur venenatis.
                    </p>

                    <p>
                        Eget integer magnis ante maximus purus congue scelerisque sit. Duis pretium tempus
                        proin rhoncus purus quis. Sollicitudin litora viverra natoque pharetra diam finibus
                        cursus. Penatibus magnis nam etiam pharetra justo finibus. Pharetra scelerisque
                        dictumst nisl semper tincidunt? Hendrerit nascetur et per torquent senectus
                        phasellus primis. Ornare habitant nam fringilla ultrices diam donec vel lectus!
                        Scelerisque phasellus cursus quam, justo sed hac pretium. Leo posuere augue
                        feugiat nam scelerisque suspendisse porttitor. Suscipit vestibulum himenaeos massa
                        taciti morbi sagittis, ultricies sociosqu.
                    </p>

                    <p>
                        Himenaeos lorem rhoncus conubia lacus mi augue a integer. Pellentesque ligula
                        nullam varius sollicitudin eros imperdiet elit sit. Euismod rhoncus phasellus
                        torquent hendrerit praesent tempor in. Magna fermentum congue tortor metus
                        ipsum vel gravida. Dictum eget purus vulputate taciti dignissim placerat
                        habitasse tempus turpis. Habitant cras nisl praesent egestas platea felis
                        fringilla porta nec. Interdum pulvinar sociosqu nostra metus volutpat nullam
                        leo molestie. Fringilla cras nulla morbi eros ipsum sodales. Sociosqu congue
                        ex facilisis massa; aptent quis netus. Duis convallis ridiculus varius risus
                        odio praesent est.
                    </p>

                    <p>
                        Ante quisque arcu lobortis; elementum ornare nullam commodo sem commodo. Mauris
                        integer curae lacus, non ut lectus odio. Semper a odio tincidunt litora sapien
                        ac. Cursus dignissim vel molestie vel; finibus nullam fermentum. Sodales arcu
                        parturient id nisl platea diam. Laoreet tempor laoreet ut etiam blandit sed ex.
                        Massa turpis velit nisl dictum eros.
                    </p>

                    <p>    
                        Porta semper orci sapien litora tincidunt porta, taciti hac. Lacinia curabitur
                        non platea nibh nisi urna ornare. Aliquet magna adipiscing varius fusce
                        vestibulum. Eu lacinia tincidunt a, luctus eu sociosqu. Curae libero nec
                        litora lectus aliquam pellentesque. Nullam dictum non ridiculus adipiscing
                        tempor lectus bibendum ultrices tempus. Malesuada duis donec velit; aenean
                        vehicula convallis vestibulum accumsan. Platea placerat neque conubia nisl
                        non turpis litora condimentum. Iaculis ac finibus semper fames donec, tempor
                        vulputate quam.
                    </p>

                    <p>
                        Eget volutpat ad bibendum massa torquent, donec condimentum fermentum.
                        Condimentum ad dapibus commodo torquent torquent tincidunt. Non quis eu;
                        facilisis eget nibh posuere. Habitant penatibus blandit tempus blandit
                        nunc dignissim morbi placerat semper. Tempor amet finibus taciti aliquam
                        elit tempor. Dictum iaculis erat urna et est laoreet.
                    </p>

                    <p>
                        Est at maecenas suspendisse pharetra ultricies, vestibulum integer mi.
                        Rhoncus vitae suscipit felis facilisis natoque felis suspendisse. Euismod
                        magnis iaculis malesuada dapibus tristique tincidunt phasellus. Eu mollis
                        sociosqu placerat lectus etiam. Habitasse consectetur diam per natoque
                        scelerisque est vulputate. Taciti ultrices eleifend nascetur, himenaeos
                        adipiscing sagittis quam ligula posuere. Dis cursus taciti pellentesque
                        faucibus ante molestie id. Pretium torquent adipiscing sollicitudin tortor
                        consectetur adipiscing.
                    </p>

                    <p>
                        At lacus luctus per fermentum sollicitudin parturient. Sollicitudin justo
                        netus ex auctor est porta purus. Primis inceptos penatibus vivamus platea
                        porttitor malesuada interdum laoreet venenatis. Metus ligula auctor lacus
                        class non. Quam cubilia sem faucibus semper nec feugiat faucibus. Donec
                        inceptos eleifend posuere inceptos integer ipsum class platea. Ante primis
                        aliquam diam dolor massa commodo sagittis nibh quisque. Quam tincidunt nam
                        tempus donec per etiam. Potenti senectus facilisi ridiculus torquent metus
                        lacinia. Leo quis ipsum nascetur mi montes dis leo efficitur.
                    </p>

                    <p>
                        Convallis aliquet iaculis rhoncus sagittis, maximus nam. Dolor nam neque
                        porta molestie; nisl sapien sapien. Risus ultrices aenean pretium per
                        imperdiet orci cursus eget. Senectus himenaeos litora inceptos vehicula
                        feugiat fusce. Proin ridiculus venenatis eros ex diam non suspendisse nulla.
                        Eros donec volutpat non sagittis cubilia, mus sociosqu. Morbi hendrerit
                        dictum elit gravida nam mus. Pulvinar sodales placerat a; molestie aliquam
                        quam velit dictum. Ullamcorper malesuada volutpat senectus massa dapibus
                        scelerisque per porttitor ornare.
                    </p>

                    <p>
                        Conubia eu nullam natoque adipiscing turpis eu; imperdiet ultricies
                        sollicitudin. Eros risus et cubilia ultrices tempus ipsum; interdum elementum?
                        Odio accumsan ultricies tincidunt, nisi molestie vulputate. Tempus etiam
                        maecenas fermentum ultricies metus ultricies phasellus? Ac condimentum
                        fringilla scelerisque gravida tincidunt nunc leo. Tempus amet fermentum
                        pellentesque efficitur elementum.
                    </p>

                    <p>
                        Mattis molestie nunc finibus condimentum leo nascetur. Nam duis interdum
                        aptent; senectus aenean morbi quis taciti. In varius semper placerat per
                        tincidunt vitae convallis. Venenatis leo fames class magna at faucibus
                        sapien ac. Laoreet magna per tempor tempor eget condimentum ante. Dapibus
                        urna litora ad lectus justo vulputate condimentum. Dapibus facilisis
                        mattis mattis mi lacus elementum.
                    </p>

                    <p>
                        Aliquam ad habitasse dictum dapibus nostra fusce. Consectetur eu tortor
                        etiam litora malesuada. Laoreet auctor habitasse integer nunc elit
                        praesent arcu. Pretium faucibus hendrerit aliquam platea fermentum facilisis.
                        Ex integer eget fermentum scelerisque efficitur vitae. Laoreet fermentum
                        commodo sed sollicitudin justo neque.
                    </p>

                    <p>                        
                        Laoreet vivamus dolor turpis parturient hendrerit cursus purus. Dictum
                        senectus vitae auctor imperdiet, phasellus pharetra. Sed etiam curae
                        efficitur ut eu. Phasellus lobortis mus gravida molestie phasellus vel
                        volutpat tempor ornare. Facilisi vivamus imperdiet blandit odio erat et
                        libero. Donec porta nunc ultrices praesent arcu. Vulputate rutrum amet
                        consequat nullam eleifend facilisis himenaeos.
                    </p>

                    <p>
                        Justo commodo blandit torquent nascetur sollicitudin. Dis primis fames
                        cursus risus aptent. Est pharetra luctus nulla imperdiet laoreet.
                        Rutrum tempus class potenti tristique accumsan dignissim. Habitasse
                        accumsan habitant netus parturient rhoncus; commodo diam gravida. Ante
                        feugiat mauris eleifend ut quis porttitor. In euismod tristique fringilla
                        ipsum leo; blandit suspendisse fringilla massa. Luctus fringilla
                        convallis risus erat pharetra sociosqu? Integer nullam per habitant
                        aenean tincidunt aptent per penatibus.
                    </p>
                        
                    <p>
                        Ipsum et vehicula rutrum arcu suscipit vestibulum; tortor risus posuere.
                        Eget curabitur commodo proin pharetra venenatis sapien pellentesque
                        habitant. Aptent tincidunt orci lacus augue fermentum eros arcu. Enim
                        porta senectus malesuada quis orci. Sed leo tellus eget quis convallis
                        per metus ligula. Amet torquent ipsum class, nisi class nisi. Mattis
                        senectus et class gravida nibh vitae.
                    </p>

                </div>

            </div>

        </Fragment>

    );

} // end of LettersAnimationComponent


