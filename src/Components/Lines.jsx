import React from "react";
import styled from "styled-components";

const Lines = () => {
  return (
      <ContentLinesWrapper>
          <ContentLinesInner>
              <ContentLines />
          </ContentLinesInner>
      </ContentLinesWrapper>
  );
};

const ContentLinesWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  @media only screen and (max-width: 767.98px) {
    display: none;
  }
`;
const ContentLinesInner = styled.div`
  position: absolute;
  width: 1170px;
  left: 50%;
  margin-left: -585px;
  top: 0;
  height: 100%;
  border-left: 1px solid #383838;
  border-right: 1px solid #383838;
  border-bottom: 1px solid #383838;
  @media only screen and (max-width: 1259.98px) {
    width: 930px;
    margin-left: -465px;
  }
  @media only screen and (max-width: 991.98px) {
    width: 690px;
    margin-left: -345px;
  }
`;

const ContentLines = styled.div`
  position: absolute;
  left: 33.333333%;
  right: 33.333333%;
  height: 100%;
  border-left: 1px solid #383838;
  border-right: 1px solid #383838;
`;

export default Lines;
