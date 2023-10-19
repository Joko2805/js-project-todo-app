(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const C=`<section class="todoapp">\r
  <header class="header">\r
    <h1>Tareas</h1>\r
    <input\r
      id="new-todo-input"\r
      class="new-todo"\r
      placeholder="¿Qué necesita ser hecho?"\r
      autofocus\r
      data-new-todo-input\r
    />\r
  </header>\r
\r
  <!-- This section should be hidden by default and shown when there are todos -->\r
  <section class="main">\r
    <input id="toggle-all" class="toggle-all" type="checkbox" />\r
    <label for="toggle-all">Mark all as complete</label>\r
    <ul class="todo-list" data-todo>\r
      <!-- These are here just to show the structure of the list items -->\r
      <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
      <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
      <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
    </ul>\r
  </section>\r
\r
  <!-- This footer should hidden by default and shown when there are todos -->\r
  <footer class="footer">\r
    <!-- This should be "0 items left" by default -->\r
    <span class="todo-count"\r
      ><strong id="pending-count" data-pending-count>0</strong> pendiente(s)</span\r
    >\r
    <!-- Remove this if you don't implement routing -->\r
    <ul class="filters" data-filters>\r
      <li>\r
        <a class="selected filtro" class="selected" href="#/" data-filter-id="all">Todos</a>\r
      </li>\r
      <li>\r
        <a class="filtro" href="#/active" data-filter-id="pending">Pendientes</a>\r
      </li>\r
      <li>\r
        <a class="filtro" href="#/completed" data-filter-id="completed">Completados</a>\r
      </li>\r
    </ul>\r
    <!-- Hidden if no completed items are left ↓ -->\r
    <button class="clear-completed" data-completed-btn>Borrar completados</button>\r
  </footer>\r
</section>\r
\r
<footer class="info">\r
  <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
  <!-- Change this out with your name and url ↓ -->\r
  <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
  <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>\r
`;let g;const v=new Uint8Array(16);function E(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(v)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function I(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}const w=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:w};function S(e,t,o){if(y.randomUUID&&!t&&!e)return y.randomUUID();e=e||{};const l=e.random||(e.rng||E)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){o=o||0;for(let n=0;n<16;++n)t[o+n]=l[n];return t}return I(l)}class L{constructor(t){this.id=S(),this.description=t,this.done=!1,this.createdAt=new Date().toDateString()}}const c={All:"all",Completed:"completed",Pending:"pending"},a={taskCollection:[],filter:c.All},A=()=>{T(),console.log("iniciado")},T=()=>{const e=localStorage.getItem("storage");if(!e)return;const{taskCollection:t=[]}=JSON.parse(e);a.taskCollection=t,a.filter=c.All},m=()=>{localStorage.setItem("storage",JSON.stringify(a))},P=(e=a.filter)=>{switch(e){case c.All:return a.taskCollection;case c.Completed:return a.taskCollection.filter(t=>t.done);case c.Pending:return a.taskCollection.filter(t=>!t.done)}},x=e=>{if(!e)throw new Error("No se permite descripciones vacías.");a.taskCollection.push(new L(e)),m()},U=e=>{const t=a.taskCollection.find(o=>o.id===e);t.done=!t.done,m()},q=e=>{a.taskCollection=a.taskCollection.filter(t=>t.id!==e),m()},B=()=>{a.taskCollection=a.taskCollection.filter(e=>!e.done),m()},D=(e=c.All)=>{a.filter=e,m()},M=()=>a.filter,d={getAllTask:P,initStorage:A,loadStore:T,addTask:x,toggleTaskById:U,deleteTaskById:q,deleteCompletedTasks:B,setFilterToTask:D,getCurrentTaskFilter:M},O=e=>{if(!e)throw new Error("Es necesario un objeto Task.");const{description:t,id:o,done:l}=e,n=document.createElement("LI");return l&&n.classList.add("completed"),n.setAttribute("data-id",o),n.innerHTML=`
    <div class="view">
      <input class="toggle" type="checkbox" ${l?"checked":""}>
      <label>${t}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `,n};let h;const F=(e,t=[])=>{h||(h=document.querySelector(e)),h.innerHTML="",t.forEach(o=>{const l=O(o);h.append(l)})};let f;const H=e=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`Elemento con el ID ${e} no encontrado`);f.textContent=d.getAllTask(c.Pending).length},N=e=>{const t={taskCollectionElementId:"[data-todo]",inputElementId:"[data-new-todo-input]",completedBtnELementId:"[data-completed-btn]",filtersElementId:"[data-filters]",filterItemElementId:"[data-filter-id]",pendingCountId:"[data-pending-count]"},o=()=>{const s=d.getAllTask();F(t.taskCollectionElementId,s),l()},l=()=>{H(t.pendingCountId)};document.querySelector(e).innerHTML=C,o();const n=document.querySelector(t.inputElementId),i=document.querySelector(t.taskCollectionElementId),u=document.querySelector(t.completedBtnELementId),k=document.querySelectorAll(t.filterItemElementId);n.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(d.addTask(s.target.value),o(),s.target.value="")}),i.addEventListener("click",s=>{const p=s.target.closest("[data-id]").dataset.id;d.toggleTaskById(p),o()}),i.addEventListener("click",s=>{const p=s.target.closest("[data-id]").dataset.id;s.target.className!=="destroy"||!p||(d.deleteTaskById(p),o())}),u.addEventListener("click",s=>{d.deleteCompletedTasks(),o()}),k.forEach(s=>{s.addEventListener("click",p=>{switch(k.forEach(b=>b.classList.remove("selected")),s.classList.add("selected"),s.dataset.filterId.toLowerCase()){case"all":d.setFilterToTask(c.All);break;case"pending":d.setFilterToTask(c.Pending);break;case"completed":d.setFilterToTask(c.Completed);break}o()})})};d.initStorage();N("#app");
