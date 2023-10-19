import html from "./app.html?raw";
import taskStorage, { Filters } from "./../storage/task.storage";
import { renderPendingCount, renderTasks } from "./functions";

export const App = (elementId) => {
  const ElementIds = {
    taskCollectionElementId: "[data-todo]",
    inputElementId: "[data-new-todo-input]",
    completedBtnELementId: "[data-completed-btn]",
    filtersElementId: "[data-filters]",
    filterItemElementId: "[data-filter-id]",
    pendingCountId: "[data-pending-count]",
  };

  const displayTasks = () => {
    const tasks = taskStorage.getAllTask();
    renderTasks(ElementIds.taskCollectionElementId, tasks);
    updatePendingCount();
  };

  const updatePendingCount = () => {
    renderPendingCount(ElementIds.pendingCountId);
  }

  (() => {
    // const div = document.createElement("DIV");
    // div.innerHTML = html;
    // document.querySelector(elementId).append(div);
    document.querySelector(elementId).innerHTML = html;
    displayTasks();
  })();

  const inputElement = document.querySelector(ElementIds.inputElementId);
  const listElement = document.querySelector(
    ElementIds.taskCollectionElementId
  );
  const completedBtnElement = document.querySelector(
    ElementIds.completedBtnELementId
  );
  const filterItemElements = document.querySelectorAll(
    ElementIds.filterItemElementId
  );

  inputElement.addEventListener("keyup", (e) => {
    if (e.keyCode !== 13) return;
    if (e.target.value.trim().length === 0) return;
    taskStorage.addTask(e.target.value);
    displayTasks();
    e.target.value = "";
  });

  listElement.addEventListener("click", (e) => {
    const taskId = e.target.closest("[data-id]").dataset.id;
    taskStorage.toggleTaskById(taskId);
    displayTasks();
  });

  listElement.addEventListener("click", (e) => {
    const taskId = e.target.closest("[data-id]").dataset.id;
    if (!(e.target.className === "destroy") || !taskId) return;
    taskStorage.deleteTaskById(taskId);
    displayTasks();
  });

  completedBtnElement.addEventListener("click", (e) => {
    taskStorage.deleteCompletedTasks();
    displayTasks();
  });

  filterItemElements.forEach((filter) => {
    filter.addEventListener("click", (e) => {
      filterItemElements.forEach((filter) =>
        filter.classList.remove("selected")
      );
      filter.classList.add("selected");
      switch (filter.dataset.filterId.toLowerCase()) {
        case "all":
          taskStorage.setFilterToTask(Filters.All);
          break;
        case "pending":
          taskStorage.setFilterToTask(Filters.Pending);
          break;
        case "completed":
          taskStorage.setFilterToTask(Filters.Completed);
          break;
      }
      displayTasks();
    });
  });
};
