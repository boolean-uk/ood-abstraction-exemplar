class TaskList {

  #tasks

  constructor() {
    this.#tasks = []
  }

  addTask(task) {
    this.#tasks.push(task)
  }

  getOverdueTasks() {
    const overdueTasks = []
    for (const task of this.#tasks) {
      // it's not been completed
      if (!task.isComplete()) {
        // it has a due date
        if (task.hasDueDate()) {
          // the due date has passed
          if (task.hasDueDatePassed()) {
            overdueTasks.push(task)
          }
        }
      }
    }

    return overdueTasks
  }
}

module.exports = TaskList