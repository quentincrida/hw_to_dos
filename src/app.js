import Vue from 'vue';

document.addEventListener('DOMContentLoaded',
() => {
  console.log("Loaded");
  new Vue({
    el: "#app",
    data: {
     todos: ["Buy Shopping", "Clean Bathroom", "Car's MOT"],
     newTodo: ""
    },
    methods: {
      updateList: function(){
        this.todos = "List Updated";
      }
    }
  })
}
);
