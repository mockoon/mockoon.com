'use client';

import { useEffect, useState } from 'react';

export const useHoneypotFieldName = () => {
  const [honeypotFieldName, setHoneypotFieldName] = useState('honeypot');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHoneypotFieldName(
      [
        'work_address',
        'work_phone',
        'work_email',
        'work_fax',
        'work_details',
        'business_address',
        'business_phone',
        'business_email',
        'business_contact',
        'business_info',
        'business_details'
      ][Math.floor(Math.random() * 11)]
    );
  }, []);

  return { honeypotFieldName, mounted };
};
