'use client';

import { Dashboard } from '@mt/dashboard';

import styles from './page.module.scss';
import { Button, ModeToggle } from '@mt/ui-components';

export default function Index() {
  return (
    <>
      <div className="p-11">
        <ModeToggle />
      </div>
      <h1 className="text-6xl font-bold underline">Hello, Next.js!</h1>
      <Button variant="outline">Button</Button>
      <Dashboard />
    </>
  );
}
