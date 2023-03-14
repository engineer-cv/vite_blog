# JSX的基本语法

## JSX的事件绑定（this）

jsx中绑定this有多种方式，这里只展示常用的几种

1. 第一种方式，通过bind绑定，也是官网上的例子

   我们在类组件中定义了方法之后，可以在constructor中通过bind绑定this，也可以在render函数中绑定this

2. 第二种方式，class的fields，有点类似于将方法使用箭头函数定义，但是这是class中的特殊语法

3. 第三方式，在定义方法的时候， 无需做任何操作，只需要在render方法中，绑定事件的时候，绑定的是一个箭头函数，箭头函数执行你所定义的方法，此种方式最常用，参数传递也最方便

   ```js
   class App extends React.Component {
         constructor() {
           super()
           this.state = {
             count: 100
           }
           //第一种：在constructor中绑定this
           this.btnClick1 = this.btnClick1.bind(this)
         }
         
         btnClick1() {
           this.setState({
             count: this.state.count + 1
           })
         }

         btnClick2 = () => {
           this.setState({
             count: this.state.count + 10
           })
         }

         btnClick3() {
           this.setState({
             count: 9999
           })
         }

         render() {
           return (
             <div>
               <h2>当前计数</h2>
               <p>{this.state.count}</p>
               {/* 第一种绑定方式：通过bind绑定*/}
               <button onClick={this.btnClick1.bind(this)}>绑定方式1</button>  

               {/* 第二种绑定方式：class的fields*/}
               <button onClick={this.btnClick2}>绑定方式2</button>  
               
               {/* 第二种绑定方式：直接传入箭头函数（最常用）
                 * 通过箭头函数不绑定this的特性，直接传入箭头函数，并且在箭头函数中执行btnClick3（）
                 * 当在箭头函数中通过this.btnClick3()这种方式执行的是，隐式绑定的this，此时的this就是当前实例
                 * 
               */}
               <button onClick={() => this.btnClick3()}>绑定方式3</button>  
             </div>
           )
         }
       }
   ```


   ## JSX事件绑定-参数传递

   jsx中,事件绑定的时候,会默认传递该事件的event参数

      1. 第一种绑定方式,会默认将event传递
      2. 第二种,通过箭头函数,绑定事件,需要将event作为箭头函数的参数,传递给绑定的函数中
      3. 当有额外的参数需要传递的时候,与js中无异,

   ```jsx
   render() {
     return (
       <div>
       <h2>{this.state.message}</h2>
       {/*1：event参数的传递*/}
       <button onClick={this.btnClick}>按钮一</button>
       <button onClick={(event) => this.btnClick(event)}>按钮二</button>

         {/*2: 额外的参数传递*/}
        <button onClick={(event) => this.btnClick(event,"张三",14)}>
           按钮三
   	</button>
             </div>
           )
         }
   ```

   ​