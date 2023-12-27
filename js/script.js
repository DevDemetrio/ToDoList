class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText){
        //clona template
        let template = document.querySelector('.task').cloneNode(true);

        //remove classe hide
        template.classList.remove('hide');

        //manipula texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector("#task-container");

        //inserir na lista
        list.appendChild(template);

        //adiciona evento as tasks
        this.addEvents();
        
    }

    removeTask(task){
          //achar o elemento pai
          let parentEl = task.parentElement;

          //remove da lista
          parentEl.remove();
    }

    completeTask(task){
      
        //adiciona a classe de done
        task.classList.add('done');
    }

    
    addEvents(){
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length -1];

        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length -1];

        removeBtn.addEventListener('click', function (){
            todo.removeTask(this);
        });

        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        })

    }
}

let todo = new Todo()


//events
let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', function(e){
    e.preventDefault();

    let taskText = document.querySelector('#task');

    if(taskText.value != ''){
        todo.addTask(taskText.value);
    }
    

    taskText.value = '';
})