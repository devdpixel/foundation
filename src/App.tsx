import { ComponentExample } from "@/components/component-example";
import { Example } from "./components/example";

import { Button } from "@/components/ui/button";
import { Diamond } from "lucide-react";

export function App() {
  return (
    <>
      {/* <ComponentExample /> */}
      <div>
        <Example title="Button Variants">
          <Button>Click me</Button>
          <Button variant="outline">Click me</Button>
          <Button variant="secondary">Click me</Button>
          <Button variant="ghost">Click me</Button>
          <Button variant="destructive">Click me</Button>
          <Button variant="link">Click me</Button>
        </Example>

        <Example title="Button Sizes">
          <Button size="xs">Click me</Button>
          <Button size="sm">Click me</Button>
          <Button>Click me</Button>
          <Button size="lg">Click me</Button>

          <Button size="icon-xs">
            <Diamond />
          </Button>
          <Button size="icon-sm">
            <Diamond />
          </Button>
          <Button size="icon">
            <Diamond />
          </Button>
          <Button size="icon-lg">
            <Diamond />
          </Button>
        </Example>
      </div>
    </>
  );
}

export default App;
