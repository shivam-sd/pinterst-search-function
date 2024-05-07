let arr = [
    {name: "roses" , Image:"https://media.istockphoto.com/id/184597358/photo/pink-roses.jpg?s=1024x1024&w=is&k=20&c=isrvJrYsDlSBIDwKa-sr0MzXWsmx5VxpqAtLPOa0e-g="},

    {name:"love ", Image:"https://plus.unsplash.com/premium_photo-1676690624558-d05cf3f1d1bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "aniamls ", Image:"https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=1024x1024&w=is&k=20&c=ys7GJ96NEbe8UNzYUa-opvVChoX9spBHHPKfGiIt-Mk="},

    {name:"cat" , Image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "dogs" , Image:"https://media.istockphoto.com/id/486848304/photo/boy-giving-water-to-his-dog.jpg?s=1024x1024&w=is&k=20&c=zwInm5scsQSA3gfj2La_7nX8HmiXMWM9FYXozXErCxE="},

    {name:"Couple love" , Image:"https://media.istockphoto.com/id/878474692/photo/happy-and-beautiful-couple-in-love.jpg?s=1024x1024&w=is&k=20&c=JqrbaJE3k-3duc1ti6Nq7FkrVtzeC7rU2gjZTWvfxrM="},

    {name:"nature" , Image:"https://plus.unsplash.com/premium_photo-1675629118284-c9eb039df8cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"Vip Home" , Image:"https://images.unsplash.com/photo-1713365860516-256d20dbb7e0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"Jhhil" , Image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"Buisseness" , Image:"https://images.unsplash.com/photo-1705948354007-2aaf1259ac4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"car" , Image:"https://media.istockphoto.com/id/918555756/photo/car-driving-on-a-road-by-sea.jpg?s=1024x1024&w=is&k=20&c=VDsurAk3GzkWP_Jd0KBhPxo8aKXljh0-6SubQdrR1Qw="},

    {name:"dimond" , Image:"https://media.istockphoto.com/id/652925014/photo/horizontal-portrait-of-a-beautiful-girl-with-shiny-jewelry.jpg?s=1024x1024&w=is&k=20&c=I4CHzJq_b7YKIl1bUeGcUAntWJW3YiVJt8YQBBbkZcA="},

    {name:"edited" , Image:"https://media.istockphoto.com/id/1498465909/photo/bullet-cases.jpg?s=1024x1024&w=is&k=20&c=dRrfMlxOnig0obxIPEIr0ewJi9MGKGgWbt_uWQR9CtM="},

    {name:"flower with girl" , Image:"https://images.unsplash.com/photo-1714138665648-51e914cbaaab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"ganpati bappa" , Image:"https://media.istockphoto.com/id/831625280/photo/lord-ganesha.jpg?s=1024x1024&w=is&k=20&c=YmqZfkV2frVJapIibqDev6FvgVe1V7X5F2Nlra_Uw0I="},

    {name:"helloween" , Image:"https://media.istockphoto.com/id/831625280/photo/lord-ganesha.jpg?s=1024x1024&w=is&k=20&c=YmqZfkV2frVJapIibqDev6FvgVe1V7X5F2Nlra_Uw0I="},

    {name:"russian girl" , Image:"https://images.unsplash.com/photo-1580483046931-aaba29b81601?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"indian girl" , Image:"https://images.unsplash.com/photo-1622782262026-6a327a45014f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"japanese girl" , Image:"https://media.istockphoto.com/id/1281591625/photo/portrait-of-young-beautiful-asian-woman-on-holiday-vacation-summer-time-in-white-bedroom.jpg?s=1024x1024&w=is&k=20&c=36slaEAPsjNwGrTBmkmbJ27RUMxErJzcCGdDKfBVY6o="},

    {name:"Couple love" , Image:"https://media.istockphoto.com/id/878474692/photo/happy-and-beautiful-couple-in-love.jpg?s=1024x1024&w=is&k=20&c=JqrbaJE3k-3duc1ti6Nq7FkrVtzeC7rU2gjZTWvfxrM="},

    {name:"nature" , Image:"https://plus.unsplash.com/premium_photo-1675629118284-c9eb039df8cd?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"Vip Home" , Image:"https://images.unsplash.com/photo-1713365860516-256d20dbb7e0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name:"Jhhil" , Image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "roses" , Image:"https://media.istockphoto.com/id/184597358/photo/pink-roses.jpg?s=1024x1024&w=is&k=20&c=isrvJrYsDlSBIDwKa-sr0MzXWsmx5VxpqAtLPOa0e-g="},

    {name:"love ", Image:"https://plus.unsplash.com/premium_photo-1676690624558-d05cf3f1d1bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "aniamls ", Image:"https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=1024x1024&w=is&k=20&c=ys7GJ96NEbe8UNzYUa-opvVChoX9spBHHPKfGiIt-Mk="},

    {name:"cat" , Image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "dogs" , Image:"https://media.istockphoto.com/id/486848304/photo/boy-giving-water-to-his-dog.jpg?s=1024x1024&w=is&k=20&c=zwInm5scsQSA3gfj2La_7nX8HmiXMWM9FYXozXErCxE="},
]


function showTheImg(){
    var clutter = "";
    arr.forEach((obj) => {
        // console.log(obj.name)
        clutter += `<div class="box">
        <img src="${obj.Image}" alt="" width="200px">
        <h3 style="text-align: center;">${obj.name}</h3>
    </div>`;
});
var imgContainer = document.getElementById("img-container");
imgContainer.innerHTML = clutter;
}

let search = document.getElementById("search");
let overlay = document.getElementById("over-lay");

function blur(){
  search.addEventListener("focus",() => {
    overlay.style.opacity = '0.1';
  })
  search.addEventListener("blur",() => {
    overlay.style.opacity = '2';
  })
}


function inputshow(){

search.addEventListener("input",() =>{
    var clutter = "";
    let filterdArray = arr.filter(obj => obj.name.toLowerCase().startsWith(search.value));
    // console.log(filterdArray);
    filterdArray.forEach((obj) => {
        // console.log(obj.name)
        clutter += ` <div class="data">
        <h1>${obj.name}</h1>
    </div>`;
    })
    document.getElementById("search-data").style.display = 'inline-block';
    document.getElementById("search-data").innerHTML = clutter;

})

}


inputshow();
blur();
showTheImg();