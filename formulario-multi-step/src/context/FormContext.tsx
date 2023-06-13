'use client'
import { ReactNode, createContext, useState } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface ContatoTypes {
  nome: string
  telefone: string
  email: string
}
interface EmpresaTypes {
  nome: string
  qtdFuncionarios: string
  sobre: string
}
interface FormContextType {
  setFormContato: (data: ContatoTypes) => void
  setFormEmpresa: (data: EmpresaTypes) => void
  contato: ContatoTypes
  empresa: EmpresaTypes
}
export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [contato, setContato] = useState({} as ContatoTypes)
  const [empresa, setEmpresa] = useState({} as EmpresaTypes)

  function setFormContato(data: ContatoTypes) {
    setContato(data)
  }
  function setFormEmpresa(data: EmpresaTypes) {
    setEmpresa(data)
  }

  return (
    <FormContext.Provider
      value={{ setFormEmpresa, empresa, setFormContato, contato }}
    >
      {children}
    </FormContext.Provider>
  )
}
