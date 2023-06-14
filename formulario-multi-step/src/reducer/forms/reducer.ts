import { Actions } from './actions'

export interface ContatoTypes {
  nome: string
  telefone: string
  email: string
}
export interface EmpresaTypes {
  nome: string
  qtdFuncionarios: string
  sobre: string
}
export interface ProjetoTypes {
  objetivo: string
}

export interface StateFormTypes {
  contato: ContatoTypes
  empresa: EmpresaTypes
  projeto: ProjetoTypes
}

export const initialState: StateFormTypes = {
  contato: {
    email: '',
    nome: '',
    telefone: '',
  },
  empresa: {
    nome: '',
    qtdFuncionarios: '',
    sobre: '',
  },
  projeto: {
    objetivo: '',
  },
}

export function formReducer(
  state: StateFormTypes,
  action: Actions,
): StateFormTypes {
  switch (action.type) {
    case 'SUBMIT_CONTATO':
      return {
        ...state,
      }
  }
  return state
}
