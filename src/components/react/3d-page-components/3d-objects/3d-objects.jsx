

// import in Fragment, the useEffect, useRef, useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in useProgressBarStore1 hook from the zustand store
import useProgressBarStore1 from '../../../../state/zustand/stores/store-progress-bar-1';
// 3D Three.js
// import in the Sphere three.js golf ball component from Gary Simon
import SphereGolfBallComponent from '../../3d/three-js/gary-simon/sphere-golf-ball';
// 3D Three.js
// import in the Torus three.js hemi light component from Robot Bobby
import TorusHemiLightComponent from '../../3d/three-js/robot-bobby/torus/torus-hemi-light';
// 3D R3F
// import in the Cube Textures three.js component from Olivier Larose
import CubeTexturesComponent from '../../3d/react-three-fiber/olivier-larose/cube/cube-textures';
// 3D R3F
// import in the Sphere R3F earth component from Coder One
import ThreeDEarthComponent from '../../3d/react-three-fiber/coder-one/sphere/earth';
// import in our stylesheet
import styles from './3d-objects.module.scss';



export default function ThreeDObjectsPage() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ progressBarCompleted, setProgressBarCompleted ] = useState( false );
    const [ show3DObject, setShow3DObject ]                 = useState( false );

    // ==============================
    // IMPORTANT!
    // IMPORTANT!
    // IMPORTANT!
    // ==============================

    // remember, to keep your types straight since I was thinking the value of
    // " `${ progressBarStoreState }` " was a Boolean and not a String and I was trying to
    // get this value to work in an if statement in useEffect 2, when all along
    // " `${ progressBarStoreState }` " was a String and therefore I could not get the
    // code and logic to work no matter what I tried even though I could see from many
    // console.logs that it should work just fine but once I changed
    // " `${ progressBarStoreState }` " to " progressBarStoreState " and realized that
    // " progressBarStoreState " was a Boolean then I was good to go
    
    // remember, progressBarStoreState below is being set to a string and not Boolean
    // const [ progressBarStoreState, setProgressBarStoreState ] = useState( `${ progressBarStoreState }` );

    // ==============================
    // zustand state
    // ==============================

    // here I get the initial value from the zustand store for the progressBarStoreState,
    // which is false and I can display inside return() below
    const progressBarStoreState = useProgressBarStore1( ( state ) => state.progressBarStoreState );

    // use the useProgressBarStore hook from the zustand store to access the
    // toggleProgressBarStoreState function and then call the toggleProgressBarStoreState
    // function by clicking on the button below and this will toggle the progressBarStoreState
    // from false to true and then true to false
    const toggleProgressBarStoreState = useProgressBarStore1( ( state ) => state.toggleProgressBarStoreState );

    // use the useProgressBarStore hook from the zustand store to access the
    // setProgressBarStoreState function and then call the setProgressBarStoreState function
    // in the useEffect 2 below and this will set the progressBarStoreState to true and then
    // we can access this value later
    const setProgressBarStoreState = useProgressBarStore1( ( state ) => state.setProgressBarStoreState );

    // ==============================
    // destructure props
    // ==============================

    // ==============================
    // define variables
    // ==============================

    let barWidth = 0;

    // ==============================
    // useRef();
    // ==============================

    const containerRef            = useRef();
    const progressBarContainerRef = useRef();
    const progressBarRef          = useRef();

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
    // purpose - good example of a progress bar running for 5 seconds after
    // page load
    // ==============================

