import { ContatoTypes } from '@/app/contato/page'
import { FormEmpresaType } from '@/app/empresa/page'
import { ProjetoType } from '@/app/projeto/page'

interface submitContatoAction {
  type: 'SUBMIT_CONTATO'
  payload?: ContatoTypes
}
interface submitEmpresaAction {
  type: 'SUBMIT_EMPRESA'
  payload?: FormEmpresaType
}
interface submitProjetoAction {
  type: 'SUBMIT_PROJETO'
  payload?: ProjetoType
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
export function submitFormEmpresaAction(data: FormEmpresaType): Actions {
  return {
    type: 'SUBMIT_EMPRESA',
    payload: data,
  }
}
export function submitFormProjetoAction(data: ProjetoType): Actions {
  return {
    type: 'SUBMIT_PROJETO',
    payload: data,
  }
}
