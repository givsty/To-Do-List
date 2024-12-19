import { makeAutoObservable } from 'mobx';
import { IIndexedDBService, IndexedDBService } from './database';
import { Task } from '../entities/task';

class TaskStore {
  tasks: Task[] = [];
  dbService: IIndexedDBService;

  constructor(dbService: IIndexedDBService) {
    makeAutoObservable(this);
    this.dbService = dbService;
    this.loadTasks();
  }

  async loadTasks() {
    this.tasks = await this.dbService.getTasks();
  }

  async addTask(task: Omit<Task, 'id'>) {
    const id = await this.dbService.addTask(task);
    this.tasks.push({ id, ...task });
  }

  async updateTask(updatedTask: Task) {
    await this.dbService.updateTask(updatedTask);
    this.tasks = this.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
  }

  async deleteTask(id: number) {
    console.log('delete');
    await this.dbService.deleteTask(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

const dbService = new IndexedDBService('TodoDB', 'tasks');
const taskStore = new TaskStore(dbService);

export { taskStore };
