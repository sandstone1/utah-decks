


// import in Fragment, the useEffect, useRef, useState hooks
import { Fragment, useEffect, useRef, useState } from 'react';
// import in useProgressBarStore2 hook from the zustand store
import useProgressBarStore2 from '../../../../state/zustand/stores/store-progress-bar-2';
// 3D R3F
// import in the Apollo 11 component from Lama Dev
import Apollo11Component from '../../3d/react-three-fiber/lama-dev-models/3d-models/apollo-11/apollo-11';
// 3D R3F
// import in the Polaroid Camera component from Lama Dev
import PolaroidCameraComponent from '../../3d/react-three-fiber/lama-dev-models/3d-models/polaroid-camera/polaroid-camera';
// 3D R3F
// import in the House 09 component from Lama Dev
import House09Component from '../../3d/react-three-fiber/lama-dev-models/3d-models/house-09/house-09';// 3D R3F
// 3D R3F
// import in the Shoe component from Lama Dev
import ShoeComponent from '../../3d/react-three-fiber/lama-dev-models/3d-models/shoe/shoe';
// import in our stylesheet
import styles from './3d-models.module.scss';



export default function ThreeDModelsPage() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed
    const [ progressBarCompleted, setProgressBarCompleted ] = useState( false );

    // ==============================
    // zustand state
    // ==============================

    // here I get the initial value from the zustand store for the progressBarStoreState,
    // which is false and I can display inside return() below
    const progressBarStoreState = useProgressBarStore2( ( state ) => state.progressBarStoreState );

    // use the useProgressBarStore hook from the zustand store to access the
    // setProgressBarStoreState function and then call the setProgressBarStoreState function
    // in the useEffect 1 below and this will set the progressBarStoreState to true and then
    // we can access this value later
    const setProgressBarStoreState = useProgressBarStore2( ( state ) => state.setProgressBarStoreState );

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

        // show the 3D model container ( this did not work )
        // containerRef.current.style.visibility      = 'hidden';
        // hide the progress bar container
        progressBarContainerRef.current.style.display = 'grid';

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

    }, [ progressBarCompleted ] ); // end of useEffect 1

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
                className={ styles.threeDModelsPageContainer }
                ref={ containerRef }
            >

                {
                    /*
                        // ==============================
                        // container 1 > RTF apollo 11 model
                        // ==============================
                    */
                }
                
                <Apollo11Component

                    // this is a function being passed from parent to child as a prop
                    passParentToChildProgressBarHandlerFunction={ passParentToChildProgressBarHandlerFunction }

                />

                {
                    /*
                        // ==============================
                        // container 1 > RTF polaroid camera model
                        // ==============================
                    */
                }

                <PolaroidCameraComponent />

                {
                    /*
                        // ==============================
                        // container 1 > RTF house model
                        // ==============================
                    */
                }
                
                <House09Component />

                {
                    /*
                        // ==============================
                        // container 1 > RTF shoe model
                        // ==============================
                    */
                }

                <ShoeComponent />

            </div>

            {
                /*
                    // ==============================
                    // container 2 > the progress bar
                    // ==============================
                */
            }

            <div
                className={ styles.threeDModelsNewPageContainer }
                ref={ progressBarContainerRef }
            >

                {
                    /*
                        // ==============================
                        // container 2 > div1 ( wrapper div )
                        // ==============================
                    */
                }

                <div>

                    {
                        /*
                            // ==============================
                            // container 2 > div1 ( wrapper div ) > div1 ( progress bar container )
                            // ==============================
                        */
                    }

                    <div>

                        {
                            /*
                                // ==============================
                                // container 2 > div1 ( wrapper div ) > div1 > div1 ( progress bar )
                                // ==============================
                            */
                        }
                    
                        <div
                            ref={ progressBarRef }
                        >

                        </div>

                    </div>

                    <label>Loading 3D Models</label>

                </div>

            </div>

        </Fragment>

    );

} // end of ThreeDModelsPage

