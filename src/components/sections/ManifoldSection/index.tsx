import * as React from 'react';
import FullWidthSection from '../FullWidthSection';

const ManifoldSection = () => {
  return (
    <FullWidthSection>
      <iframe
        src="https://app.manifold.xyz/c/SEU-SLUG"
        style={{
          width: '100%',
          minHeight: '100vh',
          border: 'none',
        }}
        allow="clipboard-write"
      />
    </FullWidthSection>
  );
};

export default ManifoldSection;
