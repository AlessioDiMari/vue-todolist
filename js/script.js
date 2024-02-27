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
                });
            }
        }
        
    },
}).mount("#app");