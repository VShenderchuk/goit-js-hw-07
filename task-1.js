const NavEl = document.querySelectorAll("li.item").forEach(element => console.log("Категория: "+element.firstElementChild.textContent)  + console.log("Количество элементов: "+element.lastElementChild.children.length));

