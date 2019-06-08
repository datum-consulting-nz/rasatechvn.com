import React from 'react';
import CommonLayout from './CommonLayout';
import Header from "../components/Header"

export default ({ pageData }) => {
  console.log(pageData);
  return (
    <CommonLayout>
      <Header headerData={pageData.header}/>
    </CommonLayout>
  );
};