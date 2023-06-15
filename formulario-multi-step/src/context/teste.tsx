import React, { useReducer } from 'react'

interface ContatoTypes {
  nome: string
  telefone: string
  email: string
}

interface StateFormTypes {
  contato: ContatoTypes
}

const initialState: StateFormTypes = {
  contato: {
    email: '',
    nome: '',
    telefone: '',
  },
}

type Actions = {
  type: 'SUBMIT_CONTATO'
  payload?: ContatoTypes
}

function submitFormContatoAction(data: ContatoTypes): Actions {
  return {
    type: 'SUBMIT_CONTATO',
    payload: data,
  }
}

function formReducer(state: StateFormTypes, action: Actions): StateFormTypes {
  switch (action.type) {
    case 'SUBMIT_CONTATO':
      return {
        ...state,
        contato: action.payload || state.contato,
      }
    default:
      return state
  }
}

const FormContato: React.FC = () => {
  const [stateForm, dispatch] = useReducer(formReducer, initialState)

  const handleSetFormContato = (data: ContatoTypes) => {
    dispatch(submitFormContatoAction(data))
  }

  // Restante do componente e renderização

  return <div>{/* Conteúdo do componente */}</div>
}

export default FormContato
