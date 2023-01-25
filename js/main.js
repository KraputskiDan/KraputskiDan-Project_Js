

// const cursor = document.querySelectorAll('.cursor');
// const cursor1 = document.querySelectorAll('.block_connect');
// cursor.forEach(element => {element.style.position = 'relative';
// // element.style.left= "0px"; element.style.top= "0px"; 

// })
// let find = Array.prototype.find;
// cursor1.forEach(element => element.setAttribute("flag", true))
// let canDrag = false;

// cursor.forEach(element => element.addEventListener( 'mousemove', e => {
//   if (!canDrag)
//     return;
//   element.style.zIndex = 1;
//   element.style.position = 'absolute'
//   element.style.left = e.pageX + 'px';
//   element.style.top = e.pageY + 'px';


//   for (const element1 of cursor) {
//     for (const element2 of cursor1) {
      
//       if(intersectionOfRectangles(element.getBoundingClientRect(), element2.getBoundingClientRect()) && !intersectionOfRectangles(element.getBoundingClientRect(), element1.getBoundingClientRect())) {
//         element.setAttribute("block_connect_name", element2.getAttribute("id"))
//         element2.setAttribute("flag", true)
//       }
//       if(!intersectionOfRectangles(element.getBoundingClientRect(), element2.getBoundingClientRect())) {
       
//         element2.setAttribute("flag", false)
//       }
//     }
//   }
//   }
// ));

// cursor.forEach(element => element.addEventListener( 'mouseup', e => {
//   canDrag = false 
//    element.setAttribute("block_connect_name", 0)
//     blockFind(element)
//     if(element.getAttribute("block_connect_name") === '0') {
//         element.style.top = 0 + 'px'
//           element.style.left = 0 + 'px'
//           element.style.position = 'relative'
//           console.log("asd5")}
//     cursor.forEach(element => element.style.zIndex = 1)
    
    
// }));
// cursor.forEach(element => element.addEventListener( 'mousedown', e => {
//   canDrag = true
// element.setAttribute("block_connect_name", 0)
//   }));

// function intersectionOfRectangles(fr, sr) {
//   return (fr.left < sr.right && fr.right > sr.left && fr.top < sr.bottom &&  fr.bottom > sr.top)
// }

// function blockFind(a) {
// for (const element1 of cursor) {
//   for (const element2 of cursor1) {
    
//     if(element2.getAttribute("flag") === 'false' && element1 != find.call(cursor, el => el == a)) {
    
        
//       }
      
      
//       if(intersectionOfRectangles(a.getBoundingClientRect(), element1.getBoundingClientRect()) && element1 != find.call(cursor, el => el == a)) {
//         a.style.top = 0 + 'px'
//         a.style.left = 0 + 'px'
//         a.style.position = 'relative'
//         console.log("asd4")
//       }

//     if(element2.getAttribute("flag") === 'true') {
//       if(intersectionOfRectangles(element2.getBoundingClientRect(), a.getBoundingClientRect()) ) {

//         if(element2.innerHTML[0] ==='.'){

//            a.style.top = element2.getBoundingClientRect().top + window.scrollY + 15 + 'px';
//         a.style.left = element2.getBoundingClientRect().left + window.scrollX + 25 + 'px';
//         element2.setAttribute("flag", false);
//         element2.innerHTML = a.innerHTML;
//         // a.setAttribute("block_connect_name", element2.getAttribute("id"))
//          a.style.top = 0 + 'px'
//           a.style.left = 0 + 'px'
//           a.style.position = 'relative'
//           a.remove(); 
//           console.log("asd3")
//          console.log(a.getAttribute("block_connect_name") === element2.getAttribute("id"))
//         }
//         else{
//               a.style.top = 0 + 'px'
//               a.style.left = 0 + 'px'
//               a.style.position = 'relative'
//         }

       
//          //return
         
//       }
//       else if(intersectionOfRectangles(a.getBoundingClientRect(), element1.getBoundingClientRect()) && element1 != find.call(cursor, el => el == a)) {
//         a.style.top = 0 + 'px'
//         a.style.left = 0 + 'px'
//         a.style.position = 'relative'
//         console.log("asd2")
//       }

//       else if((element2.getAttribute("flag") === 'true' && a.getAttribute("block_connect_name") === element2.getAttribute("id")) || (intersectionOfRectangles(a.getBoundingClientRect(), element1.getBoundingClientRect()) && element1 != find.call(cursor, el => el == a))) {
//           element2.setAttribute("flag", true)
//           a.style.top = 0 + 'px'
//           a.style.left = 0 + 'px'
//           a.style.position = 'relative'
//           console.log("asd1")

