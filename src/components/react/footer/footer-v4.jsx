


// import in the Logo component
import LogoComponent from '../logo/logo-utah-decks-mountain-v1';
// import in the Highlight text component link 1
import HighlightTextComponentLink1 from './highlight-text-link-1';
// import in the Highlight text component link 2
import HighlightTextComponentLink2 from './highlight-text-link-2';
// import in the Highlight text component link 3
import HighlightTextComponentLink3 from './highlight-text-link-3';
// import in the Highlight text component link 4
import HighlightTextComponentLink4 from './highlight-text-link-4';
// import in the Highlight text component link 5
import HighlightTextComponentLink5 from './highlight-text-link-5';
// import in the Highlight text component link 6
import HighlightTextComponentLink6 from './highlight-text-link-6';
// import in the Font Awesome phone icon
import { FaPhoneAlt } from "react-icons/fa";
// import in the Font Awesome location icon
import { FaLocationDot } from "react-icons/fa6";
// import in the Font Awesome clock icon
import { FaClock } from "react-icons/fa6";
// import in our stylesheet
import styles from './footer-v4.module.scss';



export default function Footer() {

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

        // ==============================
        // container
        // ==============================

        <footer className={ styles.footerContainer }>

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
                        // container > div 1 > div 1
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 1 > div 1 ( company name )
                            // ==============================
                        */
                    }
                    <div>
    
                        {
                            /*
                                // ==============================
                                // logo
                                // ==============================
                            */
                        }

                        <a href='/'>
                            <div>
                                <LogoComponent />
                            </div>
                            <picture>
                                <source 
                                    srcSet="/images/mj_utah_decks_wordmark_33.png"
                                    type="image/png"
                                />
                                <img
                                    className="contact-page-image-underline"
                                    src="/images/mj_utah_decks_wordmark_33.png"
                                    width={ 2150 }
                                    height={ 810 }
                                    loading="eager"
                                    fetchpriority="high"
                                    alt="Utah Decks & Pergolas"
                                />
                            </picture>
                        </a>
    
                    </div>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 2 ( wrapper div )
                        // ==============================
                    */
                }
                <div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 1 ( services )
                            // ==============================
                        */
                    }
                    <div>

                        <h2>Services</h2>

                        <p>Custom Decks</p>
                        <p>Pergolas</p>
                        <p>Railings & Lighting</p>
                        <p>Basements</p>
                        <p>Fireplaces</p>
                        <p>Design & Planning</p>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 2 ( important links )
                            // ==============================
                            <div>
                                <HighlightTextComponentLink2 />
                            </div>
                        */
                    }
                    <div>

                        <h2>Important Links</h2>

                        <div>
                            <HighlightTextComponentLink1 />
                        </div>

                        <div>
                            <HighlightTextComponentLink2 />
                        </div>

                        <div>
                            <HighlightTextComponentLink3 />
                        </div>

                        <div>
                            <HighlightTextComponentLink4 />
                        </div>

                    </div>

                    {
                        /*
                            // ==============================
                            // container > div 1 > div 2 > div 3 ( contact )
                            // ==============================
                            <address>
                                <span>Office address coming soon</span>
                                <span></span>
                                <span></span>
                            </address>
                        */
                    }
                    <div>
    
                        <h2>Contact</h2>
    
                        <div>

                            <a
                                href="tel:385-425-2299"
                            >
                                385-425-2299
                            </a>

                        </div>

                        <div>

                            <address>
                                <span>Office address coming soon</span>
                                <span></span>
                                <span></span>
                            </address>

                        </div>

                        <div>

                            <ul>
                                <div>
                                    <li>Monday - Friday: 7:00 am - 7:00 pm</li>
                                </div>
                                <div>
                                    <li>Saturday: 7:00 am - 12:00 pm</li>
                                </div>
                                <div>
                                    <li>Sunday: Closed</li>
                                </div>                
                            </ul>

                        </div>

                    </div>

                </div>

                {
                    /*
                        // ==============================
                        // container > div 1 > div 3
                        // ==============================

                        // the name below matches the bank statement, which is what FB recommends
                        // we use for verification purposes and then FB said to use the Certificate
                        // of Organization for legal entity purposes and the name on the Certificate
                        // of Organization is Utah Decks & Pergolas LLC 
                    */
                }
                <div>

                    <p>Copyright &copy; 2026 by Utah Decks & Pergolas LLC.</p>
                    <p>All rights reserved.</p>

                    <p>Copyright &copy; 2026 by Utah Decks & Pergolas LLC. All rights reserved.</p>

                </div>

            </div>

        </footer>

    );

} // end of Footer

