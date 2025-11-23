import { ruswords } from "./words.js"

let wordNumber = Math.floor(Math.random() * ruswords.length)
let img = document.getElementById("img")
let settings = document.getElementById("settings")
let letters = []
let secret = document.getElementById("secret")
let use = document.getElementById("use")
let modal = document.getElementById("modal")
let secretWin = (Math.random())
let gameTitle = document.getElementById("gameTitle")
let mistakes = 0
let multi = document.getElementById("multi")
let single = document.getElementById("single")
let secretwordLength = document.getElementById("secretwordLength")
let Check = document.getElementById("Check")
let newGame = document.getElementById("newGame")
let usedLetters = document.getElementById("usedLetters")
let playerInput = document.getElementById("input")
playerInput.select()
let konfetti = document.getElementById("konfetti")
let secretword = ruswords[wordNumber]
secretword = "f"
let shifr = document.getElementById("shifr")
let emojis = [
  "😎", "🔥", "💯", "🚀", "✨", "🧠", "🎯", "🎸", "👓", "🧊",
  "😈", "🥶", "😏", "🥷", "👑", "💎", "🎮", "📸", "🎧", "📱",
  "🖤", "❤️", "🦾", "🦿", "🛸", "🛰", "🪐", "🌌", "🌠", "🌟",
  "⚡️", "🎆", "🧨", "💣", "💥", "🛹", "🏍", "🧨", "🚓", "🚤",
  "⛺", "🎭", "🌋", "🧗", "🏄", "🏋️", "🤸", "🥋", "🎃", "⚔️",
  "👾", "🤖", "👽", "💻", "🤬", "🧬", "🔮", "🧁", "🛹", "🎲",
  "🎰", "🎵", "🎤", "🎷", "🥁", "👧🏾", "📀", "💿", "📼", "📹",
  "🎞", "🧒", "🤑", "🧃", "🎁", "🍿", "🍔", "🍕", "🌮", "🌯",
  "🍣", "🍱", "🍩", "🍪", "🍫", "🍭", "🥤", "🍼", "🥡", "🍾",
  "🍷", "🥃", "🍺", "🍻", "🥂", "🧊", "🎉", "🎊", "🦽", "🧞",
  "🕺", "💃", "🧘", "🚴", "🏇", "🏆", "🥇", "🚞", "🧢", "🧥"
];
console.log(emojis.length);
let emojiNumber = Math.floor(Math.random() * emojis.length)

shifr.innerHTML = emojis[emojiNumber].repeat(secretword.length)
secretwordLength.innerHTML = "длина слова: " + secretword.length + " букв"


newGame.onclick = function () {
  mistakes = 0

  Check.disabled = false
  gameTitle.innerHTML = "виселица"
  gameTitle.style.transform = "scale(1)"
  img.src = "hangman0.png"
  wordNumber = Math.floor(Math.random() * ruswords.length)
  secretword = ruswords[wordNumber]
  emojiNumber = Math.floor(Math.random() * emojis.length)
  usedLetters.innerHTML = "использованные буквы:"
  shifr.innerHTML = emojis[emojiNumber].repeat(secretword.length)
  letters = []
  document.documentElement.style.filter = "grayscale(0%)"
  secretwordLength.innerHTML = "длина слова: " + secretword.length + " букв"
  konfetti.style.opacity = 0
}


settings.onclick = function () {
  console.log("настройки        🎃");
  modal.style.opacity = 1
  modal.style.pointerEvents = "auto"
}
single.onclick = function () {
  mistakes = 0

  Check.disabled = false
  gameTitle.innerHTML = "виселица"
  gameTitle.style.transform = "scale(1)"
  img.src = "hangman0.png"
  wordNumber = Math.floor(Math.random() * ruswords.length)
  secretword = ruswords[wordNumber]
  emojiNumber = Math.floor(Math.random() * emojis.length)
  usedLetters.innerHTML = "использованные буквы:"
  shifr.innerHTML = emojis[emojiNumber].repeat(secretword.length)
  letters = []
  document.documentElement.style.filter = "grayscale(0%)"
  secretwordLength.innerHTML = "длина слова: " + secretword.length + " букв"
  konfetti.style.opacity = 0
  modal.style.opacity = 0
  modal.style.pointerEvents = "none"
}
multi.onclick = function () {
  mistakes = 0
  konfetti.style.opacity = 0
  modal.style.opacity = 0
  modal.style.pointerEvents = "none"
  wordModal.style.opacity = 1
  wordModal.style.pointerEvents = "auto"
}
use.onclick = function () {
  wordModal.style.opacity = 0
  wordModal.style.pointerEvents = "none"
  mistakes = 0
  Check.disabled = false
  gameTitle.innerHTML = "виселица"
  gameTitle.style.transform = "scale(1)"
  img.src = "hangman0.png"
  secretword = secret.value
  emojiNumber = Math.floor(Math.random() * emojis.length)
  usedLetters.innerHTML = "использованные буквы:"
  shifr.innerHTML = emojis[emojiNumber].repeat(secretword.length)
  letters = []
  document.documentElement.style.filter = "grayscale(0%)"
  secretwordLength.innerHTML = "длина слова: " + secretword.length + " букв"
  konfetti.style.opacity = 0
}

Check.onclick = function (event) {
  event.preventDefault()
  playerInput.select()
  console.log("Check");
  console.log(playerInput.value);

  if (!letters.includes(playerInput.value)) {
    letters.push(playerInput.value)

  }
  usedLetters.innerHTML = "использованные буквы:" + letters
  if (secretword.includes(playerInput.value)) {
    let newShifr = ""

    for (let i = 0; i < secretword.length; i++) {
      if (letters.includes(secretword[i])) {
        newShifr = newShifr + secretword[i]

      }
      else {
        newShifr = newShifr + emojis[emojiNumber]
      }

    }
    if (!newShifr.includes(emojis[emojiNumber])) {
      konfetti.style.opacity = 1
      console.log(secretWin);
      if (secretWin < 0.01) {
        img.src = "hangmanWin.png"

      }
      gameTitle.style.transform = "scale(2)"
      gameTitle.innerHTML = "победа 🏆"
      Check.disabled = true

    }
    shifr.innerHTML = newShifr
  }
  else {
    if (mistakes < 6) {
      mistakes++
      img.src = "hangman" + mistakes + ".png"

    }
    else {
      document.documentElement.style.filter = "grayscale(100%)"
      shifr.innerHTML = secretword
      gameTitle.style.transform = "scale(2)"
      gameTitle.innerHTML = "игра окончена :("
      Check.disabled = true
    }
  }






}



















































































































































