//       }

      
//       }

//   }
// }
// }

function task1_3(){
      let radioButton = document.querySelectorAll("input[name='test1_3']");
    let table;

    document.getElementById("testInfo1_3").innerHTML = `<ul><li>1. Их заказ стоит … </<li><li><button type="button" value="1">1360 рублей</button></<li><li><button type="button" value="2">1630 рублей </button></<li><li><button type="button" value="3">1360 рубль</button></<li></ul>`

    let buttonChange = document.querySelectorAll("#testInfo1_3 button");

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
          document.getElementById("testInfo1_3").innerHTML = table;
          break;
        case 2:
          table = `<ul>`
          table += `<li>2. Джон будет … </<li>`
          table += `<li><button type="button" value="1">пиццу без сыра и лазанью без соуса</button></<li>`
          table += `<li><button type="button" value="2">пиццу без мяса и лазанью без сыра</button></<li>`
          table += `<li><button type="button" value="3">мясную пиццу и лазанью без соуса</button></<li>`
          table += `</ul>`
          document.getElementById("testInfo1_3").innerHTML = table;
          break;
        case 3:
          table = `<ul>`
          table += `<li>3. Марк будет … </<li>`
          table += `<li><button type="button" value="1">пасту без базилика </button></<li>`
          table += `<li><button type="button" value="2">пиццу без кока-колы </button></<li>`
          table += `<li><button type="button" value="3">пиццу и кока-колу</button></<li>`
          table += `</ul>`
          document.getElementById("testInfo1_3").innerHTML = table;
          break;
        case 4:
          table = `<ul>`
          table += `<li>4. Наташа будет … </<li>`
          table += `<li><button type="button" value="1">сэндвич без мяса</button></<li>`
          table += `<li><button type="button" value="2"> большой сэндвич</button></<li>`
          table += `<li><button type="button" value="3">сэндвич без масла</button></<li>`
          table += `</ul>`
          document.getElementById("testInfo1_3").innerHTML = table;
          break;
        case 5:
          table = `<ul>`
          table += `<li>5.  Елена будет … </<li>`
          table += `<li><button type="button" value="1">пиццу без газа</button></<li>`
          table += `<li><button type="button" value="2">пиццу без мяса и без сыра</button></<li>`
          table += `<li><button type="button" value="3">пиццу без мяса и без газа</button></<li>`
          document.getElementById("testInfo1_3").innerHTML = table;
          table += `</ul>`
          break;
        default:
          // statements_def
          break;
      }

      let button = document.querySelectorAll("#testInfo1_3 button");
      button.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      button.forEach(el => {if(el != find.call(button, k => k == element)) el.style.background = 'none'})
    })) 

    }))
}




