import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderCSSInterne = styled.div`
  height: 80vh;
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
