



// ==============================
// notes
// ==============================

// ==============================
// notes for creating a 3D shoe
// ==============================

// ==============================
// create 3d animations using the
// three.js library,
// @react-three/fiber package and the
// @react-three/drei package
// ==============================

// ==============================
// please see the following article for details :
// " https://sbcode.net/react-three-fiber/gltfjsx/ "
// ==============================

// ==============================
// 1 - remember, " GLTFJSX is a command line tool that will read through
// a glTF model, and extract its components into a JSX equivalent. " and
// 2 - remember, I already downloaded GLTFJSX globally
// 3 - and then we need to download the test file or shoe-draco.zip and
// and after downloading the file, then find the " shoe-draco.glb " file and
// move it to the /models folder or leave it in the Enchanting Apps main folder
// and then
// 4 - create the jsx file by using the command :
// " Home@Mac-Studio enchanting_apps % npx gltfjsx shoe-draco.glb " and then
// 5 - move the " shoe-draco.glb " to the /models folder and then
// 6 - find the " shoe-draco.jsx " file and move it to the components/3d/3d-models
// folder and then
// 7 - make sure we add " Default " after the word " Export " in the shoe-draco.jsx
// file and then
// 8 - make sure we have the useGLTF() function pointed to the right file location
// for the " shoe-draco.glb " file and then
// 9 - import in the " show-draco.jsx " file and then
// 10 - insert the component into the canvas ( see below for details )
// ==============================

// ==============================
// 1 - components/3d/3d-models/product-design-v2.js
// 2 - components/3d/3d-models/product-design-v2.module.scss
// 3 - components/3d/3d-models/shoe-product-design-v2.jsx
// 4 - /models/shoe-draco.glb
// ==============================
















// import in the Canvas component
import { Canvas } from '@react-three/fiber';
// import in the OrbitControls, Stage components
import { 
    OrbitControls,
    Stage
} from '@react-three/drei';
// import in the Shoe jsx component
import ShoeComponent from './shoe-product-design-v2';
// import in our stylesheet
import styles from './product-design-v2.module.scss';



export default function ProductDesignV2Component() {

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

        <div className={ styles.productDesignV2Container }>

            {
                // ==============================
                // Canvas component
                // ==============================
            }
            <Canvas
                camera={ { fov : 20, position : [ 1, 1, 10 ] } } // remember, the fov and
                // position control the inital position of the 3D object
            >

                <OrbitControls enableZoom={ false } autoRotate />

                <Stage environment='city' intensity={ 0.6 } >

                    <ShoeComponent />

                </Stage>

            </Canvas>

        </div>

    );

} // end of ProductDesignV2Component



