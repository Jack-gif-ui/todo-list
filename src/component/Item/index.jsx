import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //勾选，取消勾选某一todo的回调
  handleCheck = (id, e) => {
    //获取当前点击todo的ID，并通知app修改对应done
    //console.log(id,e.target.checked)
    this.props.updateTodo(id, e.target.checked);
  };
  handleDelete = (id) => {
    //console.log("通知app删除", id);
    if (window.confirm('您确定删除吗？')) {
      this.props.deleteTodo(id);
    }
    return 
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => {
              this.handleCheck(id, e);
            }}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => {
            this.handleDelete(id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