/*
    useEffect( () => {

        // make sure containerRef.current exist before changing the page
        // layout
        if ( containerRef.current ) {

            // hide the 3D model container on page load
            containerRef.current.style.display    = 'none',

            // show the progress bar container on page load
            progressBarContainerRef.current.style.display = 'grid'

            // ==============================
            // for information on how to set up and animate the progress bar,
            // please " https://codepen.io/jessica-wilkins/pen/yLXNojz "
            // ==============================

            // call setTimeout
            setTimeout( () => {

                // remember, this will increment barWidth by 1 every 50 milliseconds
                // until barWidth reaches 100 or 5 seconds later so the progress bar
                // will 1 / 100 of the 50vw width ( see the scss file for details )
                // after 50 milliseconds and our --blue-95 color will represent the
                // progress bar animation or progress or the progress from one end of
                // the progress bar container to the other end
                let progressBarInterval = setInterval( () => {

                    if ( barWidth === 100 ) {

                        clearInterval( progressBarInterval );

                        // show the 3D model container
                        containerRef.current.style.display = 'grid'
                        // hide the progress bar container
                        progressBarContainerRef.current.style.display = 'none'

                    } else {

                        // increment bar width by 1 every 50 milliseconds
                        barWidth++;

                        // test
                        // console.log( barWidth );

                        // show the progress bar completion
                        progressBarRef.current.style.width = `${ barWidth }%`;

                    } // end of if else

                }, 50 ); // this sets the speed of the animation or we are
                // calling the setInterval function every 50 milliseconds
                // or 50 * 100 means it will take 5000 milliseconds to run
                // the setInterval function to completion

            }, 0 ); // animation starts 0 milliseconds after page load
  
        } // end of if

    }, [] ); // end of useEffect 1
*/

    // ==============================
    // useEffect 2
    // ==============================

    // ==============================
    // IMPORTANT!
    // ==============================
    // step by step process :
    // 1 - in the child component or the cube textures component, the drei Loader
    // component will throw off a progress variable and we can use that variable
    // to determine when the 3d object has finished loading and as soon as that
    // happens we can change state in the cube textures component and then call a
    // function that passes the state data to the parent component or the 3d objects
    // component and
    // 2 - then once we have that value will is the Boolean true, we can change the
    // progressBarCompleted state to true in this component
    // 3 - in the componnet, useEffect 2 is running once on page load and
    // progressBarCompleted is false so nothing happens but we are showing an
    // empty progress bar on page load and
    // 4 - useEffect 2 will run a second time once the progressBarCompleted state
    // changes and it changed in step 2 above so once that happens, useEffect 2
    // will run a second time and this time progressBarCompleted is the Boolean
    // true so the setTimeout function will run, triggering the running of the
    // progress bar and
    // 5 - after the setTimeout function has run then we will call setProgressBarStoreState
    // function from the zustand store and this will make the progressBarStoreState
    // value equal the Booleann true ( note : we can make the progressBarStoreState
    // value equal the String ' true ' by doing `${ progressBarStoreState }` )
    // and we will use this new value in step 8 below
    // 6 - and then if the user goes to another page in our app, like the contact
    // page and then comes back to the 3d objects page, then useEffect 2 will run again
    // on component mount and
    // 7 - this time the progressBarCompleted will be false since for whatever reason
    // the drei Loader component is not running again; however,
    // 8 - progressBarStoreState is the Boolean true so we can use this
    // value to trigger our setTimeout function in useEffect 2, which will run the
    // progress bar a second time 
    // 9 - but without waiting for the drei Loader component to load the 3d object
    // ( see #7 above ) but this is not really a problem since on the second and
    // subsequent component mounts, I believe the browser has already cached
    // the objects so they come really fast anyway on the second and subsequent
    // component mounts
    // ==============================

    // ==============================
    // this actually works and the way it works is by showing the progress bar
    // on page load and then once the drei progress bar reaches 100 or completes
    // then that will change state in the child component ( cube textures
    // component ) which will then change the state in the parent component or
    // this component and then the progress bar in useEffect 2 will run to
    // completion or from 0% to 100% and after the progress bar completes then
    // the page will render
    // ==============================

    // ==============================
    // in essence we are creating our own progress bar and text that will start
    // on page load and end when progressBarCompleted is true, which means that
    // the drei progress bar has completed or in other words the 3d object has
    // finished loading 
    // ==============================

    // ==============================
    // the only real downside here is that it may take a second for the progress
    // bar to start in earnest but the progress bar only runs for 1 second and
    // at least in this case we are showing an indicator up front and one that is
    // reliable and provides for a good user experience and works within the structure
    // and confines of our app; something we could not get the drei Loader component
    // to do
    // ==============================

    // ==============================
    // remember, it is important to point out that I got drei Loader component work
    // well but it did work well within my page structure; however, if I only loaded
    // one object or one model and that was the only code on the page ( i.e. like almost
    // every tutorial out there ) then the drei Loader component would have been just fine
    // ==============================

    // ==============================
    // remember, useEffect 2 will run on page load and will run when the
    // progressBarCompleted states changes from false to true and will not run again
    // since the progressBarCompleted state will never change back to false during an
    // active session; however, with a page refresh or a new page view from a new user
    // the entire process will start over
    // ==============================

    // ==============================
    // for information on how to set up and animate the progress bar, please see
    // " https://codepen.io/jessica-wilkins/pen/yLXNojz "
    // ==============================

    useEffect( () => {

        // ==============================
        // code block 1
        // ==============================

        // test
        console.log( 'In useEffect 2' );
        // test
        console.log( progressBarCompleted );
        // test
        console.log( `${ progressBarStoreState }` );
        // test
        console.log( progressBarStoreState );
        // test
        console.log( typeof progressBarCompleted );
        // test
        console.log( typeof `${ progressBarStoreState }` );
        // test
        console.log( typeof progressBarStoreState );

        // since we have a timeout we need to make sure progressBarContainerRef
        // exist before we set the style
        if ( progressBarContainerRef.current ) {

            // show the 3D model container ( this did not work )
            // containerRef.current.style.visibility      = 'hidden';
            // hide the progress bar container
            progressBarContainerRef.current.style.display = 'grid';

        } // end of if ( progressBarContainerRef.current )

        // when the progressBarCompleted state changes to the Boolean true or
        // progressBarStoreState changes to the Boolean true then run the following
        // code
        if ( progressBarCompleted === true || progressBarStoreState === true ) {

            // test
            console.log( 'In progressBarCompleted' );

            // call setTimeout
            setTimeout( () => {

                // remember, this will increment barWidth by 1 every 10 milliseconds
                // until barWidth reaches 100 or 1 second later so the progress bar
                // will 1 / 100 of the 50vw width ( see the scss file for details )
                // after 10 milliseconds and our --blue-95 color will represent the
                // progress bar animation or progress or the progress from one end of
                // the progress bar container to the other end
                const progressBarInterval = setInterval( () => {

                    if ( barWidth === 100 ) {

                        clearInterval( progressBarInterval );

                        // show the 3D model container ( this did not work )
                        // containerRef.current.style.visibility      = 'visible';
                        // hide the progress bar container
                        progressBarContainerRef.current.style.display = 'none';

                        // test
                        console.log( 'In setInterval completed' );

                    } else {

                        // increment bar width by 1 every 10 milliseconds
                        barWidth++;

                        // test
                        console.log( barWidth );

                        // show the progress bar completion
                        progressBarRef.current.style.width = `${ barWidth }%`;

                    } // end of if else

                }, 10 ); // this sets the speed of the animation or we are
                // calling the setInterval function every 10 milliseconds
                // or 10 * 100 means it will take 1000 milliseconds to run
                // the setInterval function to completion at a minimum

            }, 0 ); // animation starts 0 milliseconds after page load

        } // end of if ( progressBarCompleted ) {}

        // ==============================
        // code block 2
        // ==============================

        // call the setProgressBarStoreState function here and this will call the
        // setProgressBarStoreState function in the zustand store and in the store we will
        // set the progressBarStoreState to the Boolean true and this state value will
        // survive going to another page and then coming back to this page but it will
        // not survive a page load

        // remember, progressBarStoreState will be false on page load but calling
        // " setProgressBarStoreState(); " will change progressBarStoreState " to true so
        // on the second time through useEffect 2 or when " progressBarCompleted " has
        // changed to true then " progressBarStoreState " will also be true

        // and since the " progressBarStoreState " value will stay in global state over
        // multiple pages, this value will be true even when returning to this page a
        // second or third time, etc., which is exactly what we want to happen
        setProgressBarStoreState();

    }, [ progressBarCompleted ] ); // end of useEffect 2

    // ==============================
    // since we got useEffect 2 working great and is a simplier implentation, we do
    // not need useEffect 3 so we commneted out useEffect 3
    // ==============================
