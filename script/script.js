const app = Vue.createApp({
    data() {
        return {
            toDos: [
                {
                    text: 'Fare la spesa',
                    done: true
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

            newTodo: '',
        }
    },
    methods: {
        addTodo(){
            this.toDos.unshift({
                text: this.newTodo,
                done: false,
            });
            this.newTodo = ''
        },

        deleteItem(index) {
            this.toDos.splice(index, 1);
        },

        jobDone(i){
            this.toDos[i].done = !this.toDos[i].done;
        }
    }
});

app.mount('#app');
