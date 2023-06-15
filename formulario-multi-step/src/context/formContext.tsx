'use client'
import { ReactNode, createContext, useState } from 'react'

interface FormContextType {
  step: number
  handleStep: (n: number) => void
}

export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1)

  function handleStep(n: number) {
    setStep(n)
  }

  return (
    <FormContext.Provider value={{ step, handleStep }}>
      {children}
    </FormContext.Provider>
  )
}
