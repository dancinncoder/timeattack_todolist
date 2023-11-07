import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // 할일 배열
  const [toDo, setTodo] = useState(
    [
      {id: 1, title: "제목입니다1", content:"내용입니다", isDone:false},
      {id: 2, title: "제목입니다2", content:"내용입니다", isDone:true},
      {id: 3, title: "제목입니다3", content:"내용입니다", isDone:false}]
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);

  const titleHandler = function(event) {
    setTitle(event.target.value);
  }

  const contentHandler = function(event) {
    setContent(event.target.value);
  }

  const addBtnHandler = function(event) {
    const newToDo = {id: toDo.length + 1, title: title, content: content, isDone: false};
    setTodo([...toDo, newToDo]);
    setTitle("");
    setContent("");
  }

  const deleteBtnHandler = function(id) {
    const deletedToDo = toDo.filter(function(item){
      return item.id !== id;
    })
    setTodo(deletedToDo);
    console.log(deletedToDo);
  }


  return (
    <div>
      <header>
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <main>
        <div>
          제목: <input value={title} onChange={titleHandler}></input>
          내용: <input value={content} onChange={contentHandler}></input>
          <button onClick={addBtnHandler}>추가</button>
        </div>
        <div className="card_area">
          <div className="card_box">
            <h3>진행중인 할일</h3>
              {toDo.filter(function(item){
                return item.isDone === false;
              }).map(function(toDo){
                return (
                  <div key={toDo.id} className="card">
                    <h4>{toDo.title}</h4>
                    <div>{toDo.content}</div>
                    <button onClick={deleteBtnHandler}>삭제</button>
                    <button>완료</button>
                  </div>
                );
              })}
          </div>
          <div className="card_box">
            <h3>완료된 할일</h3>
            <div className="card">
              {toDo.filter(function(item){
                  return item.isDone === true;
                }).map(function(toDo){
                  return (
                    <div key={toDo.id} className="card">
                      <h4>{toDo.title}</h4>
                      <div>{toDo.content}</div>
                      <button>삭제</button>
                      <button>완료취소</button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
