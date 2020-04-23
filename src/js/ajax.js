import $ from "jquery";

$(document).ready(function(){

    let produk={};
    const url = 'https://api.github.com/emojis';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            produk=data;
            
            Object.keys(data).forEach((key) => {
                const span = document.createElement("span");
                const img = document.createElement("img");
                img.setAttribute("src", data[key]);
                span.appendChild(img);
                const elem=document.getElementById('produk').appendChild(span);
            });
        })
    
    .catch(err => console.error(err));
     
});