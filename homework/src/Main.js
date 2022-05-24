import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Link 사용하기 위해 임포트!

const Main = (props) => {
  //부모(App.js)로부터 데이터(props) 받아오기!
  const days_list = props.days;
  // 받아온 데이터를 days_list로 지어줌!
  const circle = [0, 1, 2, 3, 4];
  // 들어갈 동그라미 만들어줌!
  const num = new Array(7).fill(0).map((v) => Math.floor(Math.random() * 5));
  // 랜덤한 수를 만들어줌
  // new Array(7):길이 7인 새배열 만들고/fill(0):배열의 시작부터 끝 인덱스의 이전까지 정적인 값(0) 하나로 채워줌->[0,0,0,0,0,0,0]
  //map()함수를 통해 value를 =>로 채워줌/Math.random()*5로 0~5까지 랜덤히게/Math.floor()로 소수점 버려줌 -> 이로써 0~5 랜덤한 수가 7개 들어가는 배열 만듬[1,3,4,5,2,3,5]
  const avgNum = num.reduce((acc, cur) => acc + cur + 1, 0) / 7;
  //평균 값도 구해줘야하므로 num배열을 .reduce((acc, cur)=> acc+cur ,초기값)로 다 더해줌. 더한것을 /7해줌으로 평균구함.(근데 이상하게 1씩 작게나와서 1더해줌) 왜지??
  const [avg, setAvg] = React.useState(avgNum.toFixed(1));
  //const [data, data를 변경시킬함수] = React.useState(초기값(0 or "" or [])); -> useState 이용해서 계속 변화하는 평균값 넣어줌
  // avg로 data지정, 변경시킬 함수는 주로 data 앞에 set을 붙임 setAvg/ React.useState로 훅 사용/초기값은 지금 화면의 값들의 평균값인 avgNum넣고 .toFixed(1)로 소수점 아래 1자리까지 출력!
  const reset = () => setAvg(0.0);
  //버튼 누르면 실행될 reset함수/ setAvg(0.0)으로 바꿔줌!

  return (
    <Wrap>
      <Title>내 일주일은?</Title>
      {days_list.map((list, id) => {
        //.map((item, index)=>{<li key={index}>{item}</li>})
        //map()함수를 통해 days_list의 내용물을 아래 모양으로 나열해줌(생성)!
        //item에 key 넣어줘야함!
        return (
          <WrapCompoent>
            <MiniTitle key={id}>{list}</MiniTitle>
            <>
              {/* 리턴 2개면 안되서 빈배열 넣어주기! */}
              {circle.map((v, i) => {
                //동그라미 랜덤한 수 만큼 보라색으로 색칠해주기 위한 .map()
                const number = num[id];
                // 위에서 정의한 num(랜덤수)에 [id]로 순서 맞춰서(월화수..) number로 정의해줌!
                return (
                  <Circle
                    key={i}
                    style={{
                      backgroundColor: i <= number ? "purple" : "#e0e0e0",
                      //동그라미의 배경색은  number보다 작거나 같은 번째(i)들은 보라로 색칠, 나머진 회색! -> 즉, number만큼 색칠하겠다는 뜻!
                    }}
                  ></Circle>
                );
              })}
            </>
            <Link to={`/detail/${id}`}>
              {/* 링크를 이용하여 세모 눌렀을 때 id값 파라미터로 주면서 /detail로 이동 */}
              <Triangle></Triangle>
            </Link>
          </WrapCompoent>
        );
      })}
      <AverageBox>
        <AverageText>평균 평점</AverageText>
        <AverageText>{avg}</AverageText>
        {/* setAvg로 계속 변해주는 avg값 투입! */}
        <ResetBtn onClick={reset}>Reset</ResetBtn>
        {/* 이벤트리스너로 누르면 리셋 함수 실행! */}
      </AverageBox>
    </Wrap>
  );
};

const Title = styled.h3`
  color: purple;
  text-align: center;
  margin: 20px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const WrapCompoent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MiniTitle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: #fff;
  color: purple;
`;
const Circle = styled.div`
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 50%;
  float: left;
`;

const Triangle = styled.div`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-bottom: 18px solid transparent;
  border-top: 18px solid transparent;
  border-left: 25px solid purple;
  border-right: 25px solid transparent;
`;

const AverageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AverageText = styled.p`
  font-size: 20px;
  font-weight: bolder;
  color: #3b65e3;
`;

const ResetBtn = styled.button`
  background-color: #3b65e3;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 100px;
`;
//px 말고 rem(부모비율에 맞춰서 알아서 조절됨), em 사용해보자! vh vw사용하고/ 그래야 능동적으로 변함!
export default Main;
//export default 필수!
