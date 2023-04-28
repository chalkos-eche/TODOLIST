// 반복될 투두 아이템

import React, { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  //item {done:false,id;1,title:'test'}
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);
  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };
  // title input 을 클릭 ; reaOnly 를 false 로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") setReadOnly(true);
  };
  // 유저가 키보드 입력 할 때마다 item 의 값을 바꿔준다.
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest, // 타이틀 값만 변경 나머지 객체값은 그대로
    });
  };
  const checkBoxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    // todoItem.done = !todoItem.done;
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
    console.log(todoItem);
  };
  return (
    <div className="todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done} // 초기벨류
        onClick={checkBoxEventHandler}
      />
      <input
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onKeyDown={enterKeyEventHandler}
        readOnly={readOnly}
        onChange={editEventHandler}
      />
      <label htmlFor={`todo${item.id}`}>MY Todo : {item.title}</label>
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
};

export default Todo;
