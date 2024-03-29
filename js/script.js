const {createApp} = Vue;

createApp({
    data(){
        return {

            // Array di quest da fare per affrontare il boss del livello
            quests: [
                {
                    text: "Migliorare l'arma che vuoi utilizzare",
                    done: false
                },
                {
                    text: "Migliorare l'armatura che vuoi utilizzare",
                    done: true
                },
                {
                    text: "Craftare o comprare 4/5 pozioni di cura",
                    done: false
                },
                {
                    text: "Craftare arco e frecce",
                    done: true
                },
                {
                    text: "Affronta il boss",
                    done: false
                }
            ]

        }
    },

    // Funzioni che utilizzerò nel codice
    methods: {

        // Creo un metodo che rimuoverà la quest al click sulla x
        // do come parametro alla funzione l'indice dell'oggetto
        // da eliminare dall'array
        removeQuest(index){
            this.quests.splice(index, 1);
            // do questa funzione al click sulla x
        },

        // Creo una funzione che aggiunga una quest alla lista sopra
        addQuest(){
            
            // Verifico che il testo dell'input non sia vuoto o
            // composto da soli spazi utilizzando il trim()
            if(this.newQuestText.trim() != ''){
                this.quests.push({
                    text: this.newQuestText,
                    done: false,
                    // Dopodichè assegno la funzione al click del button
                });

                // Resetto il contenuto dell'input per non doverlo
                // far cancellare manualmente all'utente
                this.newQuestText = "";
            }
        },

        // Bonus 2
        // Freo una funzione che al click del testo della quest
        // inverta lo stato done
        toggleStatus(index){
            this.quests[index].done = !this.quests[index].done;
            // Dopodiché aggiungo un event listener @click a "text-quest"
            // che richiama questa funzione
        },
        
    },
}).mount("#app");



/***************** 
    BONUS 1
******************/
// aggiungo un attributo "@keyup.enter" all'input
// che richiama la funzione assQuest al click del tasto enter


// Correggo il fatto che non riuschisse a cancellare effettivamente
// quello che volevo perché non avevo dato il parametro index al v-for