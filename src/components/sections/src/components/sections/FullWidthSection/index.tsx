import * as React from 'react';

type FullWidthSectionProps = {
  children: React.ReactNode;
};

const FullWidthSection: React.FC<FullWidthSectionProps> = ({ children }) => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0">
      {children}
    </section>
  );
};

export default FullWidthSection;
