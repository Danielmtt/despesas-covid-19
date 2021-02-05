import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderCSSInterne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <LoaderCSSInterne>
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </LoaderCSSInterne>
    )
  );
};
