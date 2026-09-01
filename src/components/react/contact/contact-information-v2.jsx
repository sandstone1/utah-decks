




// import in Fragment
import { Fragment } from 'react';
// import in Font Awesome Facebook
import { FaFacebook } from 'react-icons/fa';
// import in Font Awesome Instagram
import { FaSquareInstagram } from "react-icons/fa6";
// import in Font Awesome Twitter
// import { FaXTwitter } from "react-icons/fa6";
// import in Font Awesome LinkedIn
// import { FaLinkedin } from 'react-icons/fa';
// import in our stylesheet
import styles from './contact-information-v2.module.scss';



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

                {
                    /*
                        // ==============================
                        // container > div1 ( call anytime )
                        // ==============================
                    */
                }
                <div>

                    <h6>Call Anytime</h6>
                    <a
                        href="tel:801-555-1212"
                    >
                        801-555-1212
                    </a>

                </div>

                {
                    /*
                        // ==============================
                        // container > div2 ( email us )
                        // ==============================
                    */
                }
                <div>

                    <h6>Email Us</h6>
                    <a 
                        href="mailto:info@canyonskystemcells.com"
                    >
                        info@canyonskystemcells.com
                    </a>

                </div>

                {
                    /*
                        // ==============================
                        // container > div3 ( visit us )
                        // ==============================
                    */
                }
                <div>

                    <h6>Visit Us</h6>
                    <address>
                        <span>1231 South 700 West</span>
                        <span>Suite 800</span>
                        <span>Draper, UT 84070</span>
                    </address>

                </div>

                {
                    /*
                        // ==============================
                        // container > div4 ( buisness hours )
                        // ==============================
                    */
                }
                <div>

                    <h6>Business Hours</h6>

                    <span>Monday - Friday</span>
                    <span>9:00 am - 5:00 pm</span>

                    <span>Saturday - Sunday</span>
                    <span>Closed</span>

                </div>

                {
                    /*
                        // ==============================
                        // container > div5 ( follow us )
                        // ==============================
                        <div>

                            <h6>Follow Us</h6>

                            <ul>

                                <li>
                                    <a href="" target="_blank">
                                        <FaSquareInstagram style={ { verticalAlign: '-5px', fontSize: '3.3rem' } } />
                                    </a>
                                </li>

                                <li>
                                    <a onClick={ ( e => e.preventDefault() ) }>
                                        <FaFacebook style={ { verticalAlign: '-5px', fontSize: '3.3rem' } } />
                                    </a>
                                </li>

                                {
                                    /*
                                        <li>
                                            <a onClick={ ( e => e.preventDefault() ) }>         
                                                <FaXTwitter style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                                            </a>
                                        </li>

                                        <li>
                                            <a onClick={ ( e => e.preventDefault() ) }>
                                                <FaLinkedin style={ { verticalAlign: '-5px', fontSize: '2.4rem' } } />
                                            </a>
                                        </li>
                                    */ /*
                                }

                            </ul>
                
                        </div>
                    */
                }

                {
                    /*
                        // ==============================
                        // container > hr ( divider )
                        // ==============================
                    */
                }
                <hr />

                {
                    /*
                        // ==============================
                        // container > div6 ( orange background circle )
                        // ==============================
                    */
                }
                <div></div>

            </div>
                
        </Fragment>

    );

} // end of ContactInformationComponent


