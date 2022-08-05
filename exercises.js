function sum(...args) {
    let sum = 0;

    for (num of args) {
        sum += num;
    }

    return sum;
}

// console.log(sum(1,2));



Function.prototype.myBind = function(cxt) {
    const that = this;
    const args = Array.prototype.slice.call(arguments);
    return function () {
        const call_args = Array.prototype.slice.call(arguments);
        return that.apply(cxt, [...args.slice(1), ...call_args]);
    }
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


function curriedSum(limit) {
    const args = [];
    return function _curriedSum(num) {
        args.push(num);
        if (args.length === limit) {
            return args.reduce((acc, el) => acc + el);
        }
        return _curriedSum;
    }
}

// const currySum = curriedSum(4);
// console.log(currySum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
    const that = this;
    const args = [];
    return function _curriedSum(num) {
        args.push(num);
        if (args.length === numArgs) {
            // console.log("this is in curry: ",args);
            return that.apply(null, args);
        }
        return _curriedSum;
    }
}

let makeSum = function(...args) {
    // let args = Array.prototype.slice.call(arguments);
    // console.log(args);
    return args.reduce((acc, el) => acc + el);
}
let markovTalks = makeSum.curry(4);
// console.log(markovTalks(5)(30)(20)(1));
// console.log(markovTalks(100));

