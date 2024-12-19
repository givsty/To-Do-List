import { makeAutoObservable } from 'mobx';
import { IIndexedDBService, IndexedDBService } from './database';
import { Task } from '../entities/task';

class TaskStore {
  tasks: Task[] = [];
  activeFilter: { key: keyof Task; value: Task[keyof Task] | null } = { key: 'priority', value: null }; // Активный фильтр
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
    await this.dbService.deleteTask(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  async filterTasks<T extends keyof Task>(key: T, value: Task[T]) {
    this.activeFilter = { key, value }; // Сохраняем активный фильтр
    this.tasks = await this.dbService.filterTasks(key, value);
  }

  clearFilter() {
    this.activeFilter = { key: 'priority', value: null }; // Сбрасываем фильтр
    this.loadTasks(); // Загружаем все задачи
  }
}

const dbService = new IndexedDBService('TodoDB', 'tasks');
const taskStore = new TaskStore(dbService);

export { taskStore };
