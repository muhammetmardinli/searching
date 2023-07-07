const access = "bwL1geoKxIf9W9veS5spNVX6JUBY9rAHBXK0EiO8qIg";
const search = document.getElementById("searching");
const submitb = document.getElementById("button-addon2") ;
const resultPart = document.getElementsByClassName("results");
const showmorebut = document.getElementById("show");


let writtenData = "";
let page = 1;
/*

async function searching(){
    writtenData = search.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${writtenData}&client_id=${access}`
    
    const resp = await fetch(url)
    const data = await resp.json()
    
    const results = data.results
    
    if (page==1){
        resultPart.innerHTML
    }
    results.map(result => {
        const first = document.createElement('div');
        first.classList.add("container text-center");
        const second = document.createElement('div');
        second.classList.add("row align-items-start");
        const sutun = document.createElement('div');
        sutun.classList.add("col");
        const card = document.createElement('div');
        card.classList.add('card');
        const foto = document.createElement('img');
        foto.src = result.urls.small
        const inf = document.createElement('div');
        inf.classList.add("card-body");
        const link = document.createElement('a')
        link.classList.add("btn btn-outline-primary")
        link.href = result.links.html
        link.target = "_blank"
        link.textContent = result.alt_description
        link.type = "button"
        
        card.appendChild(foto);
        card.appendChild(link);
        sutun.append(card);
        second.append(sutun);
        first.append(second);
        
    })
    page++
    if (page>1){
        showmorebut.style.display = "block";
        
    }
}

submitb.addEventListener("click", (event)=> {
    event.preventDefault();
    page = 1 ; 
    searching();
})


showmorebut.addEventListener("click", (event)=>{
    searching();
})
*/
document.addEventListener("DOMContentLoaded", function() {
  const access = "bwL1geoKxIf9W9veS5spNVX6JUBY9rAHBXK0EiO8qIg";
  const search = document.getElementById("searching");
  const submitb = document.getElementById("button-addon2");
  const resultPart = document.getElementsByClassName("results")[0];
  const showmorebut = document.getElementById("show");

  let writtenData = "";
  let page = 1;

  async function searching() {
    writtenData = search.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${writtenData}&client_id=${access}`;

    const resp = await fetch(url);
    const data = await resp.json();

    const results = data.results;

    if (page == 1) {
      resultPart.innerHTML = "";
    }
    results.map((result) => {
      const first = document.createElement("div");
      first.classList.add("container", "text-center");
      const second = document.createElement("div");
      second.classList.add("row", "align-items-start");
      const sutun = document.createElement("div");
      sutun.classList.add("col");
      const card = document.createElement("div");
      card.classList.add("card");
      const foto = document.createElement("img");
      foto.src = result.urls.small;
      const inf = document.createElement("div");
      inf.classList.add("card-body");
      const link = document.createElement("a");
      link.classList.add("btn", "btn-outline-primary");
      link.href = result.links.html;
      link.target = "_blank";
      link.textContent = result.alt_description;
      link.type = "button";

      card.appendChild(foto);
      card.appendChild(link);
      sutun.append(card);
      second.append(sutun);
      first.append(second);
      resultPart.append(first);
    });
    page++;
    if (page > 1) {
      showmorebut.style.display = "block";
    }
  }

  submitb.addEventListener("click", (event) => {
    event.preventDefault();
    page = 1;
    searching();
  });

  showmorebut.addEventListener("click", (event) => {
    searching();
  });
});