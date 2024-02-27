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
        
    },
}).mount("#app");