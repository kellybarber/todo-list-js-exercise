function newTask(title, description) {
  const task = {
    title       : title,
    description : description,
    complete    : false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " been " : " not been "}completed`)
    },

    completeTask: function() {
      task.complete = true
    }

  }
  return task
}




const taskOne = newTask("Clean Cat Litter", "Remove Defecation from the Litterbox")
const taskTwo = newTask("Do Laundry", "You Clothes are Mad Dirty")
const tasks   = [taskOne, taskTwo]

taskOne.logState()

console.log(tasks)
