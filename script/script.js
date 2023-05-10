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

            inputError: false,
        }
    },
    methods: {
        addTodo(){
            let cleanedTodo = this.newTodo.trim();
            if(cleanedTodo.length >= 5) {
                this.toDos.unshift({
                    text: this.newTodo,
                    done: false,
                });
                this.newTodo = '';
                this.inputError = false
            } else {
                this.inputError = true;
            }
        },

        deleteItem(index) {
            this.toDos.splice(index, 1);
            this.toDos[index].done = !this.toDos[index].done;
        },

        jobDone(i){
            this.toDos[i].done = !this.toDos[i].done;
        }
    }
});

app.mount('#app');
