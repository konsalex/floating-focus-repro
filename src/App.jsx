import { useState } from "react";
import { FloatingFocusManager, useFloating, useClick, useInteractions } from '@floating-ui/react';
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
  ]);

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button data-testid="trigger" ref={refs.setReference} {...getReferenceProps()}>
          Open Tip
        </button>
        {isOpen && (
          <FloatingFocusManager context={context}>
            <div ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}>
              Elemenet rendered
              <button data-testid="test" onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </FloatingFocusManager>
        )}
      </div>
    </div>
  );
}

export default App;
