




// import in Fragment
import { Fragment } from 'react';
// import in Font Awesome Facebook
import { FaFacebook } from 'react-icons/fa';
// import in Font Awesome Instagram
import { FaSquareInstagram } from "react-icons/fa6";
// import in our stylesheet
import styles from './contact-information-v3.module.scss';



export default function ContactInformationComponent() {

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
    // useRouter();
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
                className={ styles.contactInformationContainer }
            >

                {
                    /*
                        // ==============================
                        // container > h5
                        // ==============================
                    */
                }
                <h2>Reach Us Directly</h2>

                <p>Feel free to call anytime or visit us during business hours. Walk ins
                are welcome.</p>
    
                {
                    /*
                        // ==============================
                        // container > div 3 ( wrapper div )
                        // ==============================
                    */
                }
                <div>
                    
                    {
                        /*
                            // ==============================
                            // container > div 3 > div 1 ( call anytime )
                            // ==============================
                        */
                    }
                    <div>

                        <h5>Call Anytime</h5>
                        <a
                            href="tel:801-555-1212"
                        >
                            801-555-1212
                        </a>

                        <picture>
                            <source 
                                srcset="/images/mj_telephone_01_200.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_telephone_01_200.jpeg"
                                width={ 200 }
                                height={ 200 }
                                loading="eager"
                                fetchpriority="high"
                                alt="Picture of a telephone"
                            />
                        </picture>
        
                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 3 > div 2 ( visit us )
                            // ==============================
                        */
                    }
                    <div>

                        <h5>Visit Us</h5>
                        <address>
                            <span>1231 South 700 West</span>
                            <span>Suite 800</span>
                            <span>Draper, UT 84070</span>
                        </address>

                        <picture>
                            <source 
                                srcset="/images/mj_visit_us_01_200.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_visit_us_01_200.jpeg"
                                width={ 200 }
                                height={ 200 }
                                loading="eager"
                                fetchpriority="high"
                                alt="Picture of person visiting the store"
                            />
                        </picture>
        
                    </div>

                    {
                        /*
                            // ==============================
                            // container div 3 > div 3 ( buisness hours )
                            // ==============================
                        */
                    }
                    <div>

                        <h5>Business Hours</h5>

                        <ul>
                            <div>
                                <li>Monday - Friday</li>
                                <li>9:00 am - 5:00 pm</li>
                            </div>
                            <div>
                                <li>Saturday - Sunday</li>
                                <li>Closed</li>                        
                            </div>                       
                        </ul>

                        <picture>
                            <source 
                                srcset="/images/mj_store_open_02_200.webp"
                                type="image/webp"
                            />
                            <img
                                src="/images/mj_store_open_02_200.jpeg"
                                width={ 200 }
                                height={ 200 }
                                loading="eager"
                                fetchpriority="high"
                                alt="Picture of person visiting the store"
                            />
                        </picture>
        
                    </div>
                
                </div>

            </div>
                
        </Fragment>

    );

} // end of ContactInformationComponent


