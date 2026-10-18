import { useEffect } from 'react';

const TARGET_URL = 'https://mpasm.netlify.app/';

export default function App() {
  useEffect(() => {
    window.location.replace(TARGET_URL);
  }, []);

  return null;
}
