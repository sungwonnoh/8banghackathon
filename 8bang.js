const toggleBtn = document.querySelector(".sidebar-toggle");/*토글은 껐다켰다 기능*/
const sidebar = document.querySelector(".sidebar");/*사이드바요소*/

toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});

