

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
      table += `<li>1. Их заказ стоит … </<li>`
      table += `<li><button type="button" value="1">1360 рублей</button></<li>`
      table += `<li><button type="button" value="2">1630 рублей</button></<li>`
      table += `<li><button type="button" value="3">1360 рубль</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 2:
      table = `<ul>`
      table += `<li>2. Джон будет … </<li>`
      table += `<li><button type="button" value="1">пиццу без сыра и лазанью без соуса</button></<li>`
      table += `<li><button type="button" value="2">пиццу без мяса и лазанью без сыра</button></<li>`
      table += `<li><button type="button" value="3">мясную пиццу и лазанью без соуса</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 3:
      table = `<ul>`
      table += `<li>3. Марк будет … </<li>`
      table += `<li><button type="button" value="1">пасту без базилика </button></<li>`
      table += `<li><button type="button" value="2">пиццу без кока-колы </button></<li>`
      table += `<li><button type="button" value="3">пиццу и кока-колу</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 4:
      table = `<ul>`
      table += `<li>4. Наташа будет … </<li>`
      table += `<li><button type="button" value="1">сэндвич без мяса</button></<li>`
      table += `<li><button type="button" value="2"> большой сэндвич</button></<li>`
      table += `<li><button type="button" value="3">сэндвич без масла</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo").innerHTML = table;
      break;
    case 5:
      table = `<ul>`
      table += `<li>5.  Елена будет … </<li>`
      table += `<li><button type="button" value="1">пиццу без газа</button></<li>`
      table += `<li><button type="button" value="2">пиццу без мяса и без сыра</button></<li>`
      table += `<li><button type="button" value="3">пиццу без мяса и без газа</button></<li>`
      document.getElementById("testInfo").innerHTML = table;
      table += `</ul>`
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

    

  function  task1_4(){

      var task = document.getElementById("task1_4").querySelectorAll('p .if_learning');
      var right_task = document.getElementById("task1_4").querySelectorAll('p .if_correct');

      for (let i = 0; i < task.length; i++) {
        if(task[i].value === right_task[i].innerHTML)
        {
          if( task[i].classList.contains("errorTask"))
            task[i].classList.remove("errorTask");

          if( !task[i].classList.contains("successfulTask"))
            task[i].classList.add("successfulTask");
        }
        else{
          if( !task[i].classList.contains("errorTask"))
             task[i].classList.add("errorTask");


          if( task[i].classList.contains("successfulTask"))
              task[i].classList.remove("successfulTask");
            
        }
    }
  }