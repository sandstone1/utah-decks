


// import in Fragment
import { Fragment } from 'react';
// import in Animating Gradient Blur component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v4';
// import in our stylesheet
import styles from './contact-inspriation-v8.module.scss';


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
                    <h4>
                        &quot;The most reliable way to predict the future is to create it.&quot;<br />- Abraham Lincoln
                    </h4>

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
                        // container > div 3 ( picture of Abraham Lincoln )
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 3 > picture ( picture of Abraham Lincoln )
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
                            srcSet={ '/images/lincoln_03.webp' }
                            type={ 'image/webp' }
                        />
                        <img
                            src={ '/images/lincoln_03.png' }
                            width={ '512px' }
                            height={ '512px' }
                            loading={ 'lazy' }
                            // fetchPriority={ 'high' }
                            alt={ 'Abraham Lincoln' }
                        />
                    </picture>

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


