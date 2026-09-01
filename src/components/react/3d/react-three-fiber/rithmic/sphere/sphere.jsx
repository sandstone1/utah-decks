



// ==============================
// notes
// ==============================

// ==============================
// please see the following video for details on creating a sphere:
// " https://www.youtube.com/watch?v=vTfMjI4rVSI&t=139s " and the video is called :
// " React Three Fiber (R3F) - The Basics "
// ==============================

// ==============================
// files
// ==============================

// ==============================
// 1 - components/3d/react-three-fiber/rithmic/sphere/sphere.js
// 2 - components/3d/react-three-fiber/rithmic/sphere/sphere.module.scss
// 2 - components/3d/react-three-fiber/rithmic/sphere/mesh.js
// ==============================





// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls component
import { OrbitControls } from '@react-three/drei';
// import in the Mesh component
import Mesh from './mesh';
// import in our stylesheet
import styles from './sphere.module.scss';



export default function SphereComponent() {

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
        // container
        // ==============================

        <div 
            className={ styles.sphereContainer }
        >

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas>

                <OrbitControls
                    enableZoom={ false }
                    // autoRotate
                />
                <ambientLight
                    intensity={ 5 }
                />
                <directionalLight
                    position={ [ 0, 0, 2 ] }
                />

                <Mesh />

            </Canvas>

        </div>

    );

} // end of SphereComponent


