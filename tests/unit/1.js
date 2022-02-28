function sum(a,b,c) {
  return a+b+c
}

function curry(fn){
  return function curried(...arg1){
    if(arg1.length >= fn.length){
     return fn.apply(this,arg1)
    }else{
      return function(...arg2){
        return curried.apply(this,arg1.concat(arg2))
      }
    }
  }
}

const mycurry = curry(sum)

console.log(mycurry(1)(2)(3));
console.log(mycurry(1,2)(3));


// 节流

function throttled(func,delay){
  let timer = null ;
  let startTime = Date.now();
  return function(){
    let context = this;
    let args = arguments;
    let curTime = Date.now();
    let remaining = delay - (curTime - startTime);
    clearTimeout(timer)
    if(remaining <= 0 ){
      func.apply(this,args);
      startTime = Date.now();
    }else{
      timer = setTimeout(func, remaining);
    }
  }
}
