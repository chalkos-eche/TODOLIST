import React, { useState } from "react";

const AddTodo = ({ addItem }) => {
  // 리액트 특성상 여기서 함수 실행후 부모 컴포넌트의 스테이트 값을 넘길수가 없어서
  // button 담당 이벤트를 부모 컴포넌트에서 작업해준다.
  // const addItem = () => {
  //   //something
  // };
  const [todoItem, setTodoItem] = useState({
    title: "", // done 은 false id 는 autoincrement
  });
  const onButtonClick = () => {
    //1. props addItem 함수
    addItem(todoItem);
    // 2. input 초기화
    setTodoItem({ title: "" });
  };
  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") onButtonClick();
  };
  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="add your new todo here"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onEnterKeyDown}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
};

export default AddTodo;
