




// import in the useRef hook
import { useRef } from 'react';
// import in the three.js TextureLoader
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import in the Canvas component and the useFrame hook
import { useFrame, useLoader } from '@react-three/fiber';



export default function MeshComponent() {

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
    const meshRef = useRef();

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
    // useLoader();
    // ==============================

    // define our textures
    const texture_1 = useLoader( TextureLoader, '/images/zions_01_866.webp' );
    const texture_2 = useLoader( TextureLoader, '/images/arches_01_866.webp' );
    const texture_3 = useLoader( TextureLoader, '/images/horseshoe_01_866.webp' );
    // const texture_4 = useLoader( TextureLoader, '/images/green_bg_01_866.webp' );
    const texture_5 = useLoader( TextureLoader, '/images/boulder_mtn_03_866.webp' );
    const texture_6 = useLoader( TextureLoader, '/images/boulder_mtn_04_866.webp' );

    // ==============================
    // useFrame();
    // ==============================

    // from R3F : " This hook calls you back every frame, which is good for
    // running effects, updating controls, etc. You receive the state
    // ( same as useThree ) and a clock delta. "

    // from " https://sbcode.net/react-three-fiber/use-frame/ " : " When React
    // calls our useFrame hook, it gives us a state object of the Three.js scene "
    // and delta time shows the milliseconds between renders

    // rotate our mesh
    useFrame( ( state, delta ) => {

        // ==============================
        // rotation - option 1
        // ==============================

        const elapsedTime = state.clock.getElapsedTime();

        // meshRef.current.rotation.x = elapsedTime * 0.310;
        meshRef.current.rotation.y = elapsedTime * 0.310;
        // meshRef.current.rotation.z = elapsedTime * 0.25;

        // ==============================
        // rotation - option 2
        // ==============================

        // meshRef.current.rotation.x += delta * 0.25;
        // meshRef.current.rotation.y += delta * 0.25;
        // meshRef.current.rotation.z += delta * 0.25;

    } ); // end of useFrame

    // ==============================
    // functions
    // ==============================


    return (

        <mesh
            ref={ meshRef }
        >

            <boxGeometry
                args={ [ 1.27, 1.27, 1.27 ] } // this represents the width, height and
                // depth and is the same as writing " new THREE.BoxGeometry( 1, 2, 3 ) "
                attach="geometry"
            />

            <meshStandardMaterial map={ texture_1 }  attach="material-0" />
            <meshStandardMaterial map={ texture_2 }  attach="material-1" />
            <meshStandardMaterial map={ texture_3 }  attach="material-2" />
            <meshStandardMaterial color={ 0xA52A2A } attach="material-3" />
            <meshStandardMaterial map={ texture_5 }  attach="material-4" />
            <meshStandardMaterial map={ texture_6 }  attach="material-5" />

        </mesh>

    );

} // end of MeshComponent



