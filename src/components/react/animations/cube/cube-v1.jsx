


// import in the scss file
import styles from './cube-v1.module.scss';



export default function CubeComponent() {

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
    // functions
    // ==============================

    return (

        // ==============================
        // container ( cube )
        // ==============================

        <div className={ styles.cubeContainer }>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 1 - 6 ( the sides of the cube )
                        // ==============================
                    */
                }
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>

        </div>

    );

} // end of CubeComponent

