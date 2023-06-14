'use client'
import {
  ContatoTypes,
  EmpresaTypes,
  ProjetoTypes,
  formReducer,
  initialState,
} from '@/reducer/forms/reducer'
import { ReactNode, createContext, useReducer } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextType {
  contato: ContatoTypes
  empresa: EmpresaTypes
  projeto: ProjetoTypes
}
export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [stateForm, dispatch] = useReducer(formReducer, initialState)

  const { contato, empresa, projeto } = stateForm

  // function verifyRouterByForm() {
  //   if (!contato.email) {
  //     return router.push('/')
  //   }
  //   if (!empresa.nome) {
  //     return router.push('/empresa')
  //   }
  //   if (!empresa.nome) {
  //     return router.push('/projeto')
  //   }
  // }

  return (
    <FormContext.Provider value={{ contato, empresa, projeto }}>
      {children}
    </FormContext.Provider>
  )
}
