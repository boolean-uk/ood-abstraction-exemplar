class Task {
  constructor(dateDue, description) {
    //Task due date - not all tasks have a due date. If a task has no
    //due date, dueDate will be null
    this.dateDue = dateDue
    this.description = description
    this.status = "incomplete"
  }

  isComplete() {
    return this.status === "complete"
  }

  hasDueDate() {
    return this.dateDue !== null
  }

  hasDueDatePassed() {
    if (!this.hasDueDate()) {
        return false;
    }

    const today = new Date()
    return today > this.dateDue
  }
}

module.exports = Task