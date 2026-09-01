





// import in the Suspense component, useEffect, useRef hooks
import { Suspense, useEffect, useRef } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Stage components
import { 
    OrbitControls,
    Stage,
    Loader,
    useProgress,
    Html
} from '@react-three/drei';
// import in the Shoe jsx component
import ShoeComponent from "./shoe-product-design";
// import in our stylesheet 
import styles from './product-design.module.scss';



// pass down the showColor property from the 3d model component ( parent component )
// and we are doing this so that we can dynamically change the color of shoe in the
// 3d-model.js file
export default function ProductDesignComponent( { showColor } ) {

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

    // use browserWidth inside the useEffect hook below
    let browserWidth;

    // ==============================
    // useRef();
    // ==============================

    // STEP 1

    // use the useRef(); hook to create a reference to a DOM element and let's start by
    // initializing the following useRef variables
    const containerRef = useRef();

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
        // create DOM reference
        // ==============================

        // STEP 3

        // reference the specified DOM element below

        if ( containerRef.current ) {

            containerRef.current.style.opacity = 1;

        } // end of if

    }, [] ); // end of useEffect 1

/*
    // ==============================
    // useEffect 2
    // ==============================

    useEffect( () => {

        // make sure we remove the event listener after we call the handleResize
        // function
        return () => {

            useLoader.clear( Loader, url ) 

        };

    }, [] ); // end of useEffect 2
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
            className={ styles.productDesignContainer }
            ref={ containerRef }    
        >

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas
                camera={ { fov : 13.0, position : [ 0, 0, 10 ] } } // remember, the fov and
                // position control the inital position of the 3D object
                style={ { display : 'block' } }
            >

                <Suspense fallback={null}>

                    <OrbitControls enableZoom={ false } enablePan={ false } autoRotate />

                    <Stage environment="city" intensity={ 0.6 }>

                        <ShoeComponent color={ showColor } />

                    </Stage>

                </Suspense>

            </Canvas>

            <Loader
                containerStyles={
                    { 
                        background : 'transparent'
                    }
                }
                barStyles={
                    {
                        width   : '12.0rem',
                        height  : '0.5rem',
                        color   : '#f5f5f5'
                    }
                }
                dataStyles={
                    {
                        fontFamily : 'Roboto Flex, sans-serif',
                        fontSize   : '1.85rem',
                        color      : '#f5f5f5'
                    }
                }
                dataInterpolation={
                    ( p ) => `Loading ${p.toFixed( 2 ) }%`
                }
            />

        </div>

    );

} // end of ProductDesignComponent



