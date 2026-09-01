


// import in Fragment
import { Fragment } from 'react';
// import in Animating Gradient Blur component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v4';
// import in our stylesheet
import styles from './contact-inspriation-v10.module.scss';


export default function ContactInspritationComponent() {

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
    // create DOM reference
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

        <Fragment>

            {
                /*
                    // ==============================
                    // container
                    // ==============================
                */
            }
            <div 
                className={ styles.contactInspriationContainer }
            >

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
                            // container > div 1 ( wrapper div ) > h4
                            // ==============================
                        */
                    }
                    <h2>
                        &quot;The most reliable way to predict the future is to create it.&quot;<br />- Alan Kay, Xerox PARC, 1970s
                    </h2>

                    {
                        /*
                            // ==============================
                            // container > div 3 > picture ( picture of Alan Kay )
                            // ==============================

                            // ==============================
                            // remember, add the width and height to the image tag so
                            // that the content below this div does not appear for a
                            // split second on page load
                            // ==============================

                            // ==============================
                            // remember, in order to make the width and height responsive,
                            // we had to set the width percentage in the css file and on
                            // the parent div
                            // ==============================
                        */
                    }
                    <picture>
                        <source 
                            srcSet={ '/images/alan_kay_14.webp' }
                            type={ 'image/webp' }
                        />
                        <img
                            src={ '/images/alan_kay_14.webp' }
                            width={ '512px' }
                            height={ '512px' }
                            loading={ 'lazy' }
                            // fetchPriority={ 'high' }
                            alt={ 'Alan Kay' }
                        />
                    </picture>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 2 ( square or blob )
                        // ==============================
                    */
                }
                <div></div>

                {
                    /*
                        // ==============================
                        // container > div 3 ( picture of Alan Kay )
                        // ==============================
                    */
                }
                <div>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 4 ( animating gradient backgrounds )
                        // ==============================
                    */
                }
                <AnimatingGradientBackground />

            </div>
                
        </Fragment>

    );

} // end of ContactInspritationComponent