/*
    // ==============================
    // useEffect 3
    // ==============================

    useEffect( () => {

        // test
        console.log( 'In useEffect 3' );
        // test
        console.log( progressBarCompleted );
        // test
        console.log( `${ progressBarStoreState }` );

        // set state
        // setProgressBarStoreState( `${ progressBarStoreState }` );
        // test
        console.log( progressBarStoreState );
        // test
        console.log( progressBarStoreState == 'true' );
        // test
        console.log( progressBarStoreState == 'false' );
        // test
        console.log( typeof progressBarStoreState );
        // test
        console.log( typeof `${ progressBarStoreState }` );

        // show the 3D model container ( this did not work )
        // containerRef.current.style.visibility      = 'hidden';
        // hide the progress bar container
        progressBarContainerRef.current.style.display = 'grid';

        // when the progressBarStoreState state changes to true then run the following
        // code
        if ( progressBarStoreState === 'true' ) {

            // test
            console.log( 'In progressBarStoreState' );

            // call setTimeout
            setTimeout( () => {

                // remember, this will increment barWidth by 1 every 10 milliseconds
                // until barWidth reaches 100 or 1 second later so the progress bar
                // will 1 / 100 of the 50vw width ( see the scss file for details )
                // after 10 milliseconds and our --blue-95 color will represent the
                // progress bar animation or progress or the progress from one end of
                // the progress bar container to the other end
                const progressBarInterval = setInterval( () => {

                    if ( barWidth === 100 ) {

                        clearInterval( progressBarInterval );

                        // show the 3D model container ( this did not work )
                        // containerRef.current.style.visibility      = 'visible';
                        // hide the progress bar container
                        progressBarContainerRef.current.style.display = 'none';

                        // test
                        console.log( 'In setInterval completed' );

                    } else {

                        // increment bar width by 1 every 10 milliseconds
                        barWidth++;

                        // test
                        console.log( barWidth );

                        // show the progress bar completion
                        progressBarRef.current.style.width = `${ barWidth }%`;

                    } // end of if else

                }, 10 ); // this sets the speed of the animation or we are
                // calling the setInterval function every 10 milliseconds
                // or 10 * 100 means it will take 1000 milliseconds to run
                // the setInterval function to completion at a minimum

            }, 0 ); // animation starts 0 milliseconds after page load

        } // end of if ( progressBarStoreState ) {}

    }, [] ); // end of useEffect 3
*/

    // ==============================
    // useEffect 4
    // ==============================

    // ==============================
    // purpose : wait 1.5 seconds before showing this component and 1.5 seconds matches the page
    // transition animation time and this results in a smooth page transition ( before it was
    // pretty choppy as the component tried to render at the same time the page was transitioning )
    // ==============================
