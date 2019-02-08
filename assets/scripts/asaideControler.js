$(function(){
    document.querySelectorAll('aside>div').forEach(div => {
        div.addEventListener('click', function(event){
            event.preventDefault();
            location.replace(`#page=${event.target.getAttribute("catId")}`);
    
        }, false)
    });
    
});