/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*--------------------------------------------------
Register the Service Worker
chrome://serviceworker-internals/
---------------------------------------------------*/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
        console.log(registration);
        // TODO
    }).catch(function (error) {
        console.log('ServiceWorker registration failed: ', error);
    })
} else {
    console.log('Service Worker is not supported in this browser.');
}