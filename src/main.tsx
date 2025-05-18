import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser';

emailjs.init('L2DkGjfmnyn-pOmed'); // Replace with your EmailJS public key

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
