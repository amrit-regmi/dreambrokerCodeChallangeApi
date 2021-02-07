const analyzeText = (text) => {
  const characters = {}
  for (var i = 0; i < text.length; i++) {
    const char = text.charAt(i).toLowerCase()
       characters[char] = characters[char] ? characters[char] +1:1
  } 

  const charactersArray = Object.keys(characters).sort()
  
  const characterCount = charactersArray.reduce((p,c) => {
    if(/[a-zA-Z]/.test(c)){
     return [...p,{[c]:characters[c]}] 
   }
   return p
  },[])

  const analysedData = {
    textLength : {
      withSpaces: text.length,
      withoutSpaces: text.length - (characters[' ']||0) ,
    },
    wordCount: text.split(' ').filter((word) => word !== '').length,
    charcterCount : characterCount
  }
  return  analysedData
}

module.exports = analyzeText