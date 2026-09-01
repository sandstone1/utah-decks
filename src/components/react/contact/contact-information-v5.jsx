




// import in Fragment
import { Fragment } from 'react';
// import in the Font Awesome phone icon
import { FaPhoneAlt } from "react-icons/fa";
// import in the Font Awesome location icon
import { FaLocationDot } from "react-icons/fa6";
// import in the Font Awesome clock icon
import { FaClock } from "react-icons/fa6";
// import in our stylesheet
import styles from './contact-information-v5.module.scss';



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
                <h3>Reach Us Directly</h3>

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

                        <div>
                            <FaPhoneAlt style={ { verticalAlign : '-19.0px', margin : '0 -0.5rem 0 0', fontSize : '3.6rem' } } />
                        </div>

                        <h5>Call Anytime</h5>

                        <a
                            href="tel:801-555-1212"
                        >
                            801-555-1212
                        </a>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 3 > div 2 ( visit us )
                            // ==============================
                        */
                    }
                    <div>

                        <div>
                            <FaLocationDot style={ { verticalAlign : '-4.0px', margin : '0 0 0 -0.5rem', fontSize : '4.0rem' } } />
                        </div>

                        <h5>Visit Us</h5>

                        <address>
                            <span>1231 South 700 West</span>
                            <span>Suite 800</span>
                            <span>Draper, UT 84070</span>
                        </address>
        
                    </div>

                    {
                        /*
                            // ==============================
                            // container div 3 > div 3 ( buisness hours )
                            // ==============================
                        */
                    }
                    <div>

                        <div>
                            <FaClock style={ { verticalAlign : '-20.0px', fontSize : '3.6rem' } } />
                        </div>

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
        
                    </div>
                
                </div>

            </div>
                
        </Fragment>

    );

} // end of ContactInformationComponent


