import reactLogo from '@/assets/react.svg'
import { useState } from 'react'
import './index.css'

export function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-slate-50">
      <div className="hover:scale-105 transition-transform">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-16 w-16 animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-slate-900">Vite + React</h1>

      <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white shadow-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          type="button"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          count is {count}
        </button>

        <p className="text-slate-600">
          Edit{' '}
          <code className="px-2 py-1 rounded bg-slate-100 font-mono">
            src/app/app.tsx
          </code>{' '}
          and save to test HMR
        </p>
      </div>

      <p className="text-sm text-slate-500">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-sm text-slate-500">
        Hi from encrypted env:{' '}
        {import.meta.env.VITE_HELLO}
      </p>
    </div>
  )
}
