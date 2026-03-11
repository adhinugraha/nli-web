'use client'
import { usePathname } from "next/navigation";
import { Suspense, FC, ReactNode } from "react"

interface AppProps {
  children: ReactNode;
}

const App: FC<AppProps> = ({ children }) => {
  const path: string = usePathname();
  const strReplace: string = path.replaceAll('/', '-');
  const slug: string = strReplace.slice(0, -1);

  return (
    <main id="app" className={`w-100 page${path === '/' ? '-landing' : slug + ''}`} data-page={`page${path === '/' ? '-landing' : slug}`}>
      <Suspense>
          {children}
      </Suspense>
    </main>
  )
}

export default App