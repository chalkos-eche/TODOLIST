import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Pretendard,sans-serif !important;
    
  }
body {
  font-size: 62.5%;
  background-color: #fff;
}
h1 {
  width: 100%;
}
input {
  outline: none;
  padding: 0.8rem;
  margin: 0.8rem;
}
button {
  padding: 0.8rem;
  margin: 0.8rem;
  outline: none;
  border: none;
  cursor: pointer;
}
label {
  padding: 0.8rem;
  margin: 0.8rem;
}
`

const Title = styled.h1`
  margin: 0.8rem;
  
  font-size: 2.4rem;
`
const SubTitle =styled.h2`
  font-size: 1.2rem;
  color: #eff2fa;
  background-color: #4caf50;
  padding: 0.4rem 0.8rem;
  margin: 0.8rem;
  border-radius: 1.2rem;
`
const Wrapper = styled.div`
display: flex;
  flex-wrap: wrap;
  height: 100%;
  max-height: 93vh;
  width: 50vw;
  min-width: 440px;
  background-color: #eee;
  border-radius: 1.2rem;
  margin: 0 auto;
  margin-top: 0.8rem;
  box-shadow: inset .05rem .05rem .5em 0.05rem rgba(0,0,0,0.1);
  overflow: hidden;
  padding: 2.4rem 0.8rem;
  
`
function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "저녁먹기",
      done: false,
    },
    {
      id: 2,
      title: "my todo2",
      done: true,
    },
    {
      id: 3,
      title: "my todo3",
      done: false,
    },
  ]);
  // Todo 추가하는 함수 ( 버튼은 자식 컴포넌트에 있음)
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    //something
    setTodoItems([...todoItems, newItem]);
  };
  // Todo 를 삭제하는 함수 ( 버튼은 자식 컴포넌트에 있음 )
  const deleteItem = (targetItem) => {
    // targetItem =>{title:'xxx,id:n,done:false}
    // 1. filter() targetItem.id !== todoItems의 id가 같지 않음(살림) 새로운 배열로 변환
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
    // 2. 새로운 배열을 만들어서 setTodoItems 에 변경
  };
  return (
    <Wrapper>
      <GlobalStyle/>
      <Title>Simple Todo App</Title>
      <SubTitle>Add your today's TODO </SubTitle>
      <AddTodo addItem={addItem} />
      {/*Todo ITEM 목록 컴포넌트*/}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </Wrapper>
  );
}

export default App;
