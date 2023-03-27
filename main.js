import '/src/stylesheets/main.scss';
import { TaskCore, Task } from '/src/scripts/classes/task';

const myTask = new TaskCore('A title', 'A wordy description');
console.log(myTask);
myTask.setTitle = 'A new title';
console.log(myTask);
myTask.setDescription = 'A new very wordy description';
console.log(myTask);
myTask.toggleStatus();
console.log(myTask);
myTask.toggleStatus();
console.log(myTask);

const myTaskTwo = new TaskCore('Second title');
console.log(myTaskTwo);

const myFullTask = new Task('A Full title', { dueDate: '25' });
myFullTask.addSubTask(myTask);
myFullTask.addSubTask(myTaskTwo);
console.log(myFullTask);

console.log(myTask.info);
console.log(myFullTask.info);
console.log(myFullTask.getSubTasks);
