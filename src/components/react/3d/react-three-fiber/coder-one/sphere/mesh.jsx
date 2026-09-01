



// import in Fragment and the useRef hook
import { Fragment, useRef } from 'react';
// import in " all exported content " from three.js
import * as THREE from 'three';
// import in the TextureLoader component
import { TextureLoader } from 'three';
// import in the useFrame, useLoader hooks
import { useFrame, useLoader } from '@react-three/fiber';
// import in OrbitControls and Stars from drei
import { OrbitControls } from '@react-three/drei';



export default function MeshComponent( props ) {

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
    // initializing the following useRef variables
    const cloudsRef = useRef();
    const earthRef  = useRef();

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

    const dayMap      = useLoader( TextureLoader, '/images/8k_earth_daymap_75.webp' );
    const normalMap   = useLoader( TextureLoader, '/images/8k_earth_normal_map_75.webp' );
    const specularMap = useLoader( TextureLoader, '/images/8k_earth_specular_map_75.webp' );
    const cloudsMap   = useLoader( TextureLoader, '/images/8k_earth_clouds_50_50.webp' );

    // ==============================
    // useFrame();
    // ==============================

    // rotate our mesh
    useFrame( ( state, delta ) => {

        // ==============================
        // rotation - option 1
        // ==============================

        const elapsedTime = state.clock.getElapsedTime();

        // remember, this allows the light to stay in one position and the
        // earth can rotate and thereby you can see different parts of the earth
        // as they hit the light
        cloudsRef.current.rotation.y = elapsedTime * 0.120;
        earthRef.current.rotation.y  = elapsedTime * 0.120;

    } ); // end of useFrame

    // ==============================
    // functions
    // ==============================


    return (

        <Fragment>

            {
                /*
                    // ==============================
                    // mesh #1 - clouds mesh
                    // ==============================
                */
            }

            <mesh
                ref={ cloudsRef }
            >

                <sphereGeometry
                    args={ [ 1.005, 64, 64 ] } // make this sphere slightly bigger than the
                    // earth since the clouds are floating on top of the earth
                    attach="geometry"
                />

                <meshPhongMaterial
                    map={ cloudsMap }
                    opacity={ 0.4 } // get rid of black background and keep white clouds
                    depthWrite={ true } // this should be the defualt but leave here just
                    // in case
                    transparent={ true } // have to do transparent equals true in order for
                    // opacity to work
                    side={ THREE.DoubleSide } // THREE.DoubleSide means both sides are casting shadows
                    attach="material"
                />

            </mesh>

            {
                /*
                    // ==============================
                    // mesh #2 - earth mesh
                    // ==============================
                */
            }

            <mesh
                ref={ earthRef }
            >

                <sphereGeometry
                    args={ [ 1, 64, 64 ] }
                    attach="geometry"
                />

                <meshPhongMaterial
                    specularMap={ specularMap }
                    attach="material"
                />

                <meshStandardMaterial
                    map={ dayMap }
                    normalMap={ normalMap }
                    metalness={ 0.0 }
                    roughness={ 0.7 }
                    attach="material"
                />

            </mesh>

        </Fragment>

    );

} // end of MeshComponent


