let find = Array.prototype.find;

function task1_3(){
    let radioButton = document.querySelectorAll("input[name='test1_3']");
    
    let buttonsSection_1 = document.querySelectorAll("#test1_3 #test_section_1 button");
    let buttonsSection_2 = document.querySelectorAll("#test1_3 #test_section_2 button");
    let buttonsSection_3 = document.querySelectorAll("#test1_3 #test_section_3 button");
    let buttonsSection_4 = document.querySelectorAll("#test1_3 #test_section_4 button");
    let buttonsSection_5 = document.querySelectorAll("#test1_3 #test_section_5 button");

    buttonsSection_1.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`;
     

      buttonsSection_1.forEach(el => {if(el != find.call(buttonsSection_1, k => k == element)) el.style.background = 'none';  el.setAttribute("disabled", true)})
    }))
    buttonsSection_2.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_2.forEach(el => {if(el != find.call(buttonsSection_2, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }))
    buttonsSection_3.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_3.forEach(el => {if(el != find.call(buttonsSection_3, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }))
    buttonsSection_4.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_4.forEach(el => {if(el != find.call(buttonsSection_4, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }))
    buttonsSection_5.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_5.forEach(el => {if(el != find.call(buttonsSection_5, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }));

    radioButton.forEach(element => element.addEventListener('change', e => { 
      switch (Number(element.getAttribute("value"))) {
        case 1:
          document.querySelectorAll("#test_section_1")[0].style.zIndex = 1;
          document.querySelectorAll("#test_section_2")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[0].style.zIndex = 0;
          break;
        case 2:
          document.querySelectorAll("#test_section_1")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[0].style.zIndex = 1;
          document.querySelectorAll("#test_section_3")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[0].style.zIndex = 0;
          break;
        case 3:
          document.querySelectorAll("#test_section_1")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[0].style.zIndex = 1;
          document.querySelectorAll("#test_section_4")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[0].style.zIndex = 0;
          break;
        case 4:
          document.querySelectorAll("#test_section_1")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[0].style.zIndex = 1;
          document.querySelectorAll("#test_section_5")[0].style.zIndex = 0;
          break;
        case 5:
          document.querySelectorAll("#test_section_1")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[0].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[0].style.zIndex = 1;
          break;
        default:
          // statements_def
          break;
      }

      

    }))
}

const rightAnswerT1_3 = [
  {answer: 1},
  {answer: 2},
  {answer: 3},
  {answer: 2},
  {answer: 3}
]

document.getElementById("button_result_t_1_3").onclick = () => {
    let buttonsSection_1 = document.querySelectorAll("#test1_3 #test_section_1 button");
    let buttonsSection_2 = document.querySelectorAll("#test1_3 #test_section_2 button");
    let buttonsSection_3 = document.querySelectorAll("#test1_3 #test_section_3 button");
    let buttonsSection_4 = document.querySelectorAll("#test1_3 #test_section_4 button");
    let buttonsSection_5 = document.querySelectorAll("#test1_3 #test_section_5 button");

    buttonsSection_1.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_3[0].answer)
          el.style.background = 'green' 
    })
    buttonsSection_2.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_3[1].answer)
          el.style.background = 'green' 
    })
    buttonsSection_3.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_3[2].answer)
          el.style.background = 'green' 
    })    
    buttonsSection_4.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_3[3].answer)
          el.style.background = 'green' 
    })    
    buttonsSection_5.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_3[4].answer)
          el.style.background = 'green' 
    })

    let result = 0;

    let bG = 0;
    let bR = 0;

    let node = document.querySelectorAll("#testInfo1_3 button")

    node.forEach(n => {
      if(n.style.background == 'green')
        bG += 1;
      else if(n.style.background == 'red')
        bR += 1;
    })

    result = bG * 20 - bR * 20;
    
    console.log(result, bG, bR)           
}

const rightAnswerT1_7 = [
  {answer: 1},
  {answer: 2},
  {answer: 3},
  {answer: 2},
  {answer: 3},
  {answer: 3}
]

document.getElementById("button_result_t_1_7").onclick = () => {
    let buttonsSection_1 = document.querySelectorAll("#test1_7 #test_section_1 button");
    let buttonsSection_2 = document.querySelectorAll("#test1_7 #test_section_2 button");
    let buttonsSection_3 = document.querySelectorAll("#test1_7 #test_section_3 button");
    let buttonsSection_4 = document.querySelectorAll("#test1_7 #test_section_4 button");
    let buttonsSection_5 = document.querySelectorAll("#test1_7 #test_section_5 button");
    let buttonsSection_6 = document.querySelectorAll("#test1_7 #test_section_6 button");

    buttonsSection_1.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_7[0].answer)
          el.style.background = 'green' 
    })
    buttonsSection_2.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_7[1].answer)
          el.style.background = 'green' 
    })
    buttonsSection_3.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_7[2].answer)
          el.style.background = 'green' 
    })    
    buttonsSection_4.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_7[3].answer)
          el.style.background = 'green' 
    })    
    buttonsSection_5.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_7[4].answer)
          el.style.background = 'green' 
    })
    buttonsSection_6.forEach(el => {
      if(el.style.background == 'red')
        if(Number(el.getAttribute("value")) === rightAnswerT1_7[5].answer)
          el.style.background = 'green' 
    })

    let result = 0;

    let bG = 0;
    let bR = 0;

    let node = document.querySelectorAll("#testInfo1_3 button")

    node.forEach(n => {
      if(n.style.background == 'green')
        bG += 1;
      else if(n.style.background == 'red')
        bR += 1;
    })

    result = bG * 20 - bR * 20;
    
    console.log(result, bG, bR)           
}

let blockEmpty = document.querySelectorAll('.if_empty');


setInterval(() => blockEmpty.forEach(e=> e.removeAttribute("style")), 100);





function task1_7(){
  let radioButton = document.querySelectorAll("input[name='test1_7']");
    
    let buttonsSection_1 = document.querySelectorAll("#test1_7 #test_section_1 button");
    let buttonsSection_2 = document.querySelectorAll("#test1_7 #test_section_2 button");
    let buttonsSection_3 = document.querySelectorAll("#test1_7 #test_section_3 button");
    let buttonsSection_4 = document.querySelectorAll("#test1_7 #test_section_4 button");
    let buttonsSection_5 = document.querySelectorAll("#test1_7 #test_section_5 button");
    let buttonsSection_6 = document.querySelectorAll("#test1_7 #test_section_6 button");

    buttonsSection_1.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`;
     

      buttonsSection_1.forEach(el => {if(el != find.call(buttonsSection_1, k => k == element)) el.style.background = 'none';  el.setAttribute("disabled", true)})
    }))
    buttonsSection_2.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_2.forEach(el => {if(el != find.call(buttonsSection_2, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }))
    buttonsSection_3.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_3.forEach(el => {if(el != find.call(buttonsSection_3, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }))
    buttonsSection_4.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_4.forEach(el => {if(el != find.call(buttonsSection_4, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }))
    buttonsSection_5.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_5.forEach(el => {if(el != find.call(buttonsSection_5, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }));
    buttonsSection_6.forEach(element => element.addEventListener('click', e=> {

      element.style.background = `red`

      buttonsSection_6.forEach(el => {if(el != find.call(buttonsSection_6, k => k == element)) el.style.background = 'none'; el.setAttribute("disabled", true)})
    }));

    radioButton.forEach(element => element.addEventListener('change', e => { 
      switch (Number(element.getAttribute("value"))) {
        case 1:
          document.querySelectorAll("#test_section_1")[1].style.zIndex = 1;
          document.querySelectorAll("#test_section_2")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_6")[0].style.zIndex = 0;
          break;
        case 2:
          document.querySelectorAll("#test_section_1")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[1].style.zIndex = 1;
          document.querySelectorAll("#test_section_3")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_6")[0].style.zIndex = 0;
          break;
        case 3:
          document.querySelectorAll("#test_section_1")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[1].style.zIndex = 1;
          document.querySelectorAll("#test_section_4")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_6")[0].style.zIndex = 0;
          break;
        case 4:
          document.querySelectorAll("#test_section_1")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[1].style.zIndex = 1;
          document.querySelectorAll("#test_section_5")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_6")[0].style.zIndex = 0;
          break
        case 5:
          document.querySelectorAll("#test_section_1")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[1].style.zIndex = 1;
          document.querySelectorAll("#test_section_6")[0].style.zIndex = 0;
          break;
        case 6:
          document.querySelectorAll("#test_section_1")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_2")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_3")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_4")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_5")[1].style.zIndex = 0;
          document.querySelectorAll("#test_section_6")[0].style.zIndex = 1;
          break;
        default:
          // statements_def
          break;
      }
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
