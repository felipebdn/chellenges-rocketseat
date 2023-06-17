import { ContatoTypes } from '@/app/contato/page'
import { Actions } from './actions'
import { produce } from 'immer'
import { FormEmpresaType } from '@/app/empresa/page'
import { ProjetoType } from '@/app/projeto/page'

export interface StateFormTypes {
  contato: ContatoTypes
  empresa: FormEmpresaType
  projeto: ProjetoType
}

export const initialState: StateFormTypes = {
  contato: {
    emailContato: '',
    nomeContato: '',
    telefoneContato: '',
  },
  empresa: {
    nome: '',
    qtdFuncionarios: '',
    sobre: '',
  },
  projeto: {
    objetivoProjeto: '',
  },
}

export function formReducer(
  state: StateFormTypes,
  action: Actions,
): StateFormTypes {
  switch (action.type) {
    case 'SUBMIT_CONTATO':
      return produce(state, (draft) => {
        action.payload && (draft.contato = action.payload)
      })
    case 'SUBMIT_EMPRESA':
      return produce(state, (draft) => {
        action.payload && (draft.empresa = action.payload)
      })
    case 'SUBMIT_PROJETO':
      return produce(state, (draft) => {
        action.payload && (draft.projeto = action.payload)
      })
  }
  return state
}
