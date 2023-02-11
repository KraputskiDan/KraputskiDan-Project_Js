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

function result_t_1_3() {
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

function result_t_1_7() {
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

function task3_10() {
    let radioButtonChange1 = document.querySelectorAll("input[name='test3_10_1']");
    let radioButtonChange2 = document.querySelectorAll("input[name='test3_10_2']");
    let radioButtonChange3 = document.querySelectorAll("input[name='test3_10_3']");
    let radioButtonChange4 = document.querySelectorAll("input[name='test3_10_4']");
    let radioButtonChange5 = document.querySelectorAll("input[name='test3_10_5']");
    let radioButtonChange6 = document.querySelectorAll("input[name='test3_10_6']");
    
    let result = 0;

    if(radioButtonChange1[0].checked)
    {
      result += 1;
    }

    if(radioButtonChange2[1].checked)
    {
      result += 1;
    }

    if(radioButtonChange3[1].checked)
    {
      result += 1;
    }

    if(radioButtonChange4[0].checked)
    {
      result += 1;
    }

    if(radioButtonChange5[1].checked)
    {
      result += 1;
    }

    if(radioButtonChange6[0].checked)
    {
      result += 1;
    }

    console.log(result)
}

function task3_11() {
    let radioButtonChange1 = document.querySelectorAll("input[name='test3_11_1']");
    let radioButtonChange2 = document.querySelectorAll("input[name='test3_11_2']");
    let radioButtonChange3 = document.querySelectorAll("input[name='test3_11_3']");
    let radioButtonChange4 = document.querySelectorAll("input[name='test3_11_4']");
    let radioButtonChange5 = document.querySelectorAll("input[name='test3_11_5']");
    
    let result = 0;

    if(radioButtonChange1[1].checked)
    {
      result += 1;
    }

    if(radioButtonChange2[0].checked)
    {
      result += 1;
    }

    if(radioButtonChange3[1].checked)
    {
      result += 1;
    }

    if(radioButtonChange4[0].checked)
    {
      result += 1;
    }

    if(radioButtonChange5[1].checked)
    {
      result += 1;
    }

    console.log(result)
}




  function  task2_2(){

      var task = document.getElementById("task2_2").querySelectorAll('p .if_learning');
      var right_task = document.getElementById("task2_2").querySelectorAll('p .if_correct');

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

  function  task1_4(){
      console.log("asd")
      let task = document.getElementById("task1_4").querySelectorAll('p .if_learning');
      let right_task = document.getElementById("task1_4").querySelectorAll('p .if_correct');
console.log(task, right_task)
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


   function  task3_4(){
      console.log("asd")
      let task = document.getElementById("task3_4").querySelectorAll('.if_learning');
      let right_task = document.getElementById("task3_4").querySelectorAll('.if_correct');
console.log(task, right_task)
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


   function  task3_5(){
      console.log("asd")
      let task = document.getElementById("task3_5").querySelectorAll('.if_learning');
      let right_task = document.getElementById("task3_5").querySelectorAll('.if_correct');
console.log(task, right_task)
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

     function  task3_6(){
      console.log("asd")
      let task = document.getElementById("task3_6").querySelectorAll('.if_learning');
      let right_task = document.getElementById("task3_6").querySelectorAll('.if_correct');
console.log(task, right_task)
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

   function  task3_9(){
      console.log("asd")
      let task = document.getElementById("task3_9").querySelectorAll('.if_learning');
      let right_task = document.getElementById("task3_9").querySelectorAll('.if_correct');
console.log(task, right_task)
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


  function task2_5() {
    let radioButton = document.querySelectorAll("input[name='test2_5']");
    
    let buttonsSection_1 = document.querySelectorAll("#test2_5 #test_section_1 button");
    let buttonsSection_2 = document.querySelectorAll("#test2_5 #test_section_2 button");
    let buttonsSection_3 = document.querySelectorAll("#test2_5 #test_section_3 button");
    let buttonsSection_4 = document.querySelectorAll("#test2_5 #test_section_4 button");
    let buttonsSection_5 = document.querySelectorAll("#test2_5 #test_section_5 button");

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

const rightAnswerT12_5 = [
  {answer: 1},
  {answer: 2},
  {answer: 3},
  {answer: 2},
  {answer: 3}
]

function result_t_2_5() {
    let buttonsSection_1 = document.querySelectorAll("#test2_5 #test_section_1 button");
    let buttonsSection_2 = document.querySelectorAll("#test2_5 #test_section_2 button");
    let buttonsSection_3 = document.querySelectorAll("#test2_5 #test_section_3 button");
    let buttonsSection_4 = document.querySelectorAll("#test2_5 #test_section_4 button");
    let buttonsSection_5 = document.querySelectorAll("#test2_5 #test_section_5 button");

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

    let node = document.querySelectorAll("#testInfo2_5 button")

    node.forEach(n => {
      if(n.style.background == 'green')
        bG += 1;
      else if(n.style.background == 'red')
        bR += 1;
    })

    result = bG * 20 - bR * 20;
    
    console.log(result, bG, bR)           

}
