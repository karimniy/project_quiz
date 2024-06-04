let knopki = document.querySelectorAll(".calc")
let primer = document.querySelector(".num")
let us = document.querySelector(".me")
let strtbtn = document.querySelector(".start_button")
let h3 = document.querySelector(".h3")
let cont_strt = document.querySelector(".container-start")

let signs = ["+","-","*","/"]
function getRandomSign(){
  return signs[randint(0,3)]
}


function randint(min,max){
    return Math.round(Math.random() * (max - min) + min)
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

class Answer {

  constructor()  {
    let a = randint(1,30)
    let b = randint(1,30)
    let current_sign = getRandomSign()
    if(current_sign == "+"){
      this.question = `${a}+${b}`;
      this.right = a + b;
    }
    if(current_sign == "-"){
      this.question = `${a}-${b}`;
      this.right = a - b;
    }
    if(current_sign == "*"){
      this.question = `${a}*${b}`;
      this.right = a * b;
    }
    if(current_sign == "/"){
      this.question = `${a}/${b}`;
      this.right = Math.round(a / b);
    }
    this.first = randint(this.right - 15, this.right - 1)
    this.second = randint(this.right - 15, this.right - 1)
    this.fourth = randint(this.right - 15, this.right - 1)
    this.fifth = randint(this.right - 15, this.right - 1)
    this.mass = [this.first, this.second, this.right, this.fourth, this.fifth]
    this.mass = shuffle(this.mass)
    this.correct =  this.mass.indexOf(this.right)
    
  }

    display(){
        primer.innerHTML = this.question
        for(let i = 0 ; i < 5; i += 1){
            knopki[i].innerHTML = this.mass[i]
        }
    }

}


current_ans = new Answer()
current_ans.display()

  counter = 0
  r = 0

  for (let a = 0; a < 5; a += 1){
  knopki[a].addEventListener("click", function(){
      if(knopki[a].innerHTML == current_ans.right){
        console.log("верно")
        r += 1
        knopki[a].style.background = "#00FF00"
        anime({
          targets: knopki[a],
          background: "#FFFFFF",
          delay: 100,
          duration: 500,
          easing:"linear"

        })
      }
      else{
        console.log("неверно")
        knopki[a].style.background = "#FF0000"
        anime({
          targets: knopki[a],
          background: "#FFFFFF",
          delay: 100,
          duration: 500,
          easing:"linear"
        })
      }
      counter += 1
      current_ans = new Answer()
      current_ans.display()
  })
  }
strtbtn.addEventListener("click", function(){
  us.style.display = "flex"
  cont_strt.style.display = "none"
  r = 0
  counter = 0
  setTimeout(function(){
      strtbtn.style.display = "flex"
      h3.style.display =  "flex"
      h3.innerHTML = `Вы дали ${r} правильных ответов из ${counter} Точность - ${Math.round(r * 100 / counter)}%`
  }, 10000);
}
)
