function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(shout(string))
}

function logWhisper(string) {
  return console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if(string.isLowerCase()) {
    return "I can't hear you!"
  }
  
  else if(string.isUpperCase()) {
    return "YES INDEED!"
  }
  
  if (string.equals("I love you, Grandma.")) {
    return "I love you, too."
  }
}