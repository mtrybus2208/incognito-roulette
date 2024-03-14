'use client';

import { useEffect } from 'react';
import { Test } from '@mtrybus/ui-components';
import { useRouter } from 'next/navigation';

export function Dashboard() {
  return (
    <div>
      <Test />
      <p>Hello from dashboard!</p>
    </div>
  );
}
