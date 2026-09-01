


// ==============================
// notes
// ==============================

// ==============================
// remember, this sphere looked best when using the stand alone Sphere
// component and the MeshDistortMaterial component from react three drei
// ==============================







// ==============================
// notes
// ==============================

// ==============================
// remember, ranking-made-easy/sphere-2 is preferred over ranking-made-easy/sphere-1
// since ranking-made-easy/sphere-2 follows a more conventional approach or one that
// I like the best
// ==============================








// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Sphere and MeshDistortMaterial component
import {
    OrbitControls
} from '@react-three/drei';
// import in the Mesh component
import Mesh from './mesh';
// import in our stylesheet
import styles from './sphere-mesh-distort-blob.module.scss';



export default function SphereMeshDistrortBlobComponent() {

    // ==============================
    // component state
    // ==============================

    // remember this initial state can be updated by using client side data fetching as
    // needed

    // remember we don't need to set component level state in order to see the data in the
    // page source; however, it makes sense to set component level state if we will use
    // client side data fetching to update the data as needed

    // set component level state

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
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================

    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.sphereMeshDistrortBlobContainer }>

            <div>

                {
                    // ==============================
                    // Canvas component
                    // ==============================
                }
                <Canvas>

                    <OrbitControls
                        enableZoom={ false }
                    />
                    <ambientLight
                        intensity={ 1 }
                    />
                    <directionalLight
                        position={ [ 3, 2, 1 ] }
                    />

                    <Mesh />

                </Canvas>

            </div>

        </div>

    );

} // end of SphereMeshDistrortBlobComponent


