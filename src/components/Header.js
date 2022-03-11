import React from "react";
import styled from "styled-components";
import header from "./images/4.jpg";

export default function Header() {
  return (
    <Image className="container w-screen h-screen flex justify-center items-center">
      <h1 className="text-6xl justify-center text-white font-serif font-light">
        SkyLimit
      </h1>
    </Image>
  );
}

const Image = styled.div`
  background-image: url(${header});
  background-size: cover;
  background-position: center;
`;
