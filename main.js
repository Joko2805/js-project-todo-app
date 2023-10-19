import './style.css'
import { App } from './src/task/app'
import todoStorage from './src/storage/task.storage';

todoStorage.initStorage();

App("#app");
