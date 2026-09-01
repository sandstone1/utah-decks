




// ==============================
// notes
// ==============================

// ==============================
// load glb file or gltf file into three.js scene
// ==============================

// ==============================
// please see the following video for details on how to load a glb file into your three.js
// scene : " https://www.youtube.com/watch?v=WBe3xrV4CPM " and this webpage is helpful for
// understanding the G:TF loader :
// " https://threejs.org/docs/#examples/en/loaders/GLTFLoader " and information on the
// draco loader came from this answer in stackoverflow :
// " https://stackoverflow.com/questions/56071764/how-to-use-dracoloader-with-gltfloader-in-reactjs "
// ==============================

// ==============================
// 1 - import in the GLTF loader and then
// 2 - import in the DRACO loader and then
// 3 - create and configue your draco loader :
/*
    // step 1
    const dracoLoader = new DRACOLoader();

    // step 2
    // and remember to use a full url path
    dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' ); 
*/ 
// and then
// 4 - create and configue your gltf loader :
/*
    // step 3
    // create and configue your gltf loader
    const gltfLoader = new GLTFLoader();

    // step 4
    gltfLoader.setDRACOLoader( dracoLoader );
*/
// and then
// 5 - we can load our glb file or gltf file into our three.js scene :
/*
    // step 5
    // and then we can load our glb file or gltf file
    gltfLoader.load(
        // path to our gltf file or resource url
        'models/shoe.gltf',
        // called when the resource is loaded
        function( gltf ) {

            console.log( gltf );

            scene.add( gltf.scene );

        },
        // called while loading is progressing
        function ( xhr ) {
    
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
        },
        // called when loading has errors
        function ( error ) {
    
            console.log( 'An error happened' );
    
        }
    ); // end of gltfLoader.load()
*/
// and this works since I can see the shoe but the lighting is off and it needs
// some work
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/three-js/3d-models/product-design.js
// ==============================







// ==============================
// notes
// ==============================

// ==============================
// how to use a built in editor to help edit your threejs scene
// ==============================

// ==============================
// 1 - import in the debugger or dat.gui and dat is " A lightweight graphical
// user interface for changing variables in JavaScript " and dat " allows us to
// quickly add a very basic user interface which allows us to interact with our
// 3d scene and the objects within it "
// 2 - and we need to install dat or " npm i dat.gui " and
// 3 - 
// ==============================

// ==============================
// files for the steps above
// ==============================

// ==============================
// 1 - components/3d/three-js/gary-simon/sphere.js
// ==============================












// import in the Suspense component, useEffect, useRef hooks
import { Suspense, useEffect, useRef } from 'react';
// import three.js
import * as THREE from 'three';
// import in the Canvas component and the useFrame hook
import { 
    Canvas,
    useFrame
} from '@react-three/fiber';
// import in the OrbitControls, Sphere and MeshDistortMaterial component
import {
    OrbitControls,
    Stage,
    PerspectiveCamera,
    Loader
} from '@react-three/drei';
// import in our stylesheet
import styles from './torus-react-three-fiber.module.scss';



export default function TorusReactThreeFiberComponent() {

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
    const meshRef      = useRef();

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

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

/*
    // ==============================
    // create DOM reference
    // ==============================

    // STEP 3

    // reference the specified DOM element below

    // this will make the torus rotate correctly
    useFrame( ( state ) => {

        const elapsedTime = state.clock.getElapsedTime();

        meshRef.current.rotation.y  = elapsedTime / 6;

    } ); // end of useFrame
*/

    // ==============================
    // functions
    // ==============================


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
            className={ styles.torusContainer }
            ref={ containerRef }    
        >

            <div
                className={ styles.torusContainerDiv1 }
            >

                {
                    // ==============================
                    // Canvas component
                    // ==============================
                }
                <Canvas
                    // camera={ { fov : 45.0, position : [ 0, 0, 5 ] } } // remember, the fov and
                    // position control the inital position of the 3D object
                >

                    <Suspense fallback={null}>

                        <PerspectiveCamera
                            makeDefault
                            fov={ 45.0 }
                            position={ [ 0, 0, 5] }
                        />

                        <OrbitControls
                            enableZoom={ false }
                            enablePan={ false }
                            autoRotate
                            // enableRotate={ true } // can't seem to make this work
                            // rotateSpeed={ 1.0 } // can't seem to make this work
                        />

                        <ambientLight
                            intensity={ 0 }
                            color="#ffffff"
                        />

                        <pointLight
                            position={ [ 10, 10, 10 ] }
                            intensity={ 200 }
                            color="#ffffff"
                        />

                        <directionalLight
                            position={ [ 3, 2, 1 ] }
                            intensity={ 0 }
                            color="#ffffff"
                        />

                        {
                            /*
                                <Stage
                                    environment="city" intensity={0.0}
                                >
                            */
                        }

                            <mesh
                                ref={ meshRef }
                            >
                
                                <torusGeometry
                                    args={ [ 0.7, 0.2, 16, 100 ] } 
                                />
                
                                <meshStandardMaterial
                                    // side={ THREE.DoubleSide }
                                    color={ 0xff0000 }
                                />
                
                            </mesh>

                        {
                            /*
                                </Stage>
                            */
                        }

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

        </div>

    );

} // end of TorusReactThreeFiberComponent



