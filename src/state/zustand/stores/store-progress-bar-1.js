

// ==============================
// Remember, much of the code for this file came from:
// " https://blog.devgenius.io/managing-persistent-states-in-nextjs-with-zustand-e6feea1a2d36 "
// another good article :
// " https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5 "
// ==============================


// import in the create function
import { create } from 'zustand';
// import in the persist middleware
import { persist } from 'zustand/middleware';


// create the useCart hook
const useProgressBarStore1 = create( // the create method will initialize the useCart hook

    // this will persist our state - comment out since I don't want
    // to persist this state
    // persist(

        // ==============================
        // first chunk of code - state
        // ==============================

        // pass in our set and get parameters

        // remember, " ECMAScript 5 (ES5 2009) introduced Getters and Setters. "
        // " In JavaScript, accessor properties are methods that get or set the
        // value of an object. For that, we use these two keywords: get - to
        // define a getter method to get the property value. set - to define
        // a setter method to set the property value. "

        // remember, set is similar to setItem in the useState hook
        // " [ item, setItem ] = useState(); ", for example
        ( set, get ) => ( 

            {

                // ==============================
                // Initial state
                // ==============================

                // initial state
                progressBarStoreState : false,

                // ==============================
                // Functions
                // ==============================

                // define our functions or in redux speak, actions

                // ==============================
                // Function 1 - toggle the progressBarStoreState
                // ==============================

                // toggle the progressBarStoreState
                toggleProgressBarStoreState : () => {

                    // set the new state
                    set( ( state ) => ( 
                        {

                           progressBarStoreState : !state.progressBarStoreState

                        }
                    ) ); // end of set

                }, // end of the progressBarStoreBarState function

                // ==============================
                // Function 2 - set the progressBarStoreState
                // ==============================

                // set the progressBarStoreState
                setProgressBarStoreState : () => {

                    // set the new state
                    set( ( state ) => ( 
                        {

                           progressBarStoreState : true

                        }
                    ) ); // end of set

                }, // end of the progressBarStoreState function

            } // end of {}
    
        ), // end of ( set, get )

        // ==============================
        // Second chunk of code - localStorage name
        // ==============================

        // set the name for local storage
        // { name : 'progressBarStoreState' }

    // ) // end of persist

); // end of create();


// export useProgressBarStore1
export default useProgressBarStore1;

