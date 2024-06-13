
import DefaultLayout from '@/components/core/layouts/DefaultLayout';
import React from 'react';


const DefaultTemplate = async ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="">
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  );
};

export default DefaultTemplate;
