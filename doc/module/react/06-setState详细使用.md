# setState的详细使用

## setState的更多用法

1. 基本使用

   当我们调用setState()时,首先会将我们传入的对象与之前的state进行合并操作,然后会在某一个时刻调用render(),重新渲染

   ```jsx
   changeMessage() {
     //setState里面传入的对象,与state合并.Object.assign(this.state,newState)
     const newState = {
       message: "aaa"
     }
     this.setState(newState) 
   ```

2. 传入一个回调函数

   传入回调函数的好处在于,我们可以在回调函数中,对新的state进行一些操作

   并且能够在回调函数中,直接拿到之前的state与props

   ```jsx
   this.setState((state,props) => {
     console.log("state",state);
     //对newState做一些操作之后,返回
     return newState
   })
   ```

3. setState在react中其实是一个异步调用

   所以当我们执行完setState之后,立即打印this.state时,打印的是之前的数据

   如果希望在数据更新之后,获取到最新的值,并且对最新的值进行一些逻辑操作时

   那么可以在setState中传入第二个参数(callback)

   传入的callback会在数据合并(Object.assign(this.state,newState))之后,立即调用

   ```jsx
   this.state = {
     message: 'hello world'
   }
   newState = {
     message: 'aaa'
   }
   this.setState(newState,() => {
     console.log(this.state.message);
   }) 
   console.log(this.state.message);

   //打印结果
   // hello world
   // aaa
   ```

   通过上面的例子很容易验证出来,setState是一个异步的操作

   那么为什么要将setState设计成异步呢?

   **性能优化**,这是最主要的原因,我们知道,setState中会调用render函数,从而渲染新的DOM元素

   假如,在一个事件中,同一时间或者极短的时间内,重读多次调用了setState,那么就会造成render函数多次执行,render函数执行之后,会重新创建新的元素,由于更新了DOM,又会引起回流和重绘

   在react内部,其实是对setState进行了一个合并操作,将setState塞入到了一个队列当中,然后依次从队列中取出每一个setState进行合并,合并结束后在调用render函数

   这样设计还有一个好处就是,可以保证state与props的数据一致性

   因为如果setState是同步的情况下,那么就要保证每次数据更新之后,要里面调用render函数,否则就有可能会出现state的值与props的值不一致的情况 

## 如何在react18中,仍然将setState变为同步

在实际开发中,难免会碰到,我们需要立即使用更新过后的数据,除了上面讲到的在setState中传入回调函数的方式,也可以使用react官方提供的`flushSync()`

```jsx
//需要先从react-dom中导入这个函数
import { flushSync } from 'react-dom'

changeMessage() {
  flushSync(() => {
    this.setState({
      message:'aaa'
    })
  })
  console.log("对最新的state进行操作",this.state.message);
}
```

