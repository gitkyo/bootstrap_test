// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

// custom script to embed

//test webgl script
import { createApp } from 'https://unpkg.com/troisjs@0.3.2/build/trois.module.cdn.min.js';

// slider script
import "../../node_modules/@glidejs/glide/dist/glide.min.js";



// le DOM est chargé : https://learn.jquery.com/using-jquery-core/document-ready/
$( document ).ready(function() {

    
    //démarre un slider
    function _startSlider(){        

        new Glide('.glide').mount()

    }

    //récupère des données sur une url en JSON 
    function _fetchDataFromJson(){
        //get data from animeapi
        //https://www.pierre-giraud.com/javascript-apprendre-coder-cours/api-fetch/
        //https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/

        // api url
        const api_url = 
        "https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop&page[limit]=5&page[offset]=0";

        // Defining async function
        async function getapi(url) {

        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        var data = await response.json();

        if (response.status == 200) {
            console.log(response)
            console.log(data);
        }

        }
        // Calling that async function
        getapi(api_url);
    }

    //pour tester un outil js qui exploite le webGL
    function _startWebGlTest() { 
        //Le test webGL de https://github.com/troisjs/trois
        
        createApp({
        mounted() {
            const renderer = this.$refs.renderer;
            const box = this.$refs.box.mesh;
            renderer.onBeforeRender(() => {
            box.rotation.x += 0.01;
            });
        }
        }).mount('#app');

     }
     

    // Appels des fonctions   

    _startSlider();
    _fetchDataFromJson();
    _startWebGlTest();



});









  




