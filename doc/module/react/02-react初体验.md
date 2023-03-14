#  react初体验

- 在react中，我们使用的是jsx的语法，所以需要安装babel对jsx语法进行转换

- 另外我们也需要**安装react对应的依赖**

  - 通过cdn引入的方式
  - npm
  - 直接下载下来

  我们使用cdn方式引入，在官网有cdn的地址

  [](https://zh-hans.reactjs.org/docs/cdn-links.html)

  安装的bebel官网中也有

  [](https://zh-hans.reactjs.org/docs/add-react-to-a-website.html)

 准备好这些之后，我们可以开始进行react的体验了，准备一个demo，例如通过点击按钮改变页面的文本，这在vue中很容易实现，如果使用react将如何实现呢

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- 添加依赖 -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <script type="text/babel">
      //定义数据
      let meesage = "hello world";
      
      //定义点击按钮之后监听的函数
      function btnClick() {
        // 修改数据
        meesage = "hello react";

        //修改完数据需要重新渲染，react中默认不自动重新渲染
        rortRender();
      }

      // 选在挂载的根节点，react中可以有多个根节点
      const root = ReactDOM.createRoot(document.querySelector("#root"));
      // 渲染函数
      const rortRender = function () {
        root.render(
          <div>
            <h2>{meesage}</h2>
            <button onClick={btnClick}>修改数据</button>
          </div>
        );
      };
      // 初次进入页面时调用渲染函数
      rortRender();
    </script>
  </body>
</html>

```

**注意事项**

1. `script`里的type类型要设置为`text/babel`,作用是可以让babel解析jsx的语法
2. 在react中，如果在html里面插入变量，使用的是`｛｝`语法
3. 给元素绑定监听事件，例如监听点击事件，使用的onClick={}这样的语法，与vue中的@不同





# react——组件化开发

在react中有两种定义组件的方式

1. 类组件
2. 函数式组件

## 类组件

与es6中的语法相同，也是使用class进行定义，需要注意的是，定义的类组件需要**继承react中的`React.Component`**只有继承这个类，才会将这个类当成类组件进行渲染

另外需要注意的是，定义的类组件中，必须要实现render方法，这是固定语法，只有写在`render`方法中的元素，才会被渲染

### 组件化问题一：数据

组件中要渲染的元素，我们写在`render`方法中，那么数据应该放在哪里呢

这里的数据分为两种，一种是参与页面更新的数据，例如h2中的message，一种是不参与页面更新的数据，例如button中的修改文本，这一类数据一般是不会变化

参与页面更新的数据，统一定义在当前对象的state里

### 组件化问题二，事件绑定中this

在类中直接定义一个函数，并且将这个函数绑定到元素的onClick事件上，当前的这个函数的this指向的是undefined

所以我们需要通过bind手动绑定this

第一种是在constructor()中绑定,下面有示例

第二种在事件绑定的时候绑定this `<button onClick={this.btnClick.bind(this)}>修改文本</button>`

```js
class App extends React.Component {
    //组件数据
    constructor() {
      super()

      this.state = {
        message: 'hello world'
      }

      //这里需要手动绑定this，否则this指向的是undefined
      this.btnClick = this.btnClick.bind(this)  
    }
    // 组件方法
    btnClick() {
      // setState方法会先改变数据，然后自动调用render方法
      console.log(this);
      this.setState({
        message: 'hello React'
      })
    }

    // 渲染内容:固定语法，render方法 
    render() {
      return (
        <div>
          <h2>{this.state.message}</h2>
          <button onClick={this.btnClick}>修改文本</button>
        </div>
      )
    }
  }

  // 选在挂载的根节点，react中可以有多个根节点
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  // 渲染函数
  const rortRender = function () {
    root.render(<App/>)
};
   // 初次进入页面时调用渲染函数
rortRender(); 
```

