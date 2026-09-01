


// ==============================
// notes
// ==============================


// ==============================
// remember, the inspiration for this shape came from
// " https://codesandbox.io/p/sandbox/gradient-textures-l03yb?file=%2Fsrc%2FApp.js%3A30%2C2 "
// ==============================








// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the Mesh component
import Mesh from './mesh';
// import in our stylesheet
import styles from './sphere-mesh-distort-background.module.scss';



export default function SphereMeshDistrortBackgroundComponent() {

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

        <div className={ styles.sphereMeshDistrortBackgroundContainer }>

            <div>

                {
                    // ==============================
                    // Canvas component
                    // ==============================
                }
                <Canvas>

                    <ambientLight
                        intensity={ 10 }
                    />
                    <directionalLight
                        position={ [ 10, 10, 10 ] }
                        intensity={ 1000 }
                    />

                    <Mesh />

                </Canvas>

            </div>

        </div>

    );

} // end of SphereMeshDistrortBackgroundComponent


