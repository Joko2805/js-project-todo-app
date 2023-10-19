import taskStorage, { Filters } from "../../storage/task.storage";

let pendintCountElement;

/**
 * Función para renderizar el pending count
 * @param {string} pendingCountId Identificador para buscar el elemento pending count
 */
export const renderPendingCount = (pendingCountId) => {
  if (!pendintCountElement) {
    pendintCountElement = document.querySelector(pendingCountId);
  }

  if (!pendintCountElement)
    throw new Error(`Elemento con el ID ${pendingCountId} no encontrado`);

  pendintCountElement.textContent = taskStorage.getAllTask(Filters.Pending).length;
};
