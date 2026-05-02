'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return null;
}
