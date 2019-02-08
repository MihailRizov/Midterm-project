window.addEventListener('DOMContentLoaded', function(){
    var menu = new Map();
    var homepage = document.querySelector("main").innerHTML;

document.querySelector('#logo').addEventListener('click', function(){
    document.querySelector('main').innerHTML = homepage;
},false)

document.querySelectorAll('aside>div').forEach(div => {
    div.addEventListener('click', function(event){
        event.preventDefault();
        var html = '';
        var content = itemStorage.get(event.target.getAttribute("id"));
        console.log(content)
        var templateString = document.getElementById('items').innerHTML;
        var template = Handlebars.compile(templateString);
        content.forEach(content => html += template(content));
        document.querySelector('main').innerHTML = html;

    }, false)
});
console.log(menu)
},false)