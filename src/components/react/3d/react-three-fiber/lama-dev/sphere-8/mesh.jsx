


// import in the MeshDistortMaterial, Sphere components
import { MeshDistortMaterial, Sphere, useTexture } from '@react-three/drei'



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

    // ==============================
    // textures
    // ==============================

    // const texture = useTexture( '/images/mj_med_spa_06.png' );
    const texture = useTexture( '/images/mj_couple_running_07.png' );

    return (

        // ==============================
        // mesh
        // ==============================

        // ==============================
        // mesh 8 - 3D rectangular blob with doctor picture layered on top
        // ==============================

        <mesh
            position={ [ 0, 0, 0 ] }
            // scale={ [ viewport.width / 2.75, viewport.height / 1.6, 1 ] } // this didn't work
            scale={ [ 4.6, 4.6, 1 ] } // this scaling got me pretty close to filling the container
            // set in sphere-mesh-distrot-blob.jsx
        >

            <planeGeometry
                args={ [ 2.75, 1.6, 48, 48 ] }
                attach="geometry" // from RTF docs : " With the attach prop, we can precisely
                // tell the renderer what property to attach each component to "
                
                // also, this was the approach drcmda recommeneded in an anwser to a question :
                // " https://github.com/pmndrs/react-three-fiber/discussions/487 "
            />

            <MeshDistortMaterial
                //color='rgba( 79, 195, 247, 1 )' // blue-63
                //color='rgba( 62, 166, 243, 1 )' // --blue-70
                //color='rgba( 55, 150, 241, 1 )' // --blue-71
                //color='rgba( 45, 137, 239, 1 )' // blue-74
                color='rgba( 0, 125, 240, 1 )' // --blue-78
                map={ texture } // do not need attach="material-0" since there
                // is only one side
                // attach="material" // comment this out and apply map={ texture } if we want a plain background
                distort={ 0.4 } // visual preferenece
                speed={ 2.0 } // visual preferenece
            />

        </mesh>

    );

} // end of MeshComponent


