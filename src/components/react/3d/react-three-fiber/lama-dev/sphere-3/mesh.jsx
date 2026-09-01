


// import in THREE
import * as THREE from 'three'
// import in the MeshDistortMaterial, GradientTexture components
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei'



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
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================


    return (

        // ==============================
        // mesh
        // ==============================

        <mesh
            scale={ [ 2, 4, 1 ] }
        >

            <planeGeometry
                args={ [ 1.5, 1.5, 48, 48 ] }
                attach="geometry"
            />

            <MeshDistortMaterial
                speed={ 4 } // visual preferenece
                attach="material"
            >

                <GradientTexture
                    stops={ [ 0, 0.5, 1 ] }
                    colors={ [ '#0069dc', '#fee07e', '#0069dc' ] }
                    size={ 100 }
                />

            </MeshDistortMaterial>

        </mesh>


    );

} // end of MeshComponent


