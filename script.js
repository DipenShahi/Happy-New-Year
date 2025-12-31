function goTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    if (id === "message") startIntro();
    if (id === "letter") loadLetter();
}

/* ---------- Intro + I love you typing ---------- */

const intro = "A new year has started, and before anything else, I wanted you to see this.";
const love = "I love you.";

let i = 0;
let j = 0;

function startIntro() {
    const introEl = document.getElementById("introText");
    const loveEl = document.getElementById("loveTyping");

    introEl.innerHTML = "";
    loveEl.innerHTML = "";
    i = 0;
    j = 0;

    typeIntro();

    setTimeout(typeLove, 800);
}

function typeIntro() {
    const introEl = document.getElementById("introText");
    if (i < intro.length) {
        introEl.innerHTML += intro.charAt(i);
        i++;
        setTimeout(typeIntro, 40);
    }
}

function typeLove() {
    const loveEl = document.getElementById("loveTyping");
    if (j < love.length) {
        loveEl.innerHTML += love.charAt(j);
        j++;
        setTimeout(typeLove, 250);
    }
}

/* ---------- Letter + Photo ---------- */

const letter = [
    "This new year doesn’t feel special because of dates or celebrations. It feels special because you exist in my life.",
    "I want to apologize for every mistake I have made, for every moment I disturbed your peace, and for every time my actions caused you stress, doubt, or hurt.",
    "I may not always say things perfectly, and I know I have flaws, but I want you to know that I genuinely care. Your presence changes my days in ways you might not even notice.",
    "You gave me trust, patience, and care, and instead of always protecting that, I sometimes let my emotions, insecurity, and immaturity take over.",
    "This year i promsie to be better for you from day 1",
    "I promise to work on myself every single day, not with words alone, but with actions. I promise to respect your space, your feelings, and your boundaries. I promise to grow emotionally, to communicate better, and to love you in a way that feels safe and peaceful to you.",
    "When I say I want to be better, I mean better for you, better for us, and better as a person. My loyalty, my effort, and my heart are yours. I choose you not out of fear, but out of love and responsibility.",
    "As this year begins, I don’t wish for perfection. I wish for understanding, patience, and moments that feel real. If you’re walking beside me this year, that’s already more than enough.",
    "Thank you for being you.",
    "I love you Maichaa💓"
];

function loadLetter() {
    const el = document.getElementById("letterText");
    const photo = document.getElementById("photo");

    el.innerHTML = "";
    photo.classList.remove("show");

    letter.forEach(p => {
        el.innerHTML += p + "<br><br>";
    });

    setTimeout(() => {
        photo.classList.add("show");
    }, 800);
}
