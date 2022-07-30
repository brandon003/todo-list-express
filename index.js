
const myModule = require('./my-module'); //require is a way to import code from modules using node


console.log(myModule["cupcake"])

// import cupcake from './my-module.js'; //requires installation of webpack

// console.log(cupcake);


const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter;

eventEmitter.on('lunch', () => { console.log('yum 🍣')});

eventEmitter.emit('lunch');
// console.log(eventEmitter);

module.exports = { eventEmitter };


function makeDinner(main, ...args) {
	console.log(main, args)
	return `Dinner includes ${main} and ${args.join('')}.`;
}

let txt = makeDinner('🍜', '🥘', '🍙', '🥠', '🍑');

console.log(txt);