/*
    useEffect( () => {

        const timer = setTimeout( () => {

            setShow3DObject( true );

        }, 1500 ); // match your page transition duration

        return () => clearTimeout( timer );

    }, [] ); // end of useEffect 4
*/

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // passParentToChildProgressBarHandlerFunction function
    // ==============================

    // ==============================
    // here we are lifting up state from the child component ( i.e. the cube textures
    // component ) to the parent component ( i.e. the 3d objects page )
    // ==============================

    // ==============================
    // see the following article for details on how to lift up state in react functional
    // components : " Passing data from child to parent component in ReactJS "
    // https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent
    // ==============================

    // ==============================
    // see the following anwser in stackoverflow for a good description of how
    // to lift up state :
    // " https://stackoverflow.com/questions/72913781/passing-props-form-child-to-parent-component-in-react "
    // ==============================

    /*
        " To pass data from child to parent component in React:

        1. Pass a function as a prop to the Child component.

        2. Call the function in the Child component and pass the data as arguments.

        3. Access the data in the function in the Parent. "

        App.js file

        import { useState } from 'react';

        function Child( { handleClick } ) {
            return (
                <div>
                    <button onClick={ event => handleClick( 100 ) }>Click</button>
                </div>
            );
        }

        export default function Parent() {
            const [ count, setCount ] = useState( 0 );

            const handleClick = num => {
                // take the parameter passed from Child component ( i.e. num )
                setCount( current => current + num );
            };

            return (
                <div>
                    <Child handleClick={ handleClick } />
                
                    <h2>Count: { count }</h2>
                </div>
            );
        }
    */

    // ==============================
    // remember, the 3d objects page ( i.e. this component ) is the parent component
    // remember, the CubeTexturesComponent is the child component
    // ==============================

    // ==============================
    // to lift up state, we need to do the following :
    // ==============================

    /*
        1 - pass the function called passParentToChildProgressBarHandlerFunction to the child
        component as a prop
        2 - call the function called passParentToChildProgressBarHandlerFunction in the child
        component and pass in the data as an argument and the data in this case is the
        progressBarDone state and this state is true or false depending on whether or not the
        drei progress bar has finished loading
        3 - inside the CubeTexturesComponent that is located toward the bottom of this
        page, pass in
        " passParentToChildProgressBarHandlerFunction={ passParentToChildProgressBarHandlerFunction } "
        and when we call the function passParentToChildProgressBarHandlerFunction in the
        child component ( see #2 above ) then this will trigger a call to the function
        passParentToChildProgressBarHandlerFunction in the parent component
        4 - in the parent component in #3 above we called the function
        passParentToChildProgressBarHandlerFunction and then we pass in the data or the
        progressBarDone state from the child component as an argument to the function
        passParentToChildProgressBarHandlerFunction and we do this in the parent component and then
        5 - inside the function passParentToChildProgressBarHandlerFunction we set the
        progressBarCompleted state in the parent component using the data or the progressBarDone
        state from the child component
    */

   async function passParentToChildProgressBarHandlerFunction( progressBarDone ) {

        // set state equal to progressBarDone, which is the state that was passed in from
        // the child component or the cube textures component
        setProgressBarCompleted( progressBarDone );

        // test
        console.log( `${ progressBarDone } in the passParentToChildProgressBarHandlerFunction in the index.js file` );

    } // end of passParentToChildProgressBarHandlerFunction function

    // ==============================
    // function 2
    // ==============================

    // ==============================
    // purpose : testing toggleProgressBarStoreState(); and setTimeout
    // ==============================

    // ==============================
    // in order to trigger this function, we need click event and please see
    // commented out button and p tag below on how we triggered this function
    // ==============================

    // ==============================
    // this works
    // ==============================

    function Yes() {

        // test
        console.log( 'In Yes' );

        // ==============================
        // code block 1
        // ==============================

        // use the zustand store to toggle state
        toggleProgressBarStoreState();

        // ==============================
        // code block 2
        // ==============================

        // had to reset barWidth to 0 since after running setInterval in useEffect 2
        // barWidth was set to 100 so on the first click to call Yes, nothing happened
        // so to get the Yes setInterval function to work on the first click we had
        // to reset barWidth to 0
        barWidth = 0;

        // ==============================
        // code block 3
        // ==============================

        // show the 3D model container ( this did not work )
        // containerRef.current.style.visibility      = 'hidden';
        // hide the progress bar container
        progressBarContainerRef.current.style.display = 'grid';

        // call setTimeout
        setTimeout( () => {

            // remember, this will increment barWidth by 1 every 10 milliseconds
            // until barWidth reaches 100 or 1 second later so the progress bar
            // will 1 / 100 of the 50vw width ( see the scss file for details )
            // after 10 milliseconds and our --blue-95 color will represent the
            // progress bar animation or progress or the progress from one end of
            // the progress bar container to the other end
            const progressBarInterval = setInterval( () => {

                if ( barWidth === 100 ) {

                    clearInterval( progressBarInterval );

                    // show the 3D model container ( this did not work )
                    // containerRef.current.style.visibility      = 'visible';
                    // hide the progress bar container
                    progressBarContainerRef.current.style.display = 'none';

                    // test
                    console.log( 'In setInterval completed' );

                } else {

                    // increment bar width by 1 every 10 milliseconds
                    barWidth++;

                    // test
                    console.log( barWidth );

                    // show the progress bar completion
                    progressBarRef.current.style.width = `${ barWidth }%`;

                } // end of if else

            }, 10 ); // this sets the speed of the animation or we are
            // calling the setInterval function every 10 milliseconds
            // or 10 * 100 means it will take 1000 milliseconds to run
            // the setInterval function to completion at a minimum

        }, 0 ); // animation starts 0 milliseconds after page load

    } // end of the Yes function

    // ==============================
    // function 3
    // ==============================

    // ==============================
    // purpose : testing wheather or setting " progressBarStoreState " to the Boolean true
    // makes a difference in running the setTimeout function inside useEffect hook 3 ( was
    // actually testing the old useEffect 3 )
    // ==============================

    // ==============================
    // in order to trigger this function, we need click event and please see
    // commented out button and p tag below on how we triggered this function
    // ==============================

    // ==============================
    // this works
    // ==============================

    function Sky() {

        // test
        console.log( 'In Sky' );
        // test
        console.log( progressBarStoreState );
        // test
        setProgressBarStoreState( true );
/*
        // ==============================
        // code block 1
        // ==============================

        // had to reset barWidth to 0 since after running setInterval in useEffect 2
        // barWidth was set to 100 so on the first click to call Yes, nothing happened
        // so to get the Yes setInterval function to work on the first click we had
        // to reset barWidth to 0
        barWidth = 0;

        // ==============================
        // code block 2
        // ==============================

        // show the 3D model container ( this did not work )
        // containerRef.current.style.visibility      = 'hidden';
        // hide the progress bar container
        progressBarContainerRef.current.style.display = 'grid';

        // when the progressBarStoreState state changes to true then run the following
        // code
        if ( progressBarStoreState ) {

            // test
            console.log( 'In progressBarStoreState' );

            // call setTimeout
            setTimeout( () => {

                // remember, this will increment barWidth by 1 every 10 milliseconds
                // until barWidth reaches 100 or 1 second later so the progress bar
                // will 1 / 100 of the 50vw width ( see the scss file for details )
                // after 10 milliseconds and our --blue-95 color will represent the
                // progress bar animation or progress or the progress from one end of
                // the progress bar container to the other end
                const progressBarInterval = setInterval( () => {

                    if ( barWidth === 100 ) {

                        clearInterval( progressBarInterval );

                        // show the 3D model container ( this did not work )
                        // containerRef.current.style.visibility      = 'visible';
                        // hide the progress bar container
                        progressBarContainerRef.current.style.display = 'none';

                        // test
                        console.log( 'In setInterval completed' );

                    } else {

                        // increment bar width by 1 every 10 milliseconds
                        barWidth++;

                        // test
                        console.log( barWidth );

                        // show the progress bar completion
                        progressBarRef.current.style.width = `${ barWidth }%`;

                    } // end of if else

                }, 10 ); // this sets the speed of the animation or we are
                // calling the setInterval function every 10 milliseconds
                // or 10 * 100 means it will take 1000 milliseconds to run
                // the setInterval function to completion at a minimum

            }, 0 ); // animation starts 0 milliseconds after page load

        } // end of if ( progressBarStoreState ) {}        
*/
    } // end of the Sky function


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // container 1
                    // ==============================
                */
            }
            <div 
                className={ styles.threeDObjectsPageContainer }
                ref={ containerRef }    
            >

                {
                    /*
                        // ==============================
                        // demo code so that we could test our zustand store
                        // ==============================
                    */
                }

                {
                    /*
                        <button 
                            onClick={ Sky }
                            style={ { margin : '1.0rem 0 0 0' } }
                        >
                            Change state
                        </button><br />
                        <p
                            style={ { margin : '1.0rem 0 0 0' } }
                        >
                            { `${ progressBarStoreState }` }
                        </p>
                    */
                }

                {
                    /*
                        // ==============================
                        // div 10 - Three.js sphere golf ball object
                        // ==============================
                    */
                }

                <SphereGolfBallComponent />

                {
                    /*
                        // ==============================
                        // div 11 - RTF torus
                        // ==============================
                    */
                }

                <TorusHemiLightComponent />

                {
                    /*
                        // ==============================
                        // div 12 - RTF cube textures
                        // ==============================
                    */
                }

                <CubeTexturesComponent

                    // this is a function being passed from parent to child as a prop
                    passParentToChildProgressBarHandlerFunction={ passParentToChildProgressBarHandlerFunction }
                
                />

                {
                    /*
                        // ==============================
                        // div 13 - RTF Earth
                        // ==============================
                    */
                }

                <ThreeDEarthComponent />

            </div>

            {
                /*
                    // ==============================
                    // container 2 - the progress bar
                    // ==============================
                */
            }

            <div
                className={ styles.threeDObjectsProgressBarContainer }
                ref={ progressBarContainerRef }
            >

                {
                    /*
                        // ==============================
                        // container > div1 ( wrapper div )
                        // ==============================
                    */
                }

                <div>

                    {
                        /*
                            // ==============================
                            // container > div1 ( wrapper div ) > div1 ( progress bar container )
                            // ==============================
                        */
                    }

                    <div>

                        {
                            /*
                                // ==============================
                                // container > div1 ( wrapper div ) > div1 > div1 ( progress bar )
                                // ==============================
                            */
                        }
                    
                        <div
                            ref={ progressBarRef }
                        >

                        </div>

                    </div>

                    <label>Loading 3D Objects</label>

                </div>

            </div>

        </Fragment>
    
    );

} // end of ThreeDObjectsPage


