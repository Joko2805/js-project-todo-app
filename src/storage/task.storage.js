import { Task } from "../task/model/task.model";

export const Filters = {
  All: "all",
  Completed: "completed",
  Pending: "pending",
};

const storage = {
  taskCollection: [],
  filter: Filters.All,
};

const initStorage = () => {
  loadStore();
  console.log("iniciado");
};

const loadStore = () => {
  const storageString = localStorage.getItem("storage");

  if (!storageString) return;

  const { taskCollection = [] } =
    JSON.parse(storageString);

  storage.taskCollection = taskCollection;
  storage.filter = Filters.All;
};

const saveStorageToLocalStorage = () => {
  localStorage.setItem("storage", JSON.stringify(storage));
};

/**
 * Función para retornar todos segun el filtro
 * @param {Filters} filter
 * @returns {Array<Object>} retorna un areglo de objetos todo
 */
const getAllTask = (filter = storage.filter) => {
  switch (filter) {
    case Filters.All:
      return storage.taskCollection;
    case Filters.Completed:
      return storage.taskCollection.filter((task) => task.done);
    case Filters.Pending:
      return storage.taskCollection.filter((task) => !task.done);
  }
};

/**
 * Función para agregar un nuevo todo
 * @param {String} description Descripción del nuevo todo
 */
const addTask = (description) => {
  if (!description) throw new Error("No se permite descripciones vacías.");
  storage.taskCollection.push(new Task(description));
  saveStorageToLocalStorage();
};

/**
 * Función para cambiar el estado de DONE
 * @param {String} description Id del todo
 */
const toggleTaskById = (taskId) => {
  const task = storage.taskCollection.find((task) => task.id === taskId);
  task.done = !task.done;
  saveStorageToLocalStorage();
};

/**
 * Función para eliminar un todo
 * @param {String} description Id del todo
 */
const deleteTaskById = (taskId) => {
  storage.taskCollection = storage.taskCollection.filter(
    (task) => task.id !== taskId
  );
  saveStorageToLocalStorage();
};

/**
 * Función para borrar los todos completados
 */
const deleteCompletedTasks = () => {
  storage.taskCollection = storage.taskCollection.filter((task) => !task.done);
  saveStorageToLocalStorage();
};

/**
 *
 * @param {Filters} filter
 */
const setFilterToTask = (filter = Filters.All) => {
  storage.filter = filter;
  saveStorageToLocalStorage();
};

/**
 *
 * @returns retorna el filtro actual de storage
 */
const getCurrentTaskFilter = () => storage.filter;

export default {
  getAllTask,
  initStorage,
  loadStore,
  addTask,
  toggleTaskById,
  deleteTaskById,
  deleteCompletedTasks,
  setFilterToTask,
  getCurrentTaskFilter,
};
