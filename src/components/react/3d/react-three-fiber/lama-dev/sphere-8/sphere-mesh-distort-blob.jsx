


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




// import in useEffect and useState hooks
import { useEffect, useState } from 'react';
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
    // useEffect 1
    // ==============================

    // ==============================
    // purpose : update the width and height on the browser resize event
    // ==============================

    useEffect( () => {
    
        // on resize call the getBlobDimensions function and then set the new width
        // height
        const handleResize = () => setDimensions( getBlobDimensions() );

        window.addEventListener( 'resize', handleResize );

        // cleanuo
        return () => window.removeEventListener( 'resize', handleResize );
    
    }, [] );

    // ==============================
    // useLoader();
    // ==============================

    // ==============================
    // useFrame();
    // ==============================

    // ==============================
    // functions
    // ==============================

    // ==============================
    // function 1
    // ==============================

    // ==============================
    // purpose : return the width and height based on screen size and inject the styles
    // inline so that they are available immediately on mount and remember, CSS injection
    // timing was not reading the styles in time when the user navigated back to the home
    // page causing the container to be the default size or 300 * 150 and blob to be
    // super small
    // ==============================

    const getBlobDimensions = () => {

        // get innerWidth
        const w = window.innerWidth;
        /*
        const h = window.innerHeight;

        // cap height at 90% of width to prevent overflow on narrow screens
        const maxHeight = w * 0.9;
        const vhHeight  = h * 0.9;
        const height    = Math.min( vhHeight, maxHeight );

        if ( w <= 330  ) return { width : '34.0rem',  height : `${ height }px` };
        if ( w <= 350  ) return { width : '36.0rem',  height : `${ height }px` };
        */
        
        // return the following widths and heights based on screen size
        /*
        if ( w <= 330 )  return { width : '34.0rem', height : '54.0rem' };
        if ( w <= 350 )  return { width : '36.0rem', height : '54.0rem' };
        if ( w <= 375 )  return { width : '39.0rem', height : '54.0rem' };
        if ( w <= 400 )  return { width : '41.8rem', height : '64.0rem' };
        if ( w <= 420 )  return { width : '44.5rem', height : '64.0rem' };
        if ( w <= 438 )  return { width : '46.8rem', height : '64.0rem' };
        if ( w <= 460 )  return { width : '48.8rem', height : '64.0rem' };
        if ( w <= 480 )  return { width : '50.0rem', height : '64.0rem' };
        if ( w <= 520 )  return { width : '52.0rem', height : '66.0rem' };
        if ( w <= 570 )  return { width : '59.0rem', height : '66.0rem' };
        if ( w <= 620 )  return { width : '64.0rem', height : '66.0rem' };
        if ( w <= 768 )  return { width : '70.0rem', height : '72.0rem' };
        if ( w <= 1536 ) return { width : '76.0rem', height : '78.0rem' };
        if ( w > 1536 )  return { width : '88.0rem', height : '84.0rem' };
        */
        /*
        if ( w <= 330 )  return { width : '34.0rem',  height : '54.0rem' };
        if ( w <= 350 )  return { width : '36.0rem',  height : '54.0rem' };
        if ( w <= 375 )  return { width : '39.0rem',  height : '54.0rem' };
        if ( w <= 400 )  return { width : '41.8rem',  height : '64.0rem' };
        if ( w <= 420 )  return { width : '44.5rem',  height : '64.0rem' };
        if ( w <= 438 )  return { width : '46.8rem',  height : '64.0rem' };
        if ( w <= 460 )  return { width : '48.8rem',  height : '64.0rem' };
        if ( w <= 480 )  return { width : '50.0rem',  height : '64.0rem' };
        if ( w <= 520 )  return { width : '52.0rem',  height : '66.0rem' };
        if ( w <= 570 )  return { width : '59.0rem',  height : '66.0rem' };
        if ( w <= 620 )  return { width : '64.0rem',  height : '66.0rem' };
        if ( w <= 768 )  return { width : '70.0rem',  height : '72.0rem' };
        if ( w <= 920 )  return { width : '88.0rem',  height : '78.0rem' };
        if ( w <= 1032 ) return { width : '100.0rem', height : '78.0rem' };
        if ( w <= 1280 ) return { width : '120.0rem', height : '78.0rem' };
        if ( w <= 1536 ) return { width : '133.0rem', height : '78.0rem' };
        if ( w > 1536 )  return { width : '144.0rem', height : '84.0rem' };
        */


        if ( w <= 330  ) return { width : '34.0rem',  height : '90vh' };
        if ( w <= 350  ) return { width : '36.0rem',  height : '90vh' };
        if ( w <= 375  ) return { width : '39.0rem',  height : '90vh' };
        if ( w <= 400  ) return { width : '41.8rem',  height : '90vh' };
        if ( w <= 420  ) return { width : '44.5rem',  height : '90vh' };
        if ( w <= 438  ) return { width : '46.8rem',  height : '90vh' };
        if ( w <= 460  ) return { width : '48.8rem',  height : '90vh' };
        if ( w <= 480  ) return { width : '50.0rem',  height : '90vh' };
        if ( w <= 520  ) return { width : '52.0rem',  height : '90vh' };
        if ( w <= 570  ) return { width : '59.0rem',  height : '90vh' };
        if ( w <= 620  ) return { width : '64.0rem',  height : '90vh' };
        if ( w <= 768  ) return { width : '70.0rem',  height : '90vh' };
        if ( w <= 920  ) return { width : '88.0rem',  height : '90vh' };
        if ( w <= 1032 ) return { width : '100.0rem', height : '90vh' };
        if ( w <= 1280 ) return { width : '120.0rem', height : '90vh' };
        if ( w <= 1536 ) return { width : '133.0rem', height : '90vh' };
        if ( w > 1536 )  return { width : '144.0rem', height : '90vh' }; 

    };

    // for this to work, we need have useState here
    
    // remember, this will get our initial width and height values by calling the
    // getBlobDimensions function and this will our initial state
    const [ dimensions, setDimensions ] = useState( getBlobDimensions );
    

    return (

        // ==============================
        // container
        // ==============================

        <div className={ styles.sphereMeshDistrortBlobContainer }>

            <div style={ dimensions }>

                {
                    // ==============================
                    // Canvas component
                    // ==============================

                    // dpr={ 1 } force 1x pixel ratio instead of 2x on retina and
                    // cutting it to 1 halves the GPU work immediately but tested
                    // this and it did not help
                }
                <Canvas>

                    <OrbitControls
                        // turn off orbit controls
                        enabled={ false }
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


