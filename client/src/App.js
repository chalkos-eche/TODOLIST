import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

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
    <div className="App">
      {/* TODO 추가 INPUT 컴포넌트*/}
      <AddTodo addItem={addItem} />
      My Todo App
      {/*Todo ITEM 목록 컴포넌트*/}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default App;
