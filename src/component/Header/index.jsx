import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp = (e) => {
    const { target, keyCode } = e;
    if (keyCode === 13) {
      //添加的todo name不能为空
      if (target.value.trim() === "") {
        alert("输入不能为空");
        return
      } else {
        //包装为todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false };
        this.props.addTodo(todoObj);
        target.value=''
      }
    }
    return;
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
