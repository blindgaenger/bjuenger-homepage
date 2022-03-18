import React from 'react';
import styled from 'styled-components';

const Separator = styled('hr')`
  margin: 3rem auto;
  width: 15vh;
  height: 0;

  border-color: var(--color-normal);
  border-style: double;
  border-width: medium 0 0 0;

  text-align: center;
`;

export default Separator;
