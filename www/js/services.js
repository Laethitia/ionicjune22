angular.module('starter.services', [])

.factory('Tasks', function() {

  // Some fake testing data
  var tasks = [
    {
      id: 0,
      name: 'Take out Trash',
      description: 'I need to make sure I take out the trash before mom gets home'
    },
    {
      id: 1,
      name: 'Clean Dishes',
      description: 'Also I need to clean the dishes before anyone gets home. Don\'t need any one to pile more on',
    },
    {
      id: 2,
      name: 'Feed Kitten',
      description: 'Gotta feed mittens in like 5 minutes or else he will get a little cranky',
    }
  ];

  return {
    all: function() {
      return tasks;
    },

    //function that pushes a new data into an array
    //taking the newTask, which is a object, and pushing it into an array. it will create an id given the lenghth of the array
    // it will take the value in the object from the Scope.new a user inputted and enter the taskName from the newTask object and the taskDesc
    create: function(newTask){
      tasks.push({
        id: tasks.length +1,
        name: newTask.taskName,
        description: newTask.taskDesc
      });
      return true;
    },
    remove: function(task) {
      //splice is an array method, that takes an index and the number of element and it deletes the things you put as an index and return what you took out
      tasks.splice(tasks.indexOf(task), 1);
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
