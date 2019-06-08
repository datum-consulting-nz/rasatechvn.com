import React from 'react';
import CommonLayout from './CommonLayout';

export default ({ pageData }) => {
  console.log(pageData);
  return (
    <CommonLayout>
      <div>
        {pageData.nameOfPage}
      </div>

    </CommonLayout>
  );
};