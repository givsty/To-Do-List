import "fake-indexeddb/auto";
import { IndexedDBService } from './database';
import type { Task } from '../entities/task';

const mockTask = (task: Omit<Task, "id">): Omit<Task, "id"> => (task);

describe('IndexedDBService', () => {
  let dbService: IndexedDBService;

  beforeAll(() => {
    indexedDB.deleteDatabase('TestDB');
    dbService = new IndexedDBService('TestDB', 'tasks');
  });

  afterEach(async () => {
    const db = await dbService['openDB']();
    const transaction = db.transaction('tasks', 'readwrite');
    const store = transaction.objectStore('tasks');
    store.clear();
  });

  it('should add a task and return its id', async () => {
    const task = mockTask({ title: 'Test Task', priority: 'low', description: 'Test description', status: false });
    const id = await dbService.addTask(task);
    expect(typeof id).toBe('number');
  });

  it('should retrieve all tasks', async () => {
    const task1 = mockTask({ title: 'Task 1', priority: 'low', description: 'Description 1', status: false });
    const task2 = mockTask({ title: 'Task 2', priority: 'medium', description: 'Description 2', status: true });

    await dbService.addTask(task1);
    await dbService.addTask(task2);

    const tasks = await dbService.getTasks();
    expect(tasks.length).toBe(2);
    expect(tasks[0]).toMatchObject(task1);
    expect(tasks[1]).toMatchObject(task2);
  });

  it('should update a task', async () => {
    const task = mockTask({ title: 'Original Task', priority: 'low', description: 'Original description', status: false });
    const id = await dbService.addTask(task);

    const updatedTask: Task = { id, title: 'Updated Task', priority: 'high', description: 'Updated description', status: true };
    await dbService.updateTask(updatedTask);

    const tasks = await dbService.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toMatchObject(updatedTask);
  });

  it('should delete a task by id', async () => {
    const task = mockTask({ title: 'Task to Delete', priority: 'medium', description: 'Delete me', status: false });
    const id = await dbService.addTask(task);

    await dbService.deleteTask(id);

    const tasks = await dbService.getTasks();
    expect(tasks.length).toBe(0);
  });

  it('should filter tasks by priority', async () => {
    const task1 = mockTask({ title: 'Low Priority Task', priority: 'low', description: 'Low priority', status: false });
    const task2 = mockTask({ title: 'High Priority Task', priority: 'high', description: 'High priority', status: true });

    await dbService.addTask(task1);
    await dbService.addTask(task2);

    const filteredTasks = await dbService.filterTasks('priority', 'low');
    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0]).toMatchObject(task1);
  });

  it('should return an empty array if no tasks match the filter', async () => {
    const task = mockTask({ title: 'Some Task', priority: 'medium', description: 'No match', status: false });
    await dbService.addTask(task);

    const filteredTasks = await dbService.filterTasks('priority', 'high');
    expect(filteredTasks.length).toBe(0);
  });

  it('should handle getting all cards (alias of getTasks)', async () => {
    const task = mockTask({ title: 'Card Task', priority: 'medium', description: 'Card test', status: true });
    await dbService.addTask(task);

    const tasks = await dbService.getAllCards();
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toMatchObject(task);
  });
});
