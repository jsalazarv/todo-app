const f=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}};f();class r{static fromJson({id:e,task:t,completed:d,creationDate:s}){const l=new r(t);return l.id=e,l.completed=d,l.creationDate=s,l}constructor(e){this.task=e,this.id=new Date().getTime(),this.completed=!1,this.creationDate=new Date}}class h{constructor(){this.loadLocalStorage()}newTodo(e){this.todos.push(e),this.saveToLocalStorage()}deleteTodo(e){this.todos=this.todos.filter(t=>t.id!=e),this.saveToLocalStorage()}todoStatus(e){for(const t of this.todos)if(t.id===parseInt(e)){t.completed=!t.completed,this.saveToLocalStorage();break}}deleteCompletedTodo(){this.todos=this.todos.filter(e=>!e.completed),this.saveToLocalStorage()}saveToLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))}loadLocalStorage(){this.todos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],this.todos=this.todos.map(e=>r.fromJson(e))}}const g=document.querySelector(".todo-list"),p=o=>{let e=o.completed?"completed":"",t=o.completed?"checked":"",d=o.id;const s=`
        <li class="${e}" data-id="${d}">
            <div class="view">
                <input type="checkbox" class="checkbox-round" ${t}>
                <label>${o.task}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `,l=document.createElement("div");return l.innerHTML=s,g.append(l.firstElementChild),l},L=document.querySelectorAll(".todo-count > strong"),v=document.querySelectorAll(".pending"),y=document.querySelectorAll(".completed"),S=document.querySelectorAll(".clear-completed"),i=()=>{let o=c.todos.filter(e=>{if(!e.completed)return e});L.forEach(e=>{e.innerHTML=o.length})},m=()=>{let o=c.todos.filter(t=>{if(t.completed)return t}),e=c.todos.filter(t=>{if(!t.completed)return t});y.forEach(t=>{o.length===0?t.classList.add("disabled"):t.classList.remove("disabled")}),S.forEach(t=>{o.length===0?t.classList.add("disabled"):t.classList.remove("disabled")}),v.forEach(t=>{e.length===0?t.classList.add("disabled"):t.classList.remove("disabled")})},n=document.querySelector(".new-todo");n.addEventListener("keyup",o=>{if(o.keyCode===13&&n.value.length>0){const e=new r(n.value);c.newTodo(e),p(e),n.value="",i()}});const k=document.querySelector(".todo-list");k.addEventListener("click",o=>{const e=o.target.parentElement.parentElement,t=o.target.localName,d=e.getAttribute("data-id");t.includes("input")&&(c.todoStatus(d),e.classList.toggle("completed"),i(),m())});const u=document.querySelector(".todo-list");u.addEventListener("click",o=>{const e=o.target.parentElement.parentElement,t=o.target.localName,d=e.getAttribute("data-id");t.includes("button")&&(c.deleteTodo(d),u.removeChild(e),i())});const T=document.querySelector(".clear-completed");T.addEventListener("click",()=>{const o=document.querySelector(".todo-list");for(let e=o.children.length-1;e>=0;e--){const t=o.children[e];t.classList.contains("completed")&&o.removeChild(t)}c.deleteCompletedTodo(),m()});const b=document.querySelector(".todo-list"),E=document.querySelectorAll(".filters"),C=document.querySelectorAll(".filter");E.forEach(o=>{o.addEventListener("click",e=>{const t=e.target.text;if(!!t){C.forEach(d=>d.classList.remove("selected")),e.target.classList.add("selected");for(const d of b.children){d.classList.remove("hidden");const s=d.classList.contains("completed");switch(t){case"Active":s&&d.classList.add("hidden");break;case"Completed":!s&&d.classList.add("hidden");break}}}})});const c=new h;window.addEventListener("load",()=>{document.getElementById("app").classList.remove("app"),c.todos.forEach(o=>p(o)),i(),m()});