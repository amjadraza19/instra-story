var arr=[
    {dp:"picAmjad.jpeg",story:"picAmjad.jpeg"},
    {dp:"Amjad2.jpeg",story:"Amjad2.jpeg"},
    {dp:"Amjad3.jpeg",story:"Amjad3.jpeg"},
    {dp:"Amjad4.jpeg",story:"Amjad4.jpeg"},
    {dp:"Amjad5.jpeg",story:"Amjad4.jpeg"},
    {dp:"Amjad6.jpeg",story:"Amjad6.jpeg"},

];


var cltr="";

arr.forEach(function(el,idx){
    cltr += ` <div class="story">
    <img id="${idx}" src="${el.dp}" alt="">
</div>`;
});

document.querySelector("#stories").innerHTML = cltr;
document.querySelector("#stories").addEventListener("click",function(dts){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dts.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },3000)
});