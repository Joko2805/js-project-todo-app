import { Task } from "../model/task.model";
import { createHtmlToTask } from "./create-html-task";

let taskContainerElement;

/**
 *
 * @param {HTMLElement} containerElementId Id del elemento html contenedor de los tasks
 * @param {Array<Task>} tasks Coleccion de tasks
 */
export const renderTasks = (containerElementId, tasks = []) => {
  if (!taskContainerElement)
    taskContainerElement = document.querySelector(containerElementId);

  taskContainerElement.innerHTML = "";

  tasks.forEach((task) => {
    const taskHtml = createHtmlToTask(task);
    taskContainerElement.append(taskHtml);
  });
};
