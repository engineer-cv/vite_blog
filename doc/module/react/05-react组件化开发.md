# react组件化开发

## 组件生命周期

与vue一样,react也有生命周期,通常我们将网络请求放在生命周期中

生命周期是一个抽象的概念,在生命周期的整个过程,分成了很多个阶段

- 装载阶段(Mount),组件第一次在DOM树中被渲染的过程
- 更新阶段(Update),组件状态发生变化,重新渲染的过程
- 卸载过程(Unmount),组件从DOM树中移除的过程 

生命周期函数(类组件)

- `componentDidMount` 当组件已经挂在到DOM上时回调
- `componentDodUpdate` 当组件发生了更新时回调
- `componentWillUnmount` 当组件即将被移除时回调

当我们定义了一个类组件的时候,每使用一次该类组件,就会创建一个该类的实例,创建实例的时候,会先执行该类的`constructor()`

## 组件间的通信

当我们使用组件化开发的时候,不可避免的会遇到组件间相互通信的问题

在react中,父子组件之间的通信,与vue基本相似

### 父传子

- 父组件通过`属性=值`的方式传递给子组件数据	

  ```jsx
  <Chirldren datas={datas} />
  ```

- 子组件通过props参数获取父组件传递过来的数据

  ```jsx
  class Chirldren extends Component {
    constructor(props) {
  	super(props) 
      this.state = {}  //子组件自己的数据
    }
    render() {
      const {datas} = this.props //父组件传递过来的数据
      return 
    }
  }
  ```

参数 **propTypes**

**类型校验**

当我们希望对父组件传递过来的数据做类型限制的时候,这个时候就需要使用propTypes

首先需要引入`import PropTypes from 'prop-types'` 

然后在文件中使用

```jsx
class Chirldren extends Component {
  constructor(props) {
	super(props) 
    this.state = {}  //子组件自己的数据
  }
  render() {
    const {datas} = this.props //父组件传递过来的数据
    return 
  }
}

Chirldren.proptypes = {
  datas:PropTypes.array //对datas类型做一个限制,当父组件传递过来的数据不符合期望类型的时候,控制台会爆警告,如果想对props的数据有更多的限制,例如必传之类的,可以继续 '.'
  //datas: PropTypes.array.isRequired
}
```

具体有哪些限制可以在官方文档中查看

https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html

**默认值**

当父组件没有传递数据的时候,我们希望有默认值的时候

```jsx
Chirldren.defaultProps = {
  datas: []
}
```



### 子传父

在react中,如果子组件想传递数据给父组件,是通过函数的方式传递

简单来说,就是父组件先传递一个函数给子组件,子组件拿到这个函数之后,将要传递给父组件的数据,作为该函数的入参,然后在子组件中调用该函数,这样就实现了子传父

```jsx
//父组件
class Parent extends Component {
  constructor() {
    super()
    this.state = {
      counter:0
    }
  }
  changeCount(count) {
    this.setState({
      counter:this.state.counter + count
    })
  }
  render() {
    const { counter } = this.state
    return <h2>{counter}<h2>
      <Children addCount={(count)=>this.changeCount(count)} /> 
      {/*
      	将箭头函数传递给子组件,通过参数的方式接收子组件传递过来的值,并且在父组件中更新数据
      */}
  }
}
```

```jsx
//子组件
class Children extends Component {
  addClick(count) {
    this.props.addCount(count) //接收父组件传递过来的函数,并且调用的时候,将需要传递出去的数据作为入参
  }
  render() {
    return (
      <div>
        {/* 绑定事件,并且将数据作为入参传递出去 */}
        <button onClick={e => {this.addClick(1)}}>+1</button>	
        <button onClick={e => {this.addClick(5)}}>+5</button>
        <button onClick={e => {this.addClick(10)}}>+10</button>
      </div>
    )
  }
}
```

总结来说,子组件传递数据给父组件的方式

1. 父组件先传递一个函数给子组件
2. 子组件接收到父组件传递过来的函数之后,在事件绑定的函数中,直接调用,并且将需要传递的值作为入参,通过函数参数的方式,传递出去