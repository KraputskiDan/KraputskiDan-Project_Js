console.log("NaN")


const cursor = document.querySelectorAll('.cursor');
const cursor1 = document.querySelectorAll('.block_connect');
cursor.forEach(element => element.style.position = 'relative')
let find = Array.prototype.find;
cursor1.forEach(element => element.setAttribute("flag", true))
console.log(cursor1)

let canDrag = false;

cursor.forEach(element => element.addEventListener( 'mousemove', e => {
  if (!canDrag)
    return;
  element.style.zIndex = 1;
  element.style.position = 'absolute'
  element.style.left = e.pageX + 'px';
  element.style.top = e.pageY + 'px';
  for (const element1 of cursor) {
    for (const element2 of cursor1) {
      
      if(intersectionOfRectangles(element.getBoundingClientRect(), element2.getBoundingClientRect()) && !intersectionOfRectangles(element.getBoundingClientRect(), element1.getBoundingClientRect())) {
        element.setAttribute("block_connect_name", element2.getAttribute("id"))
        element2.setAttribute("flag", true)
      }
      if(!intersectionOfRectangles(element.getBoundingClientRect(), element2.getBoundingClientRect())) {
       
        element2.setAttribute("flag", false)
      }
    }
  }
  }
));

cursor.forEach(element => element.addEventListener( 'mouseup', e => {
  canDrag = false 
   element.setAttribute("block_connect_name", 0)
    blockFind(element)
    if(element.getAttribute("block_connect_name") === '0') {
        element.style.top = 0 + 'px'
          element.style.left = 0 + 'px'
          element.style.position = 'relative'
          console.log("asd")}
    cursor.forEach(element => element.style.zIndex = 0)
    
    
}));
cursor.forEach(element => element.addEventListener( 'mousedown', e => {
  canDrag = true
element.setAttribute("block_connect_name", 0)
  }));

function intersectionOfRectangles(fr, sr) {
  return (fr.left < sr.right && fr.right > sr.left && fr.top < sr.bottom &&  fr.bottom > sr.top)
}

function blockFind(a) {
for (const element1 of cursor) {
  for (const element2 of cursor1) {
    
    if(element2.getAttribute("flag") === 'false' && element1 != find.call(cursor, el => el == a)) {
    
        
      }
      
      
      if(intersectionOfRectangles(a.getBoundingClientRect(), element1.getBoundingClientRect()) && element1 != find.call(cursor, el => el == a)) {
        a.style.top = 0 + 'px'
        a.style.left = 0 + 'px'
        a.style.position = 'relative'
        console.log("asd")
      }

    if(element2.getAttribute("flag") === 'true') {
      if(intersectionOfRectangles(element2.getBoundingClientRect(), a.getBoundingClientRect()) ) {
        a.style.top = element2.getBoundingClientRect().top + window.scrollY + 15 + 'px';
        a.style.left = element2.getBoundingClientRect().left + window.scrollX + 25 + 'px';
        element2.setAttribute("flag", false)
        a.setAttribute("block_connect_name", element2.getAttribute("id"))
          console.log("asd")
         console.log(a.getAttribute("block_connect_name") === element2.getAttribute("id"))
         //return
         
      }
      else if(intersectionOfRectangles(a.getBoundingClientRect(), element1.getBoundingClientRect()) && element1 != find.call(cursor, el => el == a)) {
        a.style.top = 15 + 'px'
        a.style.left = 15 + 'px'
        a.style.position = 'relative'
        console.log("asd")
      }

      else if((element2.getAttribute("flag") === 'true' && a.getAttribute("block_connect_name") === element2.getAttribute("id")) || (intersectionOfRectangles(a.getBoundingClientRect(), element1.getBoundingClientRect()) && element1 != find.call(cursor, el => el == a))) {
          element2.setAttribute("flag", true)
          a.style.top = 0 + 'px'
          a.style.left = 0 + 'px'
          a.style.position = 'relative'
          console.log("asd")

      }

      
      }

  }
}
}

let radioButton = document.querySelectorAll("input[name='test']");
let table;

document.getElementById("testInfo").innerHTML = `<ul><li>1.  Почему Джеин не писала?</<li><li><button type="button" value="1">поэтому не было времени</button></<li><li><button type="button" value="2">потому что не было времени </button></<li><li><button type="button" value="3">потому, что была на рынке </button></<li></ul>`

let buttonChange = document.querySelectorAll("#testInfo button");

buttonChange.forEach(element => element.addEventListener('click', e=> {

  element.style.background = `red`

  buttonChange.forEach(el => {if(el != find.call(buttonChange, k => k == element)) el.style.background = 'none'})
}) 
  // statements
);

radioButton.forEach(element => element.addEventListener('change', e => { 
  switch (Number(element.getAttribute("value"))) {
    case 1:
      table = `<ul>`
      table += `<li>1.  Почему Джеин не писала?</<li>`
      table += `<li><button type="button" value="1">поэтому не было времени</button></<li>`
      table += `<li><button type="button" value="2">потому что не было времени </button></<li>`
      table += `<li><button type="button" value="3">потому, что была на рынке </button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 2:
      table = `<ul>`
      table += `<li>2.  Джеин поедет в</<li>`
      table += `<li><button type="button" value="1">Тулу </button></<li>`
      table += `<li><button type="button" value="2">Туле </button></<li>`
      table += `<li><button type="button" value="3">Тулы</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 3:
      table = `<ul>`
      table += `<li>3.  В Туле делают </<li>`
      table += `<li><button type="button" value="1">самовары и матрешки </button></<li>`
      table += `<li><button type="button" value="2">пряники и матрешки  </button></<li>`
      table += `<li><button type="button" value="3">самовары и пряники</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 4:
      table = `<ul>`
      table += `<li>4.  Лев Толстой – это </<li>`
      table += `<li><button type="button" value="1">известный русский писатель </button></<li>`
      table += `<li><button type="button" value="2">известный русский художник  </button></<li>`
      table += `<li><button type="button" value="3">известный русский музыкант</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 5:
      table = `<ul>`
      table += `<li>5.  Его русские коллеги говорят, что на рынке очень</<li>`
      table += `<li><button type="button" value="1">страшно  </button></<li>`
      table += `<li><button type="button" value="2">экстремально  </button></<li>`
      table += `<li><button type="button" value="3">весело</button></<li>`
      document.getElementById("testInfo").innerHTML = table;
      table += `</ul>`
      break;
    case 6:
      table = `<ul>`
      table += `<li>6.  Фудкорты, это места </<li>`
      table += `<li><button type="button" value="1">где не нужно бронировать столик   </button></<li>`
      table += `<li><button type="button" value="2">где всегда невкусная еда  </button></<li>`
      table += `<li><button type="button" value="3">где много много туристов </button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    default:
      // statements_def
      break;
  }

  let button = document.querySelectorAll("#testInfo button");
  button.forEach(element => element.addEventListener('click', e=> {

  element.style.background = `red`

  button.forEach(el => {if(el != find.call(button, k => k == element)) el.style.background = 'none'})
})) 

}))

    
