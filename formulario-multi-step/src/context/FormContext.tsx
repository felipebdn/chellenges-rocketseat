'use client'
import { submitFormEmpresaAction } from '@/reducer/forms/actions'
import {
  ContatoTypes,
  EmpresaTypes,
  ProjetoTypes,
  StateFormTypes,
  formReducer,
  initialState,
} from '@/reducer/forms/reducer'
import { ReactNode, createContext, useReducer } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextType {
  stateForm: StateFormTypes
}

export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [stateForm, dispatch] = useReducer(formReducer, initialState)

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

  function handleSetFormContato(data: EmpresaTypes) {
    dispatch(submitFormEmpresaAction(data))
  }

  return (
    <FormContext.Provider value={{ stateForm }}>
      {children}
    </FormContext.Provider>
  )
}
