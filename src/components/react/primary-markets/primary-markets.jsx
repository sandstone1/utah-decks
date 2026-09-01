



// import in the scss file
import styles from './primary-markets.module.scss';


export default function PrimaryMarketsComponent() {

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

        <div className={ styles.primaryMarketsContainer }>

        {
            /*
                // ==============================
                // tilt shape
                // ==============================
            */
        }
        {
            /*
                // ==============================
                // container > div 1
                // ==============================
            */
        }
        <div className={ styles.primaryMarketsContainerDiv1 }>

            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>

            </svg>

        </div>

        {
            /*
                // ==============================
                // container > div 2
                // ==============================
            */
        }
        <div className={ styles.primaryMarketsContainerDiv2 }>

            <h2>
                Primary markets
            </h2>

            <hr />

            <p>Although we work with clients throughout the country, we focus on working
            with small to mid sized businesses that are located in the following four
            markets:</p>

            {
                /*
                    // ==============================
                    // container > div2 > div1 ( wrapper div )
                    // ==============================
                */
                
            }
            <div className={ styles.primaryMarketsContainerDiv2Div1 }>


                {
                    /*
                        // ==============================
                        // card 1
                        // ==============================
                    */
                }
                <div className={ styles.primaryMarketsContainerDiv2Div1Card1 }>

                    <div>

                        <h4>Salt Lake City</h4>

                        <picture>
                            <source 
                                srcset={ '../../images/salt_lake_city_trax_01_small.webp' }
                                type={ 'image/webp' }
                            />
                            <img
                                src={ '../../images/salt_lake_city_trax_01_small.jpg' }
                                loading={ 'lazy' }
                                alt={ 'Picture of Salt Lake City' }
                            />
                        </picture>

                    </div>

                </div>

                {
                    /*
                        // ==============================
                        // card 2
                        // ==============================
                    */
                }
                <div className={ styles.primaryMarketsContainerDiv2Div1Card2 }>

                    <div>
                        
                        <h4>Phoenix</h4>

                        <picture>
                            <source 
                                srcset={ '../../images/saguaro_01_small.webp' }
                                type={ 'image/webp' }
                            />
                            <img
                                src={ '../../images/saguaro_01_small.jpg' }
                                loading={ 'lazy' }
                                alt={ 'Picture of Saguaro cactus in Phoenix' }
                            />
                        </picture>

                    </div>

                </div>

                {
                    /*
                        // ==============================
                        // card 3
                        // ==============================
                    */
                }
                <div className={ styles.primaryMarketsContainerDiv2Div1Card3 }>

                    <div>
                    
                        <h4>Las Vegas</h4>

                        <picture>
                            <source 
                                srcset={ '../../images/las_vegas_01_small.webp' }
                                type={ 'image/webp' }
                            />
                            <img
                                src={ '../../images/las_vegas_01_small.jpg' }
                                loading={ 'lazy' }
                                alt={ 'Picture of Las Vegas' }
                            />
                        </picture>

                    </div>

                </div>

                {
                    /*
                        // ==============================
                        // card 4
                        // ==============================
                    */
                }
                <div className={ styles.primaryMarketsContainerDiv2Div1Card4 }>

                    <div>

                        <h4>St. George</h4>

                        <picture>
                            <source 
                                srcset={ '../../images/snow_canyon_01_small.webp' }
                                type={ 'image/webp' }
                            />
                            <img
                                src={ '../../images/snow_canyon_01_small.jpg' }
                                loading={ 'lazy' }
                                alt={ 'Picture of Snow Canyon in St. George' }
                            />
                        </picture>

                    </div>

                </div>

            </div>

        </div>        

    </div>

    );

} // end of PrimaryMarketsComponent
