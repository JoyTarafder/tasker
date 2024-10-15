import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defTask = {
    id: crypto.randomUUID(),
    title: "Task LWS",
    description: "Lorem",
    tags: ["py", "js"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => (task.id === newTask.id ? newTask : task))
      );
    }

    setShowAddModal(false);
  }

  function onEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }
  function handleCloseClick(){
    setShowAddModal(false);
    setTaskToUpdate(null);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal onSave={handleAddTask} onCloseClick={handleCloseClick} taskToUpdate={taskToUpdate} />
      )}
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} onEdit={onEditTask} />
        </div>
      </div>
    </section>
  );
}
