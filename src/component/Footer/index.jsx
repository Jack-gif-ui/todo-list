import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    //点击全选
    this.props.checkAllTodo(e.target.checked);
  };
  //清除已完成
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    //计算总数与已完成
    const total = todos.length;
    //  对数组进行条件统计，计算done值
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
