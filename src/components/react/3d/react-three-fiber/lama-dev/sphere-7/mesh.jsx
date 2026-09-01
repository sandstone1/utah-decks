


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

    const texture = useTexture( '/images/mj_doctor_01_880.webp' );


    return (

        // ==============================
        // mesh
        // ==============================

        // ==============================
        // mesh 7 - 3D sphere blob with doctor picture layered on top
        // ==============================
    
        <mesh
            position={ [ 0, 0, 0 ] }
        >

            <Sphere 
                args={ [ 1.0, 100, 200 ] } // args equals radius, number of width segments and
                // number of height segments
                scale={ 2.70 } // use the scale state value and remember, this
                // makes the sphere looks more natural and a lot better than using the
                // <sphereGeometry /> component
            >

                <MeshDistortMaterial
                    // color='rgba( 75, 191, 115, 1 )' // --green-100
                    // color='rgba( 152, 230, 200, 1 )' // green-23
                    // color='rgba( 127, 198, 241, 1 )' // --blue-62-1
                    // color='rgba( 79, 195, 247, 1 )' // blue-63
                    //color='rgba( 0, 125, 240, 1 )' // --blue-78
                    color='rgba( 45, 137, 239, 1 )' // blue-74
                    // color='rgba( 62, 139, 221, 1 )' // --blue-100
                    //color='rgba( 33, 107, 165, 1 )' // blue-265
                    // color='rgba( 67, 89, 134, 1 );' // blue-325
                    // color='rgba( 44, 79, 151, 1 );' // blue-500
                    // color='rgba( 24, 59, 131, 1 );' // --blue-600
                    // color='rgba( 26, 32, 44, 1 )' // --blue-650
                    // color='rgba( 255, 249, 189, 1 )' // --yellow-75
                    // color='rgba( 254, 224, 126, 1 )' // --yellow-150
                    //color='rgba( 191, 0, 255, 1 )' // purple-50
                    // color='rgba( 71, 2, 212, 1 )' // --purple-250
                    // color='rgba( 78, 42, 132, 1 )' // purple-300
                    // color='rgba( 255, 80, 55, 1 )' // --red-30
                    // color='rgba( 211, 211, 211, 1 )' // --silver
                    // color='rgba( 108, 0, 0, 1 )' // maroon-200
                    // color='rgba( 84, 72, 58, 1 )' // --gray-735
                    // color='rgba( 40, 40, 40, 1 )' // --gray-880
                    // color='rgba( 0, 0, 0, 1 )' // black
                    map={ texture }
                    //attach='material' // comment this out and apply map={ texture } if we want a plain background
                    distort={ 0.4 } // visual preferenec
                    speed={ 2.0 } // visual preferenec
                />

            </Sphere>

        </mesh>

    );

} // end of MeshComponent


