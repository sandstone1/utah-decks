





// ==============================
// notes
// ==============================

// ==============================
// notes for compressing gltf and glb files
// ==============================

// see this article for details on how to compress your gltf or glb files :
// " https://blog.logrocket.com/configure-3d-models-react-three-fiber/ "

// 1 - move all the unzipped files into the enchanting_apps folder and then

// 2 - run the following command :
// " Home@Mac-Studio enchanting_apps % gltf-pipeline -i scene.gltf -o polaroid_camera_v2.glb --draco.compressionLevel=10 "

// 3 - then we will find a reduced polaroid_camera_v2.glb file from 13.4 MB to 5 MB

// 4 - the other option is to download the glb file and then compress that file by doing :
// " Home@Mac-Studio enchanting_apps % gltf-pipeline -i polaroid-camera.glb -o polaroid_camera.glb --draco.compressionLevel=10 "

// 5 - and the result is the same as 3 above or we we will find a reduced
// polaroid_camera.glb file from 13.4 MB ( i.e. the downloaded polaroid-camera.glb file )
// to 5 MB ( i.e. the compressed polaroid_camera.glb file )











// import in the Suspense component, useEffect, useRef hooks
import { Suspense, useEffect, useRef } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Stage components
import { 
    OrbitControls,
    Stage,
    Loader
} from '@react-three/drei';
// import in the Polaroid Camera component
import PolaroidCameraComponent from './polaroid-camera-3d';
// import in our stylesheet
import styles from './polaroid-camera.module.scss';



export default function CameraComponent() {

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
            className={ styles.cameraContainer }
            ref={ containerRef }
        >

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas
                camera={ { fov : 18, position : [ 8, 1, 25 ] } } // remember, the fov and
                // position control the inital position of the 3D object
            >

                <Suspense fallback={null}>

                    <OrbitControls enableZoom={ false } enablePan={ false } />

                    <Stage environment='city' intensity={ 0.6 }>

                        <PolaroidCameraComponent />

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

} // end of CameraComponent


