/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
  const defTask = {
    'id':crypto.randomUUID(),
    'title': 'Task LWS',
    'description': 'Lorem',
    'tags': ['py', 'js'],
    'priority': 'High',
    'isFavorite': false
  }
   
    const [tasks, setTasks] = useState([defTask]);
    const [showAddModal, setShowAddModal] = useState(false);

    function handleAddTask(){
      console.log("hello")
    }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal/>}
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks}/>
        </div>
      </div>
    </section>
  );
}
