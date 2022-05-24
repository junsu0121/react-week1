import React from "react";
import { Link, useParams } from "react-router-dom";
// Link로 main으로 가야하고, main에서 보내줌 파라미터 id값 받기위해 useParms 훅도 사용해야해서 임포트!
import styled from "styled-components";

const Detail = (props) => {
  const { id } = useParams();
  // useParams로 파라미터 값인 id값 받아옴!
  const circle = [0, 1, 2, 3, 4];
  // 들어갈 동그라미 만들어줌!
  const [count, setCount] = React.useState();
  // 동그라미 클릭하면 변해야하므로 useState 훅 사용!
  return (
    <WrapDetail>
      <h3>
        <Day>{props.days[id]}요일</Day> 평점 남기기
        {/* 받아온 파라미터로 몇번째인지 알 수 있고, 그걸 통해 props에 .days에 무슨 요일인지 알 수 있음! */}
      </h3>
      <div>
        {circle.map((v, i) => {
          // //동그라미 클릭한 수 만큼 보라색으로 색칠해주기 위한 .map()
          return (
            <Circle
              key={i}
              onClick={() => {
                setCount(i);
                //누르는 곳 번째를 i로!
              }}
              style={{ backgroundColor: i <= count ? "purple" : "#e0e0e0" }}
              // i 번째까지 보라로 색칠, 나머진 회색
            ></Circle>
          );
        })}
      </div>
      <Link to="/">
        {/* 누르면 main으로 */}
        <Btn>평점 남기기</Btn>
      </Link>
    </WrapDetail>
  );
};

const WrapDetail = styled.div`
  text-align: center;
  margin-top: 100px;
`;
const Day = styled.span`
  color: white;
  width: 50px;
  border: none;
  border-radius: 10px;
  background-color: orange;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
const Circle = styled.div`
  margin: 20px 10px;
  width: 40px;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: inline-block;
`;
const Btn = styled.button`
  color: white;
  width: 50%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: purple;
  align-items: center;
  justify-content: center;
`;

export default Detail;
