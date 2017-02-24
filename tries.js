/* trying out `tries` 
 [Fact] - The word `trie` is an **infix** of the word "re|trie|val"
*/


/* Utility Functions */
const isEmpty = str => str === ''
const firstCharacterOf = word => word[0]
const notExists = (char, edges) => edges.hasOwnProperty(char) !== true
const cutLeftMostCharacter = word => word.slice(1)
// Data Definition :
// Dictionary is a tree where each vertex is an alphabet

const initialize = (vertex) => {  
  vertex.words    = 0      // integer
  vertex.prefixes = 0   // integer
  vertex.edges    = {}     // empty object
}

// Object String -> Object
/* Adds a single string Word to the Dictionary */
// const addWord = (vertex, word) => {}   // Stub

const addWord = (vertex, word) => {
  if (isEmpty(word)) {
    vertex.words = vertex.words + 1
  } else {
    vertex.prefixes = vertex.prefixes + 1
    let k = firstCharacterOf(word)

    if (notExists(k, vertex.edges)){
      vertex.edges[k] = {}
      initialize(vertex.edges[k])
    }
    let newWord = cutLeftMostCharacter(word)
    addWord(vertex.edges[k], newWord)
  }
}
// Object String -> Number
/* Count the number of words in the dictionary that have the given string as their prefix */
// const countPrefixes = prefix => (0) // Stub
const countPrefixes = (vertex, prefix) => {
  let k = firstCharacterOf(prefix)

  if (isEmpty(prefix)) return vertex.prefixes
  if (notExists(prefix, vertex.edges)) return 0
  let newWord = cutLeftMostCharacter(prefix)
  return countPrefixes(vertex.edges[k], prefix)
}
// String -> Number
/* Count the number of words in the dictionary that match the given String exactly */
// const countWords = word => (0) // Stub
const countWords = (vertex, word) => {
  let k = firstCharacterOf(word)
  if (isEmpty(word)) return vertex.words
  if (notExists(word, vertex.edges)) return 0
  let newWord = cutLeftMostCharacter(word)
  return countWords(vertex.edges[k], word)
}

module.exports = {
  countWords, countPrefixes, initialize, addWord
}
