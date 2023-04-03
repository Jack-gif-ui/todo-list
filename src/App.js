import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "跳舞", done: false },
      { id: "004", name: "蹦极", done: true },
    ],
  };
  addTodo = (todoObj) => {
    //获取原来的todos
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  //勾选/取消勾选的回调
  updateTodo = (id, done) => {
    const { todos } = this.state;
    //所选项的done值修改
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done };
      }
      return todoObj;
    });
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    //从数组中删除指定ID的对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done };
    });
    this.setState({ todos:newTodos });
  };
  clearAllDone=()=>{
    const { todos } = this.state;
    //过滤done值为true的todo
    const newTodos = todos.filter((todo)=>{
      //return todo.done === false
      return !todo.done//过滤掉done为true的todo,返回todo为false的todo
    })
    this.setState({ todos:newTodos });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-warp">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    );
  }
}
