

// import in defineConfig, passthroughImageService
import { defineConfig, passthroughImageService } from 'astro/config';
// import in node
import node from '@astrojs/node';
// import in netlify
import netlify from '@astrojs/netlify';
// import in react
import react from "@astrojs/react";
// import in solid
import solidJs from "@astrojs/solid-js";


// increase the limit to 20 so Node stops complaining after running npm run dev
// EventEmitter.defaultMaxListeners = 20;
process.setMaxListeners( 20 );

// we can only have one adapter active and when we upload our code to Netlify,
// their system automatically sets NETLIFY=true in the background
// const isNetlify = import.meta.env.NETLIFY === 'true';

/*
    remember, the rule is :

    astro.config.mjs → use process.env
    everywhere else in our Astro/React code → use import.meta.env
*/
const isNetlify = process.env.NETLIFY === 'true';


// defineConfig({})
export default defineConfig(
    {
        output  : 'server',
        // choose the adapter based on the environment
        adapter : isNetlify ? netlify() : node( { mode: 'standalone' } ), // this allows my sqlite to run
        prefetch: {
            prefetchAll     : true,
            defaultStrategy : 'viewport' // fastest navigation possible and it does help speed up the navigation to the home page
        },
        image   : {
            service : passthroughImageService() // this tells Astro's <Image /> component to skip the "Sharp" processing while still allowing the build process to hash the filenames for assets kept in the src/
        },
        site    : process.env.SITE || 'http://localhost:3038', // include site url when ready ( right now using Netlify generated url )
        build   : {
            inlineStylesheets : 'never' // this should split the CSS into separate files that load in parallel rather than one blocking file.
        },
        integrations : [
            // tell Astro exactly which folders belong to which framework
            react( { include: ['**/components/react/**'] } ),
            solidJs( { include: ['**/components/solid/**'] } )
        ],
        css : {
            modules : {
                // "camelCaseOnly" ensures compiled class names match safe JS object notation 
                localsConvention: 'camelCaseOnly'
            },
        },
        vite : {
            define: {
                'process.env': {},
                'process.argv': []
            },
            resolve : {
                dedupe : [ 'react', 'react-dom' ]
            },
            optimizeDeps : {
                include  : [ 'solid-icons/bs', 'react-dom/client' ]
            },
            ssr : {
                noExternal : [ 
                    'solid-icons', 
                    'three', 
                    '@react-three/fiber', 
                    '@react-three/drei',
                    'detect-gpu',
                    'gsap'
                ],
                external : [ 'react', 'react-dom' ]
            }
        }
    }
);

