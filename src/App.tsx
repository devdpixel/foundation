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
          <Button>
            <Diamond />
            Button
            <Diamond />
          </Button>

          <Button variant="secondary">
            <Diamond />
            Button
            <Diamond />
          </Button>

          <Button variant="outline">
            <Diamond />
            Button
            <Diamond />
          </Button>

          <Button variant="ghost">
            <Diamond />
            Button
            <Diamond />
          </Button>

          <Button variant="destructive">
            <Diamond />
            Button
            <Diamond />
          </Button>

          <Button variant="link">
            <Diamond />
            Button
            <Diamond />
          </Button>
        </Example>

        <Example title="Button Sizes">
          <Button size="xs">
            <Diamond />
            Button
            <Diamond />
          </Button>
          <Button size="sm">
            <Diamond />
            Button
            <Diamond />
          </Button>
          <Button>
            <Diamond />
            Button
            <Diamond />
          </Button>
          <Button size="lg">
            <Diamond />
            Button
            <Diamond />
          </Button>

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
