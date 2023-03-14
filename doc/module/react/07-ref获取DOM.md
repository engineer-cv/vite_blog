# ref获取DOM

 在日常开发中,我们经常会碰到需要获取DOM元素的需求

那么在react中,也提供了像vue中一样的API

就是ref

react中的ref一共有三种使用方式

- 方式一:直接给ref绑定字符串,然后通过`this.refs.`的方式获取,(不推荐这个方式,官方已经废弃了,但是仍然可以使用)

  ```jsx
  render() {
      return (
        <div>
          {/* 方式一 */}
          <h2 ref='firstH2'>hello,world</h2>
          <button onClick={e => this.getNativeDOM()}>获取元素</button>
        </div>
      )
    }
  ```

- 方式二:提前创建ref对象,并且将该对象绑定到元素上

  使用react提供的`creatRef()`创建ref对象,需要提前引入

  绑定的元素会存放在创建的ref对象中的current上

  ```jsx
  import React, { PureComponent, createRef } from 'react'
  constructor() {
      super()
      this.secondH2 = createRef()
    }
  getNativeDOM() {
    console.log(this.secondEl.current)
  }
  render() {
      return (
        <div>
          {/* 方式二 */}
          <h2 ref={this.secondH2}>How are you?</h2>
          <button onClick={e => this.getNativeDOM()}>获取元素</button>
        </div>
      )
    }
  ```

- 方式三:绑定ref的时候,传入一个回调函数,在元素渲染的时候,会自动调用该回调函数

  并且,该回调函数的入参,就是被绑定的这个元素

  ```jsx
  constructor() {
      super()
      this.thirdH2 = createRef()
    }
  getNativeDOM() {
    console.log(this.thirdH2)
  }
  render() {
    return (
      <div>
        {/* 方式三 */}
        <h2 ref={el => this.thirdH2 = el }>I'm fine.Thank you. And you?</h2>
        <button onClick={e => this.getNativeDOM()}>获取元素</button>
      </div>
    )
  }
  ```



**需要注意的是,ref只能绑定在原生的元素上,或者类组件上,是无法绑定在函数式组件上的**

但是在实际开发中,肯定会遇到需要给函数式组件绑定ref的需求

react提供了一个叫ref转发的东西

当我们创建函数式组件的时候,需要用`forwardRef`将该函数组件包裹起来

```jsx
import React, { PureComponent, createRef, forwardRef } from 'react'

const FunctionComponent = forwardRef(
  function(props,ref) {
    return (
      <div ref={ref}>
        <h2>我是函数式组件</h2>
      </div>
    )
  }
)

export class App extends PureComponent {
  constructor() {
    super()
    this.FunctionComponent = createRef()
  }

  getNativeDOM() {
    console.log(this.FunctionComponent.current);
  }

  render() {
    return (
      <div>
        <FunctionComponent ref={this.FunctionComponent}/>
        <button onClick={e => this.getNativeDOM()}>获取元素</button>
      </div>
    )
  }
}
```



当我们使用ref绑定类组件的时候,其实是绑定在类组件的实例上的,但是函数式组件并没有实例

于是,就有了ref转发

为了便于理解,我们可以这样想

在使用函数式组件的时候,其实就是在调用该函数,绑定的ref值,相当于我们传进去的入参,然后在函数式组件中,将入参绑定给DOM元素

```jsx
//伪代码

//父元素
render() {
    return (
      <div>
        <FunctionComponent ref={this.FunctionComponentRef}/>
        {/* 这里可以看成函数的调用 */}
        {/* FunctionComponent(ref=FunctionComponentRef)*/}
      </div>
    )
  }
```

