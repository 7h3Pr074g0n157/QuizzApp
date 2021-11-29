let questions = [
    {
      question: 'Wer hat HTML erfunden',
      a1: 'Robbie Williams',
      a2: 'Lady Gaga',
      a3: 'Tim Berners Lee',
      a4: 'Justin Bieber',
      correct: 3,
    },
    {
      question: 'Was bedeutet das HTML Tag <a></a>?',
      a1: 'Text Fett',
      a2: 'Container',
      a3: 'Ein Link',
      a4: 'Kursiv',
      correct: 3,
    },
    {
      question: 'Wie bindet man eine Website in eine Website ein?',
      a1: '<iframe>, <frame>, and <frameset>',
      a2: '<iframe>',
      a3: '<frame>',
      a4: '<frameset>',
      correct: 3,
    },
    {
      question: 'Wie stellt man Text am BESTEN fett dar?',
      a1: '<strong>',
      a2: 'CSS nutzen',
      a3: '<bold>',
      a4: '<b>',
      correct: 1,
    },
    {
      question: 'Welches Attribut kann man NICHT für Textarea verwenden?',
      a1: 'readonly',
      a2: 'max',
      a3: 'from',
      a4: 'spellcheck',
      correct: 1,
    },
    {
      question:
        'Wie wählst du alle Elemente vom Typ <a></a> mit dem Attribut title aus?',
      a1: 'a[title]{...}',
      a2: 'a > title {...}',
      a3: 'a.title {...}',
      a4: 'a=title {...}',
      correct: 1,
    },
    {
      question: 'Wie definiert man in JavaScript eine Variable?',
      a1: 'let 100 = rate;',
      a2: '100 = let rate;',
      a3: 'rate = 100',
      a4: 'let rate = 100;',
      correct: 4,
    },
  ],
  currentQuestion = 0,
  correctAnswers = 0,
  wrongAnswers = 0;

function countAnswers(answer) {
  if (answer) {
    correctAnswers++;
  } else {
    wrongAnswers++;
  }

  if (currentQuestion >= questions.length - 1) {
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('header-image').src = 'img/trophy.png';
    document.getElementById('endscreen').style.display = 'block';
    document.getElementById('questionbody').style.display = 'none';
  }
}

function nextQuestion() {
  if (currentQuestion > questions.length) {
    return;
  } else {
    currentQuestion++;
  }

  document.getElementById('next-question').disabled = true;
  [...document.getElementsByClassName('answers')].forEach(
    (answer) => (answer.classList = 'answers card-body')
  );

  document.getElementById('questions-number').textContent = currentQuestion + 1;

  showAnswers();
  showQuestion();
}

function checkAnswer(answerNumber) {
  let answer = document.getElementById('a' + answerNumber);

  if (questions[currentQuestion].correct === answerNumber) {
    answer.classList.add('bg-success');
    countAnswers(true);
  } else {
    answer.classList.add('bg-danger');
    countAnswers(false);
  }

  let next = document.getElementById('next-question');
  next.addEventListener('click', nextQuestion);
  next.disabled = false;
}

function showAnswers() {
  let answers = document.getElementsByClassName('answers');

  for (let i = 0; i < questions.length; i++) {
    let answerNumber = i + 1;

    let answer = questions[currentQuestion]['a' + answerNumber];
    if (answer) {
      answers[i].textContent = answer;
      answers[i].addEventListener('click', () => checkAnswer(answerNumber));
    }
  }
}

function showQuestion() {
  let question = questions[currentQuestion].question;
  document.getElementById('questiontext').textContent = question;
}

function init() {
  let questionsCount = document.getElementsByClassName('questions-count');
  for (let i in questionsCount) {
    questionsCount[i].textContent = questions.length;
  }

  document.getElementById('endscreen').style.display = 'none';

  showQuestion();
  showAnswers();
}

init();
