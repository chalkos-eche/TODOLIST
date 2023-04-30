// 반복될 투두 아이템

import React, { useState } from "react";
import {RiCloseFill} from 'react-icons/ri'
import styled from 'styled-components'

const Article = styled.article`
  display: flex;
  align-items: center;
  flex-grow: 1;
`
const Checkbox = styled.input`
  position: absolute;
  left: -1000%;
`
const TodoTitle = styled.input`
flex-grow: 7;
  margin: 0.4rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  font-weight: 900;
  width: 100%;
  
  //&:focus {
  //  transition: 0.4s all;
  //  background-color: #4caf50;
  //}

  
`
const TodoItem = styled.div`
  border-radius: 0.8rem;
  display: flex;
  width: 20rem;
  background-color: #fff;
  padding: 0.8rem;
  margin: 0.8rem;
  height: 2.4rem;
  box-shadow: .1rem .15rem 0.2rem 0 rgba(0,0,0,0.1);
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  
  ${TodoTitle}:focus ~ & {
    transition: 0.4s all;
    background-color: #4caf50;
  }
  &:hover {
    transition: 0.4s all;
    background-color: #4caf50;
  }
  &:hover > ${TodoTitle} {
    transition: 0.4s all;
    background-color: #4caf50;
  }

`

const DeleteButton = styled.button`
margin: 0.4rem;
  flex-grow: 1;
  background-color: transparent;
  height: 100%;
  
  &:hover {
    transition: 0.4s background;
    background-color: #eee4;
    border-radius: 50%;
  }
  
`

const Label = styled.label`
  display: block;
  background-color: white;
  padding: 0.8rem;
  margin: 0.8rem;
  width: 1.2rem;
  /*height: 2.4rem;*/
  border-radius: 2rem;
  box-shadow: .1rem .15rem 0.2rem 0 rgba(0,0,0,0.1);
  position: relative;
  transition: 0.6s all ;
  cursor: pointer;

  ${Checkbox}:checked + &:after {
    left: calc(100% - 1.2rem);}

  ${Checkbox}:checked + & {
    background-color:#4caf50;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background-color: #F0F5F9;
    box-shadow: .1rem .05rem 0.1rem 0 rgba(0,0,0,0.1);
    transition: 0.4s all ;
    }
    & span {
      display: none;
    }
`


const Todo = ({ item, deleteItem,updateItem }) => {
  //item {done:false,id;1,title:'test'}
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);
  // const [done,setDone] =useState([])
  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };
  // title input 을 클릭 ; reaOnly 를 false 로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {setReadOnly(true);
    updateItem(todoItem)
    }

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
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    }
    setTodoItem(updatedItem);
    updateItem(updatedItem); // 수정 2 - checkbox input 에서 check 여부변경시 수정
    // if (done) setDone(updatedItem.done);
  };
  return (

    <Article className="todo">
      <TodoItem style = {todoItem.done ? {
      backgroundColor:'#4caf50'} :
          {backgroundColor:'#fff'}
      }>
        <DeleteButton onClick={onDeleteButtonClick
        }
         style=  {todoItem.done ? {color:'#fff'
            } : {color:'#080808'}}
        ><RiCloseFill/></DeleteButton>
        <TodoTitle
            type="text"
            value={todoItem.title}
            onClick={offReadOnlyMode}
            onKeyDown={enterKeyEventHandler}
            readOnly={readOnly}
            onChange={editEventHandler}
            style = {todoItem.done ? {textDecoration :'line-through',backgroundColor:'#4caf50',color:'#fff'
      } : {textDecoration:'none',backgroundColor:'#fff',color:'#080808'}
        }
        />
      </TodoItem>
      <Checkbox
          type="checkbox"
          id={`todo${item.id}`}
          name={`todo${item.id}`}
          value={`todo${item.id}`}
          defaultChecked={item.done} // 초기벨류
          onClick={checkBoxEventHandler}
      />
      <Label htmlFor={`todo${item.id}`}><span></span></Label>
    </Article>
  );
};

export default Todo;
