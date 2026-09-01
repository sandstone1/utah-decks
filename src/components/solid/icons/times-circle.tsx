

/** @jsxImportSource solid-js */



export default function FaSolidTimesCircle( props : { style?: any } ) {

    return (
        <svg
            stroke-width="0"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            color="currentColor"
            style={ props.style }
        >
            <defs>
                <mask id="hole">
                { 
                    /* 
                        white makes the circle visible
                    */
                }
                <rect width="512" height="512" fill="white" />
                { 
                    /* 
                        black "cuts" the hole and we use a thick stroke for the X
                    */
                }
                <path 
                    fill="none" 
                    stroke="black" 
                    stroke-width="80" 
                    stroke-linecap="round" 
                    d="M160 160 L352 352 M352 160 L160 352" 
                />
                </mask>
            </defs>
            { 
                /* 
                    the circle uses the mask to create the transparent X hole
                */
            }
            <circle 
                cx="256" 
                cy="256" 
                r="256" 
                fill="currentColor" 
                mask="url(#hole)" 
            />
        </svg>        
    );

}
