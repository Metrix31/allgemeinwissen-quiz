const quizData = [
    {
        question: "Welcher Planet ist der größte in unserem Sonnensystem?",
        answers: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answers: ["14", "15", "16", "17"],
        correct: 2
    },
    {
        question: "Welches Element hat das chemische Symbol O?",
        answers: ["Gold", "Sauerstoff", "Ozon", "Osmium"],
        correct: 1
    },
    {
        question: "Wie viele Kontinente gibt es auf der Erde?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Welches Tier ist das schnellste Landtier?",
        answers: ["Löwe", "Gepard", "Antilope", "Leopard"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];

    quiz.innerHTML = `
        <h2>${q.question}</h2>
        ${q.answers.map((a, i) => `
            <div class="answer" onclick="selectAnswer(${i})">${a}</div>
        `).join("")}
    `;
}

function selectAnswer(i) {
    const q = quizData[currentQuestion];
    const answers = document.querySelectorAll(".answer");

    answers.forEach((ans, index) => {
        ans.style.pointerEvents = "none";
        if (index === q.correct) ans.classList.add("correct");
        if (index === i && i !== q.correct) ans.classList.add("wrong");
    });

    if (i === q.correct) score++;

    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.classList.add("hidden");
    } else {
        showResult();
    }
});

function showResult() {
    quiz.classList.add("hidden");
    nextBtn.classList.add("hidden");

    result.classList.remove("hidden");
    result.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Du hast <strong>${score}</strong> von <strong>${quizData.length}</strong> Fragen richtig.</p>
    `;
}

loadQuestion();