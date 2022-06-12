import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Team</h1>
            <p className="font13">
              We are a determined team, looking to contribute to the development of STEM by providing software solutions
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Ehis Edemakhiota"
                imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQGHovSZhedhWw/profile-displayphoto-shrink_400_400/0/1634926058023?e=1660176000&v=beta&t=zmD0E4cqXBST9mXjz_VBzl09CzjNLVLE5KAFklBJRD8"
                text="Solution provider with a can-do attitude capable of creative problem solving using design thinking,
                 critical thinking and technology."
                tag="Software Engineer"
                author="https://github.com/ehizman"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Barnabas Oretan"
                imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQFZKugOHEbg3Q/profile-displayphoto-shrink_400_400/0/1625219290794?e=1660176000&v=beta&t=4oOFys7whEgGIaI-VXPKQNx8AkFHsQAArOpwdCBX2fA"
                text="Enthusiastic Multipotentialite eager to contribute to the team's success through hard work,
                attention to detail, and excellent multiple organizational skills."
                tag="Software Engineer/Web 3 Engineer"
                author="https://github.com/OmimiCode"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Oluwatobi Jolayemi"
                imageUrl="https://media-exp1.licdn.com/dms/image/C4D03AQENycEi-XPvJw/profile-displayphoto-shrink_800_800/0/1651245736497?e=1660176000&v=beta&t=T8TY-CtTBryEGAeYq6_qR3oCQ40YFFrjDOb7gJ7lDpE"
                text="Oluwatobi is an ambitious software engineer with strong command in Java, Golang, Javascript,
                Python, and Cloud Engineering."
                tag="Software Engineer"
                author="https://github.com/Leonardra"
                action={() => alert("clicked")}
              />
            </div>
          </div>

      </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;