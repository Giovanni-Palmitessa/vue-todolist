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
                    text: 'Andare in palestra',
                    done: false
                },
            ],

            newTodo: ''
        }
    },
    methods: {
        addTodo(){
            this.toDos.push({
                text: this.newTodo,
                done: false,
            });
        }
    }
});

app.mount('#app');
