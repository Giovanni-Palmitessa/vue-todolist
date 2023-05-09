const app = Vue.createApp({
    data() {
        return {
            newTodo: [...toDos],

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
        addTodo(){
            this.newTodo.push(this.newTodo);
        }
    }
});

app.mount('#app');
