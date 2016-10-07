'use strict'

const goBack = history.back.bind(history)

const bindBack = function bindBack(){
  let backs = document.getElementsByClassName('back')
  backs = Array.from(backs)
  backs = backs.filter(function(b){return b.tagName == 'A'})
  backs.forEach(function(b){b.onclick=goBack})
}

console.log('hi')
bindBack()
