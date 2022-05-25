import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//App.js 받아오고
import { BrowserRouter } from "react-router-dom";
// BrowserRouter 사용 위해 임포트!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* BrowserRouter로 App.js 감싸주기 */}
    <App />
  </BrowserRouter>
);

// - Q1. 평균 평점 state를 메인 컴포넌트에 두셨나요, 하위 컴포넌트인 평균 평점 컴포넌트에 두셨나요?
// (state와 props 개념을 떠올려 보세요)
//    하위에다가 만들었어요!
//     - 선택하신 방식의 장단점은 무엇이라 생각하시나요?
//    굳이 props로 안가져와도 만들 수 있어요!
//     - 평균 평점과 리셋 버튼을 추가할 때 어떤 고민을 하셨나요?
//      나눠준 랜덤한 수를 평균을 낼 때 변수를 새로 만들어 줘야하나 고민을 했어요! 결국 만들어서 useState 사용해서 해결했어요!
// - Q2. 과제 구현 간, 상태관리를 위해 useState를 사용해보고 배운 점을 적어주세요.
//  useState 내의 modifier 함수를 이용해서 변화하는 평균값이나 클릭했을시 변화하는 값을 쉽게 변경시킬 수 있었습니다!
// - Q3. 랜덤 숫자가 아닌 평점 남기기 페이지에서 입력한 숫자를 반영하기 위해서는 어떻게 해야 할까요?
//    평점 남기기 페이지에서 입력한 값을 저장해서 다시 main페이지에 넘겨줘야 해요! 그리고 main에서 다 더해서 평균을 내줘요!
//     - 평점 남기기 페이지에서 입력한 숫자가 반영이 잘 되지 않았을거에요! 우리의 데이터를 저장할 공간이 없기 때문이죠!
//     그래서 리덕스를 배워야 하나요??
//     → 지금의 불편함을 꼭 기억해주세요. 다음 단계로 이 불편함을 해결해주기 위한 툴들을 배우게 될 것입니다.
//      넵!
