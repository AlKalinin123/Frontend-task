// src/Dashboard.tsx
import { useState, useEffect, useCallback } from 'react';

const worker = new Worker(new URL('./calculation.worker.js', import.meta.url), { type: 'module' });

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clickCount, setClickCount] = useState<number>(0);

  useEffect(() => {
    worker.onmessage = (event: MessageEvent<number>) => {
      setD(event.data);
      setIsLoading(false);
    };

    worker.onerror = (error) => {
      console.error("Web Worker error:", error);
      setIsLoading(false);
    };

    worker.postMessage('start');

    return () => {
      worker.terminate();
    };
  }, []);

  const handleButtonClick = useCallback(() => {
    setClickCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Dashboard Performance Demo</h1>

      {isLoading ? (
        <p>Calculating large sum... (UI should remain responsive)</p>
      ) : (
        <p>Calculated Sum: {d}</p>
      )}

      <hr />

      <h2>UI Responsiveness Test</h2>
      <p>Click the button below while "Calculating..." is displayed. The counter should update immediately, demonstrating that the UI is not blocked.</p>
      <button onClick={handleButtonClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Click me! (Current Clicks: {clickCount})
      </button>

      <p style={{ marginTop: '20px', color: '#888' }}>
        * Run Lighthouse after the page loads to see the improved "Total Blocking Time".
      </p>
    </div>
  );
}