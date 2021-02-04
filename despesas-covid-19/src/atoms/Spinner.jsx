import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderCSS = styled.div`
  width: 100%;
  height: 100%;
`;

export const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();
  console.log(promiseInProgress);

  return (
    promiseInProgress && (
      <LoaderCSS className="spinner">
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </LoaderCSS>
    )
  );
};