function task1_7(){
  let radioButton = document.querySelectorAll("input[name='test1_7']");
let table;

document.getElementById("testInfo1_7").innerHTML = `<ul><li>1. Почему Джеин не писала?</<li><li><button type="button" value="1">поэтому не было времени</button></<li><li><button type="button" value="2">потому что не было времени </button></<li><li><button type="button" value="3">потому, что была на рынке </button></<li></ul>`

let buttonChange = document.querySelectorAll("#testInfo1_7 button");

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
      table += `<li>1. Почему Джеин не писала? </<li>`
      table += `<li><button type="button" value="1">поэтому не было времени </button></<li>`
      table += `<li><button type="button" value="2">потому что не было времени </button></<li>`
      table += `<li><button type="button" value="3">потому, что была на рынке </button></<li>`
      table += `</ul>`
      document.getElementById("testInfo1_7").innerHTML = table;
      break;
    case 2:
      table = `<ul>`
      table += `<li>2. Джеин поедет в  </<li>`
      table += `<li><button type="button" value="1">Тулу</button></<li>`
      table += `<li><button type="button" value="2">Туле </button></<li>`
      table += `<li><button type="button" value="3">Тулы</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo1_7").innerHTML = table;
      break;
    case 3:
      table = `<ul>`
      table += `<li>3. В Туле делают  </<li>`
      table += `<li><button type="button" value="1">самовары и матрешки  </button></<li>`
      table += `<li><button type="button" value="2">пряники и матрешки  </button></<li>`
      table += `<li><button type="button" value="3">cамовары и пряники</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo1_7").innerHTML = table;
      break;
    case 4:
      table = `<ul>`
      table += `<li>4. Лев Толстой – это  </<li>`
      table += `<li><button type="button" value="1">известный русский писатель </button></<li>`
      table += `<li><button type="button" value="2">известный русский художник </button></<li>`
      table += `<li><button type="button" value="3">известный русский музыкант</button></<li>`
      table += `</ul>`
      document.getElementById("testInfo1_7").innerHTML = table;
      break;
    case 5:
      table = `<ul>`
      table += `<li>5. Его русские коллеги говорят, что на рынке очень </<li>`
      table += `<li><button type="button" value="1">страшно </button></<li>`
      table += `<li><button type="button" value="2">экстремально </button></<li>`
      table += `<li><button type="button" value="3">весело</button></<li>`
      document.getElementById("testInfo1_7").innerHTML = table;
      table += `</ul>`
      break;
      case 6:
      table = `<ul>`
      table += `<li>6. Фудкорты, это места  </<li>`
      table += `<li><button type="button" value="1">где не нужно бронировать столик </button></<li>`
      table += `<li><button type="button" value="2">где всегда невкусная еда </button></<li>`
      table += `<li><button type="button" value="3">где много туристов </button></<li>`
      document.getElementById("testInfo1_7").innerHTML = table;
      table += `</ul>`
      break;
    default:
      // statements_def
      break;
  }

  let button = document.querySelectorAll("#testInfo1_7 button");
  button.forEach(element => element.addEventListener('click', e=> {

  element.style.background = `red`

  button.forEach(el => {if(el != find.call(button, k => k == element)) el.style.background = 'none'})
})) 

}))
}




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

  function  task1_5(){

 var task = document.getElementById("task1_5").querySelectorAll('p .if_learning');
      var right_task = document.getElementById("task1_5").querySelectorAll('p .if_correct');

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


  function task2_5(){
      let radioButton = document.querySelectorAll("input[name='test2_5']");
    let table;

    document.getElementById("testInfo2_5").innerHTML = `<ul><li>1. У Джейн в фирме есть 14 ... </<li><li><button type="button" value="1">коллега </button></<li><li><button type="button" value="2">коллеги </button></<li><li><button type="button" value="3">коллег</button></<li></ul>`

    let buttonChange = document.querySelectorAll("#testInfo2_5 button");

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
          table += `<li>1. У Джейн в фирме есть 14 ...</<li>`
          table += `<li><button type="button" value="1">коллега </button></<li>`
          table += `<li><button type="button" value="2">коллеги </button></<li>`
          table += `<li><button type="button" value="3">коллег</button></<li>`
          table += `</ul>`
          document.getElementById("testInfo2_5").innerHTML = table;
          break;
        case 2:
          table = `<ul>`
          table += `<li>2. Сейчас Джейн знает ... </<li>`
          table += `<li><button type="button" value="1">новые русские слова и выражения </button></<li>`
          table += `<li><button type="button" value="2">новые русские блюда</button></<li>`
          table += `<li><button type="button" value="3">ничего нового не узнала</button></<li>`
          table += `</ul>`
          document.getElementById("testInfo2_5").innerHTML = table;
          break;
        case 3:
          table = `<ul>`
          table += `<li>3. Стандартный русский тость – это </<li>`
          table += `<li><button type="button" value="1"> На здоровье! </button></<li>`
          table += `<li><button type="button" value="2"> Будьте здоровы!</button></<li>`
          table += `<li><button type="button" value="3">За здоровье </button></<li>`
          table += `</ul>`
          document.getElementById("testInfo2_5").innerHTML = table;
          break;
        case 4:
          table = `<ul>`
          table += `<li>4. Последний тост по-русски – это ... </<li>`
          table += `<li><button type="button" value="1"> на последний </button></<li>`
          table += `<li><button type="button" value="2"> на посошок </button></<li>`
          table += `<li><button type="button" value="3">в посошок </button></<li>`
          table += `</ul>`
          document.getElementById("testInfo2_5").innerHTML = table;
          break;
        case 5:
          table = `<ul>`
          table += `<li>5. Утром, когда болит голова после вечеринки – это .... </<li>`
          table += `<li><button type="button" value="1">помеха </button></<li>`
          table += `<li><button type="button" value="2">похмелье </button></<li>`
          table += `<li><button type="button" value="3">послевкусие </button></<li>`
          document.getElementById("testInfo2_5").innerHTML = table;
          table += `</ul>`
          break;
        default:
          // statements_def
          break;
      }

      let button = document.querySelectorAll("#testInfo2_5 button");
      button.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      button.forEach(el => {if(el != find.call(button, k => k == element)) el.style.background = 'none'})
    })) 

    }))
}
