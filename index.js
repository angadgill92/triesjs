const func = require('./tries')
const fs = require('fs')
const path = require('path')
const trie = {}
func.initialize(trie)


const infile = process.argv.slice(2).toString('utf8')
const wordList = fs.readFileSync(path.resolve(infile), 'utf8').toString().split('\n')
wordList.map(word => func.addWord(trie, word))


module.exports = trie
