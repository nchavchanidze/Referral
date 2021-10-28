import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer id="Loader">
      <svg>
        <g>
          <path d="M 50,100 A 1,1 0 0 1 50,0" />
        </g>
        <g>
          <path d="M 50,75 A 1,1 0 0 0 50,-25" />
        </g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#edc48d", stopOpacity: "1" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#c39764", stopOpacity: "1" }}
            />
          </linearGradient>
        </defs>
      </svg>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;
