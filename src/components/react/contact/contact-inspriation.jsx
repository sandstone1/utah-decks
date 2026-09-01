


// import in Fragment
import { Fragment } from 'react';
// import in our stylesheet
import styles from './contact-inspriation.module.scss';


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
                <div 
                    className={ styles.contactInspriationContainerDiv1 }
                >

                    {
                        /*
                            // ==============================
                            // container > div 1 ( wrapper div ) > h3
                            // ==============================
                        */
                    }
                    <h3 className={ styles.contactInspriationContainerDiv1H3 }>
                        We are optimists who love to work together
                    </h3>

                    {
                        /*
                            // ==============================
                            // container > div 1 ( wrapper div ) > div1
                            // ==============================
                        */
                    }
                    <div className={ styles.contactInspriationContainerDiv1Div1 }>
                        
                        <img
                            src={ '/images/person-1.jpeg' }
                            //width={ '60%' } // remember, I've already specified img width
                            // and height in the global.scss file
                            className={ styles.contactInspriationContainerDiv1Div1Image1 }
                            alt={ 'Person 1' }
                        />

                        <img
                            src={ '/images/person-2.jpeg' }
                            //width={ '60%' } // remember, I've already specified img width
                            // and height in the global.scss file
                            className={ styles.contactInspriationContainerDiv1Div1Image2 }
                            alt={ 'Person 1' }
                        />

                        <img
                            src={ '/images/person-3.jpeg' }
                            //width={ '60%' } // remember, I've already specified img width
                            // and height in the global.scss file
                            className={ styles.contactInspriationContainerDiv1Div1Image3 }
                            alt={ 'Person 1' }
                        />

                        <img
                            src={ '/images/person-4.jpeg' }
                            // width={ '60%' } // remember, I've already specified img width
                            // and height in the global.scss file
                            className={ styles.contactInspriationContainerDiv1Div1Image4 }
                            alt={ 'Person 1' }
                        />

                    </div>

                </div>

            </div>
                
        </Fragment>

    );

} // end of ContactInspritationComponent


