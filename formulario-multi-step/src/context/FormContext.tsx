'use client'
import { useRouter } from 'next/navigation'
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

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
interface ProjetoTypes {
  objetivo: string
}

interface StateFormTypes {
  contato: ContatoTypes
  empresa: EmpresaTypes
  projeto: ProjetoTypes
}

interface FormContextType {
  setFormContato: (data: ContatoTypes) => void
  setFormEmpresa: (data: EmpresaTypes) => void
  setFormProjeto: (data: ProjetoTypes) => void
  verifyRouterByForm: () => void
  contato: ContatoTypes
  empresa: EmpresaTypes
  projeto: ProjetoTypes
}
export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [stateForm, dispatch] = useReducer(
    (state: StateFormTypes, action: any) => {},
    [contato: {},empresa: {}, projeto: {}],
  )

  const [contato, setContato] = useState({} as ContatoTypes)
  const [empresa, setEmpresa] = useState({} as EmpresaTypes)
  const [projeto, setProjeto] = useState({} as ProjetoTypes)

  const router = useRouter()

  function setFormContato(data: ContatoTypes) {
    setContato(data)
  }
  function setFormEmpresa(data: EmpresaTypes) {
    setEmpresa(data)
  }
  function setFormProjeto(data: ProjetoTypes) {
    setProjeto(data)
  }

  function verifyRouterByForm() {
    if (!contato.email) {
      return router.push('/')
    }
    if (!empresa.nome) {
      return router.push('/empresa')
    }
    if (!empresa.nome) {
      return router.push('/projeto')
    }
  }

  console.log(contato, empresa, projeto)

  return (
    <FormContext.Provider
      value={{
        verifyRouterByForm,
        projeto,
        setFormProjeto,
        setFormEmpresa,
        empresa,
        setFormContato,
        contato,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
