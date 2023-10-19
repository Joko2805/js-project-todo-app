import { Task } from "../model/task.model";

/**
 *
 * @param {Task} task Objeto task
 * @returns {HTMLElement} retorna un HTMLElement que contiene un task
 */
export const createHtmlToTask = (task) => {
  if (!task) throw new Error("Es necesario un objeto Task.");

  const { description, id, done } = task;

  const li = document.createElement("LI");
  if (done) li.classList.add("completed");
  li.setAttribute("data-id", id);
  li.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" ${done ? "checked" : ""}>
      <label>${description}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `;

  return li;
};
