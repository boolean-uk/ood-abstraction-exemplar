const Task = require("../src/Task.js")
const TaskList = require("../src/TaskList.js")

describe("TaskList", () => {
  let taskList

  todayPlusDays = (days) => {
    const thisDate = new Date(new Date().getTime() +  24 * 60 * 60 * 1000 * days)
    //console.log('this date', thisDate)
    return new Date(thisDate)
  }

  beforeEach(() => {
    taskList = new TaskList()
  })

  it("returns overdue tasks", () => {
    
    //None of these should be overdue
    taskList.addTask(new Task(todayPlusDays(1), "due tomorrow"))
    taskList.addTask(new Task(null, "no due date"))

    const dueYesterdayButComplete = new Task(todayPlusDays(-1), "due yesterday but complete")
    dueYesterdayButComplete.setComplete()
    taskList.addTask(dueYesterdayButComplete)

    //These are overdue
    const dueYesterday = new Task(todayPlusDays(-1), "due yesterday")
    const due2DaysAgo = new Task(todayPlusDays(-2), "due 2 days ago")
    taskList.addTask(dueYesterday)
    taskList.addTask(due2DaysAgo)
    
    const expected = [
      dueYesterday,
      due2DaysAgo
    ]

    const myOverdueTasks = taskList.getOverdueTasks()
    console.log('overdue', myOverdueTasks)

    expect(myOverdueTasks).toEqual(expected)
  })
})
