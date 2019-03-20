

import { addToCart, updateCart, deleteFromCart, addGUN }  from './actions/cart-actions.js'
import store from './store.js';
// 第一个参数state是当前保存在store中的数据，
// 第二个参数action是一个容器，用于： type - 一个简单的字符串常量，例如ADD, UPDATE, DELETE等。 payload - 用于更新状态的数据。

// state为undefined或null，要解决这个问题，需要分配一个默认的值给state，使其成为一个空数组。

// 通用reducer
// const reducer = function(state = [], action) {
//   return state;
// }



// 创建一个Redux存储区，它只能使用reducer作为参数来构造。
// 存储在Redux存储区中的数据可以被直接访问，但只能通过提供的reducer进行更新。
console.log("initial state", store.getState());

export function addGunAsync() {
  //thunk插件的作用，这里可以返回函数
  return dispatch => {
    //异步结束后，手动执行dispatch
    setTimeout(() => {
       // addGUN()时你的action
      dispatch(addGUN("rbq", 999))
    }, 1000);
  }
}

// 监听store事件的更改
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


// 分发任务
store.dispatch(addToCart('Coffee 500mg', 1, 250))
store.dispatch(addToCart('Flour 1kg', 2, 110))
store.dispatch(addToCart('Juice 2L', 2, 150))


store.dispatch(updateCart('Flour 1kg', 12, 12210))
store.dispatch(updateCart('Juice 2L', 9, 1050))

// 异步操作
store.dispatch(addGunAsync());

store.dispatch(deleteFromCart('milk 500ml'))

unsubscribe();