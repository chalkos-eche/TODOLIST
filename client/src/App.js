import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
// import styled from "styled-components";
// import {createGlobalStyle} from 'styled-components';
import Axios from 'axios';
// import {API_BASE_URL} from './app-config';
import NothingTodo from './components/NothingTodo'
import {Title,SubTitle,GlobalStyle,Wrapper,Total,Div} from './App.styled'
console.log(process.env.REACT_APP_DB_HOST);

function App() {
  const [todoItems, setTodoItems] = useState([
  ]);
  const [time,setTime] = useState('00:00');
  const [today,setToday] = useState('');
  const [completed,setCompleted] = useState([]);

  useEffect(() => {
    // console.log('mount 완료');
    const getTodos = async () => {
      const res = await Axios.get(`${process.env.REACT_APP_DB_HOST}/api/todos`);
      // console.log(res);
      // setTodoItems(res.data.sort((x,y)=>y.id - x.id));
      setTodoItems(res.data)
      // console.log(res.data)
      const complete = res.data.filter((item)=>item.done)
      setCompleted(complete)
    // console.log('first',complete)
    };
    getTodos();
  }, []);

  // Todo 추가하는 함수 ( 버튼은 자식 컴포넌트에 있음)
  const addItem = async(newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    //something

    // axios 요청 날리기
    // newItem 을  서버에 보낸다. (newItem = AddTodo.js 에서 todoItem state를 받아옴)
    // newItem = {title: 'xxx',}
    const res = await Axios.post(`${process.env.REACT_APP_DB_HOST}/api/todo`, newItem)
    // console.log(res)
    setTodoItems([res.data,...todoItems]);
  };

  // Todo 를 삭제하는 함수 ( 버튼은 자식 컴포넌트에 있음 )
  const deleteItem = async (targetItem) => {
    // targetItem =>{title:'xxx,id:n,done:false}
    // 1. filter() targetItem.id !== todoItems의 id가 같지 않음(살림) 새로운 배열로 변환
    await Axios.delete(`${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`)
    // 2. 새로운 배열을 만들어서 setTodoItems 에 변경
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  // TODO 수정하는 함수

  //  1) 서버 API 를 이용해 디비 데이터 업데이트
  // 2) 변경된 내용을 화면에 다시 출력
  const updateItem = async (targetItem)=>{
    await Axios.patch(`${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`,targetItem);
    if(targetItem.done){
      setCompleted([...completed,targetItem]);
    } else {
   setCompleted(completed.filter((item)=>item.id !== targetItem.id));}
    // console.log('completed',completed)
  }
  const currentTime = () => {
    const date = new Date();
    const today = String(date.getDate())
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    // const s = String(date.getSeconds()).padStart(2,"0");
    setTime(`${h}:${m}`)
  }
  //
  // useEffect( )

  // 시간 렌더링
  useEffect( ()=>{
    setInterval(()=>{
      currentTime()
    },1000)
  },[time])

  useEffect(()=>{
    const date = new Date();
    const today2 =String(date.getMonth()+1)
    const today = String(date.getDate());
setToday(`${today2}월${today}일`)
  },[])

  return (
    <Wrapper>
      <GlobalStyle/>
      <Title>오늘은 무엇을 하시나요 </Title>
      <SubTitle>{today}, 시간은 {time} 입니다.</SubTitle>
      <Div>
      <Total>{todoItems.length}개의 할일 에서,
        <span style={{color:'#40b200',fontWeight:'900'}}> 오늘 총 {completed.length}개</span> 끝내셨습니다. </Total>
      </Div>
      <AddTodo addItem={addItem} />
      {/*Todo ITEM 목록 컴포넌트*/}
      { !todoItems?.length ? <NothingTodo/> :
          todoItems.map((item) => (<Todo key={item.id} item={item} deleteItem={deleteItem} updateItem={updateItem} />
        ))}


    </Wrapper>
  );
}

export default App;
