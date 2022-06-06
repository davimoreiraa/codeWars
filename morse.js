const alphabet = [
  {
    letter: 'A',
    morse: '.-'
  },
  {
    letter: 'B',
    morse: '-...'
  },
  {
    letter: 'C',
    morse: '-.-.'
  },
  {
    letter: 'D',
    morse: '-..'
  },
  {
    letter: 'E',
    morse: '.'
  },
  {
    letter: 'F',
    morse: '..-.'
  },
  {
    letter: 'G',
    morse: '--.'
  },
  {
    letter: 'H',
    morse: '....'
  },
  {
    letter: 'I',
    morse: '..'
  },
  {
    letter: 'J',
    morse: '.---'
  },
  {
    letter: 'K',
    morse: '-.-'
  },
  {
    letter: 'L',
    morse: '.-..'
  },
  {
    letter: 'M',
    morse: '--'
  },
  {
    letter: 'N',
    morse: '-.'
  },
  {
    letter: 'O',
    morse: '---'
  },
  {
    letter: 'P',
    morse: '.--.'
  },
  {
    letter: 'Q',
    morse: '--.-'
  },
  {
    letter: 'R',
    morse: '.-.'
  },
  {
    letter: 'S',
    morse: '...'
  },
  {
    letter: 'T',
    morse: '-'
  },
  {
    letter: 'U',
    morse: '..-'
  },
  {
    letter: 'V',
    morse: '...-'
  },
  {
    letter: 'W',
    morse: '.--'
  },
  {
    letter: 'X',
    morse: '-..-'
  },
  {
    letter: 'Y',
    morse: '-.--'
  },
  {
    letter: 'Z',
    morse: '--..'
  }
]

decodeMorse = function (morseCode) {
  const words = morseCode.split('   ')
  const phrase = words.map(word => word.split(' '))
  for (i in phrase) {
    console.log(phrase[i].map(transformMorseIntoLetters))
  }
}

function transformMorseIntoLetters(letter) {
  let Alphabetletter
  for (i in alphabet) {
    if (alphabet[i].morse == letter) {
      Alphabetletter = alphabet[i].letter
    }
  }
  return Alphabetletter
}

decodeMorse('.... . -.--   .--- ..- -.. .')
