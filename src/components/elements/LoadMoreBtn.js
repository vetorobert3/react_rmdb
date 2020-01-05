import React from 'react';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

const LoadMoreBtn = ({ text, callBack }) => (
  <StyledLoadMoreBtn type='button' onClick={callBack}>
    {text}
  </StyledLoadMoreBtn>
)

export default LoadMoreBtn;