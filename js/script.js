const createApp = Vue;

createApp({
    data(){
        return {

            quest: [
                {
                    text: "Migliorare l'arma che vuoi utilizzare",
                    done: false
                },
                {
                    text: "Migliorare l'armatura che vuoi utilizzare",
                    done: false
                },
                {
                    text: "Craftare o comprare 4/5 pozioni di cura",
                    done: false
                },
                {
                    text: "Affronta il boss",
                    done: false
                }
            ]

        }
    },
    methods: {
        
    },
}).mount("#app")