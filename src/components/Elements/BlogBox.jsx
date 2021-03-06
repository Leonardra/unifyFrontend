import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, imageUrl, text, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        {/*<div style={{border: "none", borderRadius: "0.5rem"} }>*/}
          <img src={imageUrl} alt={title} style={{width:"100%", height:"60%", border: "none", borderRadius: "0.5rem"}}/>
        {/*</div>*/}
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <a><p className="font13 extraBold">{author}</p></a>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}




const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
