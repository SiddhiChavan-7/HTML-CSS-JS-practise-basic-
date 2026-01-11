let tasks=[];
const addTask = ()=>{
    const taskInput = document.getElementsById("taskInput");
    const text = taskInput.value.trim();

    if(text){
      tasks.push({text : text, completed: false});
      taskInput.value="";
      updateTaskList();
    }
    
};

const updateTaskList = () => {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear existing tasks

  tasks.forEach((task, index) => {
      // Create a new list item for the task
      const listItem = document.createElement("li");
      listItem.className = "taskItem";
      listItem.innerHTML = `
          <div>
              <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskComplete(${index})">
              ${task.text}
          </div>
          <div class="icons">
              <img src="./img/edit.png" onclick="editTask(${index})" alt="Edit" />
              <img src="./img/delete.png" onclick="deleteTask(${index})" alt="Delete" />
          </div>
      `;
      taskList.appendChild(listItem);
  });
};

const editTask = (index) => {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText) {
      tasks[index].text = newText;
      updateTaskList();
  }
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTaskList();
};

/**const updateTaskList = ()=> {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML="";

  tasks.forEach((task,index) =>{
    const listItem = document.createElement("li");
        
    listItem.innerHTML = `
    <div class = "taskItem">
       <div class = "task ${ task.completed ? "completed" : ""}">
       <input type ="checkbox" class = "checkbox"
        ${task.completed ? "checked" : ""

         } />
       <p> ${task.text}</p>
       </div>
       <div class ="icons">
         <img scr="./img/edit.png" onClick = "editTask(${index})"/>
         <img scr="./img/delete.png"  onClick = "deleteTask(${index})"/>
      </div>
    </div>
  `;
     listItem.addEventListener("change",()=> toggleTaskCompelete(index));
  //to append the list Task
  taskList.append(listItem);

  });
};**/



document.getElementsById("newTask").addEventListener("click" ,function(e) {e.preventDefault();

  addTask();


}); 



