src/
├── actions
│ └── cart-actions.js
├── index.js
├── reducers
│ ├── cart-reducer.js
│ ├── index.js
│ └── products-reducer.js
└── store.js



Redux在项目开发中使用：
​	用户发出 Action，Reducer 函数算出新的 State，View 重新渲染。但是，一个关键问题没有解决：异步操作怎么办？

Action 发出以后，Reducer 立即算出 State，这叫做同步

但是在实际开发中action大部分的情况是调用接口发送异步请求，也就是说：

Action 发出以后，过一段时间再执行 Reducer，这就是异步

redux-thunk 是一个比较流行的 redux 异步 action 中间件 。

1.导入thunk： import thunk from 'redux-thunk'。
2.导入中间件: import {createStore,applyMiddleware} from 'redux'。
3.创建store：let store = createStore(reducer函数，applyMiddleware(thunk))。
4.激活redux-thunk中间件，只需要在createStore中加入applyMiddleware(thunk)就可以。
5.创建action 创建函数,利用redux-thunk 帮助你统一了异步和同步 action 的调用方式(把异步过程放在 action 级别解决)。
