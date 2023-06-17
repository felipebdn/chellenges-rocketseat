'use client'
import { ContatoTypes } from '@/app/contato/page'
import { FormEmpresaType } from '@/app/empresa/page'
import { ProjetoType } from '@/app/projeto/page'
import {
  submitFormContatoAction,
  submitFormEmpresaAction,
  submitFormProjetoAction,
} from '@/reducer/forms/actions'
import {
  StateFormTypes,
  formReducer,
  initialState,
} from '@/reducer/forms/reducer'
import { ReactNode, createContext, useReducer, useState } from 'react'

interface FormContextType {
  step: number
  formState: StateFormTypes
  handleStep: (n: number) => void
  handleFormContato: (data: ContatoTypes) => void
  handleFormEmpresa: (data: FormEmpresaType) => void
  handleFormProjeto: (data: ProjetoType) => void
}

export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1)

  const [formState, dispatch] = useReducer(formReducer, initialState)

  function handleFormContato(data: ContatoTypes) {
    dispatch(submitFormContatoAction(data))
  }
  function handleFormEmpresa(data: FormEmpresaType) {
    dispatch(submitFormEmpresaAction(data))
  }
  function handleFormProjeto(data: ProjetoType) {
    dispatch(submitFormProjetoAction(data))
  }

  function handleStep(n: number) {
    setStep(n)
  }

  return (
    <FormContext.Provider
      value={{
        formState,
        step,
        handleStep,
        handleFormContato,
        handleFormEmpresa,
        handleFormProjeto,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
