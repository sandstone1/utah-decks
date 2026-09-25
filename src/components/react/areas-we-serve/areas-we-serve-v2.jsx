


// import in Animating Gradient Blur Component
import AnimatingGradientBackground from '../animations/animating-gradient/animating-gradient-background-v20';
// import in the Font Awesome calendar check icon
import { FaRegCalendarCheck } from "react-icons/fa6";
// import in our stylesheet
import styles from './areas-we-serve-v2.module.scss';



export default function AreasWeServeComponent() {

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

    // use the useRef(); hook to create a reference to a DOM element(s)

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

        <div className={ styles.areasWeServeContainer }>

            {
                /*
                    // ==============================
                    // container > div 1 ( wrapper div )
                    // ==============================
                */
            }
            <div>

                <h2>
                    Areas We Serve
                </h2>

                {
                    /*
                        // ==============================
                        // container > div 1 ( wrapper div ) > div 2 ( wrapper div for cities )
                        // ==============================
                    */
                }
                <div>

                    <div>
                        <ul>
                            <li>Alpine</li>
                            <li>American Fork</li>
                            <li>Bluffdale</li>
                            <li>Bountiful</li>
                            <li>Cedar Hills</li>
                            <li>Centerville</li>
                            <li>Clearfield</li>
                            <li>Cottonwood Heights</li>
                            <li>Draper</li>
                            <li>Eagle Mountain</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Farmington</li>
                            <li>Heber City</li>
                            <li>Herriman</li>
                            <li>Highland</li>
                            <li>Holladay</li>
                            <li>Kaysville</li>
                            <li>Kearns</li>
                            <li>Layton</li>
                            <li>Lehi</li>
                            <li>Midvale</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Millcreek</li>
                            <li>Murray</li>
                            <li>North Salt Lake</li>
                            <li>Ogden</li>
                            <li>Orem</li>
                            <li>Park City</li>
                            <li>Pleasant Grove</li>
                            <li>Provo</li>
                            <li>Riverton</li>
                            <li>Salt Lake City</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Sandy</li>
                            <li>Saratoga Springs</li>
                            <li>South Jordan</li>
                            <li>Spanish Fork</li>
                            <li>Springville</li>
                            <li>Syracuse</li>
                            <li>Taylorsville</li>
                            <li>Tooele</li>
                            <li>West Jordan</li>
                            <li>West Valley City</li>
                        </ul>
                    </div>

                </div>

            </div>

            {
                /*
                    // ==============================
                    // container > div 3 ( animating backgrounds )
                    // ==============================
                */
            }
            <div>

                <AnimatingGradientBackground />

            </div>

        </div>

    );

} // end of AreasWeServeComponent

