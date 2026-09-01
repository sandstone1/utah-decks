



import styles from './logo-ranking-made-easy-stars.module.scss';



export default function LogoRankingMadeEasyStarsComponent() {

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

        <div className={ styles.logoRankingMadeEasyStarsContainer }>

            {
                /*
                    // ==============================
                    // container > div1 ( wrapper div ) > div tags
                    // ==============================

                */
            }
            <div>
            
                {
                    /*
                        // ==============================
                        // container > div1 ( wrapper div ) > div 1 > picture
                        // ==============================
                    */
                }
                <picture>
                    <source 
                        srcSet={ '/images/logo_green_star.png' }
                        type={ 'image/webp' }
                    />
                    <img
                        src={ '/images/logo_green_star.png' }
                        loading={ 'lazy' }
                        alt={ 'Green star' }
                    />
                </picture>

            </div>
            <div>

                {
                    /*
                        // ==============================
                        // container > div1 ( wrapper div ) > div 2 > picture
                        // ==============================
                    */
                }
                <picture>
                    <source 
                        srcSet={ '/images/logo_gray_star.png' }
                        type={ 'image/webp' }
                    />
                    <img
                        src={ '/images/logo_gray_star.png' }
                        loading={ 'lazy' }
                        alt={ 'Gray Star' }
                    />
                </picture>
            
            </div>
            <div>
                
                {
                    /*
                        // ==============================
                        // container > div1 ( wrapper div ) > div 3 > picture
                        // ==============================
                    */
                }
                <picture>
                    <source 
                        srcSet={ '/images/logo_red_star.png' }
                        type={ 'image/webp' }
                    />
                    <img
                        src={ '/images/logo_red_star.png' }
                        loading={ 'lazy' }
                        alt={ 'Red Star' }
                    />
                </picture>

            </div>

        </div>

    );

} // end of LogoRankingMadeEasyStarsComponent

