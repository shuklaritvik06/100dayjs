# Promises

```js
let p = new Promise((resolve,reject)=>{
  let a = 4;
  if(a===4){
    resolve('Good');
  }else{
    reject('Bad');
    }
})
p.then((message)=>{
  console.log(message)
  }).catch((message)=>{
      console.log(message)  
  });

```
For multiple promises at once


```js
Promise.all([]).then().catch();
```
