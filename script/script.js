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

            newTodo: '',

            isActive: false,
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

        jobDone(){
            this.isActive = !this.isActive;
        }
    }
});

app.mount('#app');
