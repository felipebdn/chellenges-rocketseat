import { ContatoTypes, EmpresaTypes, ProjetoTypes } from './reducer'

interface submitContatoAction {
  type: 'SUBMIT_CONTATO'
  payload?: ContatoTypes
}
interface submitEmpresaAction {
  type: 'SUBMIT_EMPRESA'
  payload?: EmpresaTypes
}
interface submitProjetoAction {
  type: 'SUBMIT_PROJETO'
  payload?: ProjetoTypes
}

export type Actions =
  | submitContatoAction
  | submitEmpresaAction
  | submitProjetoAction

export function submitFormContatoAction(data: ContatoTypes): Actions {
  return {
    type: 'SUBMIT_CONTATO',
    payload: data,
  }
}
export function submitFormEmpresaAction(data: EmpresaTypes): Actions {
  return {
    type: 'SUBMIT_EMPRESA',
    payload: data,
  }
}
export function submitFormProjetoAction(data: ProjetoTypes): Actions {
  return {
    type: 'SUBMIT_PROJETO',
    payload: data,
  }
}
