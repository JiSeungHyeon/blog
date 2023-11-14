import "./assets/scss/App.scss";
import Visual from "./assets/img/visual.jpg";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "리액트 공부하기",
    "뷰 공부하기",
    "넥스트 공부하기",
  ]);
  let [modal, setModal] = useState(true);
  let [num, setNum] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  let [input, setInput] = useState("");
  let [content, setContent] = useState([
    "정말 재밌었다!",
    "어렵지만 화이팅!",
    "조금만 더 힘내기!",
  ]);
  let [write, setWrite] = useState("");

  return (
    <div className="App">
      <div className="visual">
        <img src={Visual} />
      </div>
      <div className="blog">
        <h1>Blog for you</h1>
        <button
          onClick={() => {
            let copy = [...title];
            copy.sort();
            setTitle(copy);
          }}
        >
          정렬하기
        </button>

        <div className="board">
          <div className="list">
            {title.map(function (n, i) {
              return (
                <div className="title" key={i}>
                  <h4
                    onClick={() => {
                      setModal(modal);
                      setNum(i);
                    }}
                  >
                    {n}
                  </h4>
                  <span
                    onClick={() => {
                      let copy = [...like];
                      copy[i] = copy[i] + 1;
                      setLike(copy);
                    }}
                  >
                    ❤️{like[i]}
                  </span>
                </div>
              );
            })}
          </div>
          {modal === true ? (
            <Modal title={title} content={content} num={num} />
          ) : null}
        </div>
        <div className="write">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <textarea
            onChange={(e) => {
              setWrite(e.target.value);
            }}
          ></textarea>
          <button
            onClick={() => {
              if (input === "") {
                alert("제목을 입력해주세요");
              } else if (write === "") {
                alert("내용을 입력해주세요");
              } else {
                let copy = [...title];
                let copy2 = [...like];
                let copy3 = [...content];
                copy.unshift(input);
                copy2.unshift(0);
                copy3.unshift(write);
                setTitle(copy);
                setLike(copy2);
                setContent(copy3);
                document.querySelector("input").value = "";
                document.querySelector("textarea").value = "";
                setInput("");
                setWrite("");
              }
            }}
          >
            발행
          </button>
        </div>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.num]}</h4>
      <p>{new Date().toLocaleDateString()}</p>
      <p>{props.content[props.num]}</p>
    </div>
  );
}

export default App;
