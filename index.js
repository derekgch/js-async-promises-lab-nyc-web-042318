const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;


function appendQuestion(q) {
  const qcon = document.querySelector('.question-container');

  const newQ = document.createTextNode(q["questionText"]);
  // debugger
  qcon.appendChild(newQ);
}

function askQuestionThen(time) {
  // const qcon = document.querySelector('.question-container');
  question = questions[0];
  return new Promise( (resolve, reject) => {
    appendQuestion(question);
    setTimeout(() => { resolve() }, time )
  });
}

function removeQuestion() {

  const qcon = document.querySelector('.question-container');
  qcon.removeChild(qcon.lastChild);
  // debugger;
  return new Promise( () => {
  });
}

function askQuestionThenRemoveQuestion(time) {
  askQuestionThen(time).then(removeQuestion);
}
