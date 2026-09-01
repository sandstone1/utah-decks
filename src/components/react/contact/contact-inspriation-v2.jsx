


// import in Fragment
import { Fragment } from 'react';
// import in our stylesheet
import styles from './contact-inspriation-v2.module.scss';


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
                            // container > div 1 ( wrapper div ) > h3
                            // ==============================

                            “The meaning of life is to find your gift. The purpose of life is to give it away.” — William Shakespeare
                            “The best way to find yourself is to lose yourself in the service of others.” - Mahatma Gandhi
                            "The most reliable way to predict the future is to create it." - Abraham Lincoln
                            "Behind the cloud the sun is still shining." - Abraham Lincoln
                            “I never did a day’s work in my life, it was all fun.” - Thomas Edison
                        */
                    }
                    <h3>
                        &quot;I always invented to obtain money to go on inventing.&quot;<br />- Thomas Edison
                    </h3>

                    {
                        /*
                            // ==============================
                            // container > div 1 ( wrapper div ) > div 1
                            // ==============================
                        */
                    }
                    <div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                    </div>

                </div>

            </div>
                
        </Fragment>

    );

} // end of ContactInspritationComponent


