'use client';

import { useEffect } from 'react';
import { Test } from '@mt/ui-components';
import { useRouter } from 'next/navigation';
import { Button } from '@mt/ui-components';
import { Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@mt/ui-components';
import { Alert, AlertDescription, AlertTitle } from '@mt/ui-components';
import { ModeToggle } from '@mt/ui-components';

export function Dashboard() {
  return (
    <div>
      <div style={{ padding: '40px' }}>
        <p>LibsL</p>
        <ModeToggle />
      </div>

      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

      <Test />
      <p>Hello from dashboard!</p>
      <Button variant="default">Button</Button>
      <h1 className="text-6xl font-bold underline">Hello, LIBRARY</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
