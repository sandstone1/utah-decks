


// import in the Suspense component
import { Suspense } from 'react';
// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Perspective Camera, Stage components
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
// import in the Polaroid Camera jsx model
import Chrysler1971Model from './chrysler-1971';
// import in our stylesheet
import styles from './chrysler-1971.module.scss';



export default function Chrysler1971Component() {

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
    // useEffect 1
    // ==============================


    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.chrysler1971Container }>

            <div>

                <div>

                    <Canvas>

                        <PerspectiveCamera
                            makeDefault
                            fov={ 75.0 }
                            position={ [ 0, 0, 8.0 ] }
                        />

                        <OrbitControls
                            enableZoom={ false }
                            enablePan={ false }
                            enableRotate={ true }
                            // rotateSpeed={ 1.0 }
                            autoRotate={ false }
                        />

                        <Suspense fallback={null}>

                            <Stage environment='city' intensity={ 0.6 } >

                                <Chrysler1971Model />

                            </Stage>

                        </Suspense>

                    </Canvas>

                </div>

            </div>

        </div>

    );

} // end of Chrysler1971Component

