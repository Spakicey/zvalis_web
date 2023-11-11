import { Suspense } from 'react';

export function Scene() {
  return (
    <Suspense fallback={null}>
      <Sketch />
    </Suspense>
  );
};
