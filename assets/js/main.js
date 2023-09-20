/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Consigli:
-iniziamo a capire usando postman cosa ci restituisce una chiamata all'endpoint :puntare_su_2: qui sopra.
-dove inserisco la chiamata ajax? uso una lifecycle hook? quale?
-devo ottenere 10 email tramite la chiamata, come faccio a ripetere un operazione cosí tante volte senza riscrivere la stessa implementazione? conosco uno strumento che mi puó tornare utile?
-dové la CDN di axios? https://cdnjs.com/libraries/axios
*/


const { createApp } = Vue

createApp({
    data() {
        return {
            answer: ''
        }
    },


    mounted() {

        


    }
}).mount('#app')