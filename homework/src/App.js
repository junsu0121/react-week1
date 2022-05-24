import React from "react";
import { Route } from "react-router-dom";
// Route 사용 위해 임포트!
import Main from "./Main";
import Detail from "./Detail";
// 만든 페이지들 가져오기!
import styled from "styled-components";

function App() {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  //모든 페이지에서 사용될 값들을 만들어서, 아래에서 props로 보내줌!

  return (
    <div className="App">
      <Container>
        {/* 담을 container 만들어서 컴포넌트들(페이지들) 담기 */}
        <Route path="/" exact>
          {/* Route로 감싸는데 path="" 작성,(메인은 주로 /), exact로 완전히 같을 때만 보여줘! (exact 없을경우 포함하면 다 보여줘) */}
          <Main days={days} />
          {/* 컴포넌트(페이지) 넣어주기, 넣어줄 때 props 넘겨줄 수 있음. props이름은 내마음대로 작성! */}
        </Route>
        <Route path="/detail/:id" exact>
          {/* path에 /:id로 파라미터 전송가능! 
          파라미터 보내는 페이지에서는 <Link to={`/detail/${id}`}> 이런식으로 넣어줌!
          파라미터는 데이터를 받을 페이지에서 useParams를 리액트-라우터-돔으로 임포트해서 사용! */}
          <Detail days={days} />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 360px;
  min-height: 70vh;
  background-color: #fff;
  padding: 16px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;
// index.js에서 받아야 하므로 export default 필수!
