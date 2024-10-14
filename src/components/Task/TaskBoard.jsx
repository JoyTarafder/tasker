import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defTask = {
    'id':crypto.randomUUID(),
    'title': 'Task Title',
    'description': 'Lorem',
    'tags': ['py', 'js'],
    'priority': 'High',
    'isFevorite': true
  }
    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState([defTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList tasks={tasks}/>
        </div>
      </div>
    </section>
  );
}
