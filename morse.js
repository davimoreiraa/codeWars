const alphabet = [
  {
    character: 'A',
    morse: '.-'
  },
  {
    character: 'B',
    morse: '-...'
  },
  {
    character: 'C',
    morse: '-.-.'
  },
  {
    character: 'D',
    morse: '-..'
  },
  {
    character: 'E',
    morse: '.'
  },
  {
    character: 'F',
    morse: '..-.'
  },
  {
    character: 'G',
    morse: '--.'
  },
  {
    character: 'H',
    morse: '....'
  },
  {
    character: 'I',
    morse: '..'
  },
  {
    character: 'J',
    morse: '.---'
  },
  {
    character: 'K',
    morse: '-.-'
  },
  {
    character: 'L',
    morse: '.-..'
  },
  {
    character: 'M',
    morse: '--'
  },
  {
    character: 'N',
    morse: '-.'
  },
  {
    character: 'O',
    morse: '---'
  },
  {
    character: 'P',
    morse: '.--.'
  },
  {
    character: 'Q',
    morse: '--.-'
  },
  {
    character: 'R',
    morse: '.-.'
  },
  {
    character: 'S',
    morse: '...'
  },
  {
    character: 'T',
    morse: '-'
  },
  {
    character: 'U',
    morse: '..-'
  },
  {
    character: 'V',
    morse: '...-'
  },
  {
    character: 'W',
    morse: '.--'
  },
  {
    character: 'X',
    morse: '-..-'
  },
  {
    character: 'Y',
    morse: '-.--'
  },
  {
    character: 'Z',
    morse: '--..'
  },
  {
    character: '.',
    morse: '.-.-.-'
  },
  {
    character: ',',
    morse: '--..--'
  },
  {
    character: '?',
    morse: '..--..'
  },
  {
    character: '!',
    morse: '-.-.--'
  },
  {
    character: '´',
    morse: '.----.'
  },
  {
    character: '/',
    morse: '-..-.'
  },
  {
    character: '(',
    morse: '-.--.'
  },
  {
    character: ')',
    morse: '-.--.-'
  },
  {
    character: 'SOS',
    morse: '...---...'
  }
]

decodeMorse = function (morseCode) {
  const words = morseCode.split('   ')
  const phrase = words.map(word => word.split(' '))
  let message = []
  for (i in phrase) {
    message.push(phrase[i].map(transformMorseIntoCharacter).join(''))
  }
  return message.join(' ').trim()
}
//funçao .trim() remove os espaços do incio e fim de uma string

function transformMorseIntoCharacter(character) {
  let AlphabetCharacter
  for (i in alphabet) {
    if (alphabet[i].morse == character) {
      AlphabetCharacter = alphabet[i].character
    }
  }
  return AlphabetCharacter
}

console.log(decodeMorse('--- ..   -.. .- ...- ..'))
//Como enviar um texto em morse: mantenha um espaço entre cada letra de uma palavra, e tres espaços entre cada palavra
