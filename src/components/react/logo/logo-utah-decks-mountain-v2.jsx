



import styles from './logo-utah-decks-mountain-v2.module.scss';



export default function LogoUtahDecksComponent() {

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

        <div className={ styles.logoUtahDecksContainer }>

            {
                /*
                    // ==============================
                    // container > div1 ( wrapper div )
                    // ==============================

                */
            }
            <div>

                {
                    /*
                        // ==============================
                        // container > div1 ( wrapper div ) > picture
                        // ==============================
                    */
                }
                <picture>
                    <source 
                        srcSet="/images/logo_mountain_gold_42.svg"
                        type="image/svg"
                    />
                    <img
                        src="/images/logo_mountain_gold_42.svg"
                        loading="eager"       // explicitly not lazy and loads immediately
                        fetchpriority="high"  // tells the browser to prioritize this over lower-priority resources
                        alt="Mountain"
                    />
                </picture>

            </div>

        </div>

    );

} // end of LogoUtahDecksComponent

