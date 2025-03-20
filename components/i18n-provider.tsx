'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function I18nProvider({ children }: { children: ReactNode }) {
  // Optional: Add language synchronization logic here
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}