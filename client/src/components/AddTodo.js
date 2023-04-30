import React, { useState } from "react";
import styled from 'styled-components';
import {RiAddFill} from 'react-icons/ri';

const AddTodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-bottom: 1.6rem ;
  margin-bottom: 1.6rem;
  border-bottom: 0.1rem solid #fff1;
  //border-radius: 1rem;
  box-shadow: 0 1.6rem 1.6rem -2.8rem rgba(0,0,0,1);
  

`
const AddTodoInput = styled.input`
border-radius: 0.8rem;
  border: none;
  height: 2.4rem;
  padding: 0.8rem 2.4rem;
  font-size: 1.6rem;
  margin: 0.8rem;
  box-shadow: .1rem .15rem 0.2rem 0 rgba(0,0,0,0.1);
  color: white;
  font-weight: 900;
  flex: 1 1 0;
  width: 100%;
  background-color: #40b200;

  
  &::placeholder {
    font-weight: 900;
    color: white;
`

const AddButton = styled.button`
padding: 0.8rem;
  margin: 0.8rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  box-shadow: .1rem .15rem 0.2rem 0 rgba(0,0,0,0.1);
  color: #40b200;
  flex: 0 1 0;
`

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
    //빈값 추가안되게
    if(!todoItem.title) return;
    //1. props addItem 함수
    addItem(todoItem);
    // 2. input 초기화
    setTodoItem({ title: "" });
  };
  const onEnterKeyDown = (e) => {
    // console.log(e)
    if (e.key === "Enter")
      onButtonClick();
  };
  return (
    <AddTodoWrapper className="AddTodo">
      <AddTodoInput
        type="text"
        placeholder="오늘은..."
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onEnterKeyDown}
        autoFocus
      />
      <AddButton onClick={onButtonClick}><RiAddFill/></AddButton>
    </AddTodoWrapper>
  );
};

export default AddTodo;
