'use client'

import { AppContextProvider } from "@/helpers/context/AppContext"
import React, { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps): React.ReactNode {
  return (
    <AppContextProvider>
      {children}
    </AppContextProvider>
  )
}