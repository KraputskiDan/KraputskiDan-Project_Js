const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
    constructor(type, questions, results)
    {
        //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
        this.type = type;

        //Массив с вопросами
        this.questions = questions;

        //Массив с возможными результатами
        this.results = results;

        //Количество набранных очков
        this.score = 0;

        //Номер результата из массива
        this.result = 0;

        //Номер текущего вопроса
        this.current = 0;
    }

    Click(index)
    {
        //Добавляем очки
        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;

        //Если было добавлено хотя одно очко, то считаем, что ответ верный
        if(value >= 1)
        {
            correct = index;
        }
        else
        {
            //Иначе ищем, какой ответ может быть правильным
            for(let i = 0; i < this.questions[this.current].answers.length; i++)
            {
                if(this.questions[this.current].answers[i].value >= 1)
                {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }

    //Переход к следующему вопросу
    Next()
    {
        this.current++;
        
        if(this.current >= this.questions.length) 
        {
            this.End();
        }
    }

    //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
    End()
    {
        for(let i = 0; i < this.results.length; i++)
        {
            if(this.results[i].Check(this.score))
            {
                this.result = i;
            }
        }
    }
} 

//Класс, представляющий вопрос
class Question 
{
    constructor(text, answers)
    {
        this.text = text; 
        this.answers = answers; 
    }

    Click(index) 
    {
        return this.answers[index].value; 
    }
}

//Класс, представляющий ответ
class Answer 
{
    constructor(text, value) 
    {
        this.text = text; 
        this.value = value; 
    }
}

//Класс, представляющий результат
class Result 
{
    constructor(text, value)
    {
        this.text = text;
        this.value = value;
    }

    //Этот метод проверяет, достаточно ли очков набрал пользователь
    Check(value)
    {
        if(this.value <= value)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
}

//Массив с результатами
const results = 
[
    new Result("Вам многому нужно научиться", 0),
    new Result("Вы уже неплохо разбираетесь", 4),
    new Result("Ваш уровень выше среднего", 6),
    new Result("Вы в совершенстве знаете тему", 13)
];

const results1 = 
[
    new Result("Вам многому нужно научиться", 0),
    new Result("Вы уже неплохо разбираетесь", 2),
    new Result("Ваш уровень выше среднего", 3),
    new Result("Вы в совершенстве знаете тему", 4)
];

//Массив с вопросами
const questions1 = 
[
    new Question("Сколько стоит свежевыжатый сок ? – …", 
    [
        new Answer("А. 300 рубль", 0),
        new Answer("Б. 300 рублей", 1),
        new Answer("В. 300 рубли", 0),
        new Answer("Г. 300 рубля", 0)
    ]),

    new Question("Сколько нам еще ждать заказ? – Примерно ...", 
    [
      new Answer("А. десяти, минута", 0),
        new Answer("Б. десять, минута", 0),
        new Answer("В. десяти, минуты", 0),
        new Answer("Г. десять, минут", 1)
    ]),

    new Question("Моя рабочая смена длится 6 … .", 
    [
         new Answer("А. час", 0),
        new Answer("Б. часа", 0),
        new Answer("В. часов", 1),
        new Answer("Г. Часа", 0)
    ]),

    new Question("Позавчера в ресторане … директора.", 
    [
      new Answer("А. не быть", 0),
        new Answer("Б. нет", 0),
        new Answer("В. не было", 1),
        new Answer("Г. не будет", 0)
    ]),

    new Question("Сегодня у меня … денег, поэтому обед оплачиваешь ты.", 
    [
         new Answer("А. не будет", 0),
        new Answer("Б. нет", 1),
        new Answer("В. не было", 0),
        new Answer("Г. не быть", 0)
    ]),

    new Question("Никто не знает, что … завтра.", 
    [
        new Answer("А. быть", 0),
        new Answer("Б. не было", 0),
        new Answer("В. будет", 1),
        new Answer("Г. есть", 0)
    ]),

      new Question("Он любит кофе … молока.", 
    [
        new Answer("А. для", 0),
        new Answer("Б. из", 0),
        new Answer("В. без", 1),
        new Answer("Г. Кроме", 0)
    ]),
       new Question("Иван заказал пиццу … мяса.", 
    [
        new Answer("А. после", 0),
        new Answer("Б. без", 1),
        new Answer("В. кроме", 0),
        new Answer("Г. Для", 0)
    ]),
        new Question("Положите  … мяса.", 
    [
        new Answer("А. после", 0),
        new Answer("Б. без", 1),
        new Answer("В. кроме", 0),
        new Answer("Г. Для", 0)
    ]),
         new Question("Вчера наш директор уволил 14 …", 
    [
        new Answer("А. человек", 1),
        new Answer("Б. человека", 0),
        new Answer("В. людях", 0),
        new Answer("Г. Люди", 0)
    ]),
          new Question("У нас работает 36 …", 
    [
        new Answer("А. официанта", 0),
        new Answer("Б. официант", 0),
        new Answer("В. официантом", 0),
        new Answer("Г. официантов", 1)
    ]),

 new Question("Джон уже был в этом ресторане 5 …", 
    [
        new Answer("А. раза", 0),
        new Answer("Б. разей", 0),
        new Answer("В. раз", 1),
        new Answer("Г. разов", 0)
    ]),

 new Question("У меня нет ни ..., ни  ...", 
    [
        new Answer("А. время, деньги", 0),
        new Answer("Б. времени, денег", 1),
        new Answer("В. времени, денги ", 0),
        new Answer("Г. время, деньгов ", 0)
    ]),

];

//Массив с вопросами
const questions2 = 
[
    new Question("Торговаться – это...", 
    [
        new Answer("А. договариваться о цене, делать цену ниже", 1),
        new Answer("Б.  когда продавец увеличивает стоимость ", 0),
        new Answer("В. никак стоимость не меняется ", 0),
        new Answer("Г.  много говорить", 0)
    ]),

    new Question("Этот чай совсем несладкий!!! Он без ...", 
    [
      new Answer("А. лимона ", 0),
        new Answer("Б. соли", 0),
        new Answer("В. сахара", 1),
        new Answer("Г. молока ", 0)
    ]),

    new Question("Я – вегетарианец, я ем все, но ....", 
    [
         new Answer("А. без соуса", 0),
        new Answer("Б. без овощей", 0),
        new Answer("В. без мяса ", 1),
        new Answer("Г. без сладкого", 0)
    ]),

    new Question("Лев Толстой – это ...", 
    [
      new Answer("А. великий русский поэт ", 0),
        new Answer("Б. великой русский художник ", 0),
        new Answer("В. великий русский писать ", 1),
        new Answer("Г. великий русский музыкант", 0)
    ]),

    new Question("Рынок - ...", 
    [
         new Answer("А. это магазин на улице", 1),
        new Answer("Б. это закрытый VIP ресторан ", 0),
        new Answer("В. это место, где нет очередей и много официантов", 0),
        new Answer("Г. это дом, где живут люди", 0)
    ]),

    new Question("... вина, ... пива, ... воды, .... водки.", 
    [
        new Answer("А. бокал, кружка, стакан, стопка.", 1),
        new Answer("Б. стопка, чашка, бокал, кружка", 0),
        new Answer("В. ложка, стопка, бокал, кружка", 0)
    ]),

      new Question("Стандартный русский тост – ...", 
    [
        new Answer("А. за здоровье ", 1),
        new Answer("Б. на здоровье", 0),
        new Answer("В. за любовь", 0),
        new Answer("Г. для здоровья ", 0)
    ]),
       new Question("Похмелье –  ...", 
    [
        new Answer("А. это когда много ел, а потом болит живот ", 0),
        new Answer("Б. это когда много времени и не знаешь, чем заняться ", 0),
        new Answer("В. это когда человек очень активный и продуктивный ", 0),
        new Answer("Г. это когда человек не может ничего делать, только пить воду и спать", 1)
    ])
];

const questions37 = 
[
    new Question("1. Горбушка – это", 
    [
        new Answer("А) мягкая часть хлеба.", 0),
        new Answer("Б) края хлеба, крайний кусочек.", 1),
    ]),

    new Question("2.  Хлебопекарь – это ", 
    [
      new Answer("А) печёт очень вкусный хлеб и другую вкусную выпечку.", 1),
        new Answer("Б) человек, который добавляет хлеб во все блюда.", 0),
    ]),

    new Question("3.Выпечка – это ", 
    [
         new Answer("А) сладкие булочки из разного теста", 1),
        new Answer("Б) соленый хлеб, с семечками", 0),
    ]),
        new Question("4.  Повар- кондитер делает", 
    [
         new Answer("А) пирожные ", 1),
        new Answer("Б) хлеб", 0),

    ])];



const questions38 = 
[
    new Question("1)  Для приготовления пельменей нужно вскипятить воду", 
    [
        new Answer("да", 1),
        new Answer("нет", 0),
    ]),

    new Question("2)  В воду добавляем немного соли и сахар ", 
    [
       new Answer("да", 0),
        new Answer("нет", 1),
    ]),

    new Question("3)  Пельмени – это китайское национальное блюдо ", 
    [
        new Answer("да", 0),
        new Answer("нет", 1),
    ]),
        new Question("4)  У многих народов есть похожее блюдо: и в Китае, и в Казахстане, и в Прибалтике.", 
    [
        new Answer("да", 1),
        new Answer("нет", 0),

    ]),
         new Question("5)  Пельмени в России небольшие, их обязательно замораживают и хранят на морозе ", 
    [
         new Answer("да", 1),
        new Answer("нет", 0),

    ]),
          new Question("6)  В России в вареники кладут мясо, смешивают свинину и говядину, а в пельмени – и сыр, и овощи, и картошку, картошку и грибы, творог и ягоды ", 
    [
         new Answer("да", 0),
        new Answer("нет", 1),

    ]),
           new Question("7)  И пельмени, и вареники едят горячими ", 
    [
         new Answer("да", 1),
        new Answer("нет", 0),

    ]),
            new Question("8)  Пельмени или вареники должны всплыть в воде, подняться наверх. Это значит, что они готовы ", 
    [
         new Answer("да", 1),
        new Answer("нет", 0),

    ]),
             new Question("9)  В конце варки надо добавить горошки чёрного перца и лаврушку, паприку и хмели-сунели ", 
    [
         new Answer("да", 0),
        new Answer("нет", 1),

    ]),
         new Question("10) По-русски пельмени подают со сметаной и уксусом ", 
    [
         new Answer("да", 1),
        new Answer("нет", 0),

    ]),
         new Question("11) русская традиция – многие продукты называть ласково: водочка, колбаска, сырок, картошечка… ", 
    [
         new Answer("да", 1),
        new Answer("нет", 0),

    ])];













var x=localStorage.getItem("code");
var quiz = ""
//Сам тест
switch(x) {
  case '1': var quiz =new Quiz(1, questions1, results);
   break;

  case '2': var quiz = new Quiz(1, questions2, results);
   break;

    case '37': var quiz = new Quiz(1, questions37, results1);
   break;
   case '38': var quiz = new Quiz(1, questions38, results);
   break;
}



deadline = new Date(Date.parse(new Date()) + 60 * 1000);
initializeClock("countdown", deadline);



Update();
var exit = new Boolean(false);

//Обновление теста
function Update()
{
    //Проверяем, есть ли ещё вопросы
    if(quiz.current < quiz.questions.length) 
    {
        //Если есть, меняем вопрос в заголовке
        headElem.innerHTML = quiz.questions[quiz.current].text;

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";

        //Создаём кнопки для новых вариантов ответов
        for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
        {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }
        
        //Выводим номер текущего вопроса
        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

        //Вызываем функцию, которая прикрепит события к новым кнопкам
        Init();
    }
    else
    {
        exit = true;
      end();
    }
}

function end()
{
     //Если это конец, то выводим результат
        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Очки: " + quiz.score;
}

function Init()
{
    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    for(let i = 0; i < btns.length; i++)
    {
        //Прикрепляем событие для каждой отдельной кнопки
        //При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) 
{
    //Получаем номер правильного ответа
    let correct = quiz.Click(index);

    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    //Делаем кнопки серыми
    for(let i = 0; i < btns.length; i++)
    {
        btns[i].className = "button button_passive";
    }

    //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
    if(quiz.type == 1)
    {
        if(correct >= 0)
        {
            btns[correct].className = "button button_correct";
        }

        if(index != correct) 
        {
            btns[index].className = "button button_wrong";
        } 
    }
    else
    {
        //Иначе просто подсвечиваем зелёным ответ пользователя
        btns[index].className = "button button_correct";
    }

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    total: t,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);    
      end();
    }

    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  

  }



  updateClock();
  var timeinterval = setInterval(function() {
    updateClock();

if (exit === true) {
    clearInterval(timeinterval);
    end();
  }

}, 1000);

}