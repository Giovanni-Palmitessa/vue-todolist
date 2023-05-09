const app = Vue.createApp({
    data() {
        return {
            toDos: [
                {
                    text: 'Fare la spesa',
                    done: false
                },

                {
                    text: 'Fare i compiti',
                    done: false
                },

                {
                    text: 'Fare la lavatrice',
                    done: false
                },

                {
                    text: 'Droppare il like',
                    done: false
                },
            ]
        }
    },
    methods: {
        
    }
});

app.mount('#app');
