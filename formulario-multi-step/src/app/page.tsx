'use client'
import * as zod from 'zod'
import { Contato, ContatoTypes } from '@/components/contato/page'
import { useState } from 'react'
import { Projeto, ProjetoType } from '@/components/projeto/page'

const formSchema = zod.object({
  nomeContato: zod.string().min(2, 'Digite seu nome'),
  telefoneContato: zod
    .string()
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      'Digite seu numero de telefone corretamente',
    ),
  emailContato: zod.string().email('Digite um email válido'),
  nomeEmpresa: zod.string().min(2, 'Digite o nome da empresa'),
  qtdFuncionariosEmpresa: zod.string().min(1, 'Pelo menos um funcionário!'),
  sobreEmpresa: zod.string().min(20, 'Diga um pouco sobre a empresa'),
  objetivoProjeto: zod.string().min(20, 'No mínimo 20 caracteres'),
})

export type FormTypes = zod.infer<typeof formSchema>

export default function Home() {
  const [step, setStep] = useState(1)

  const [formContato, setFormContato] = useState({} as ContatoTypes)
  const [formProjeto, setFormEmpresa] = useState({} as ProjetoType)
  const [formProjeto, setFormProjeto] = useState({} as ProjetoType)

  function handleFormContato(data: ContatoTypes) {
    setFormContato(data)
  }
  function handleFormEmpresa(data: ProjetoType) {
    setFormEmpresa(data)
  }
  function handleFormProjeto(data: ProjetoType) {
    setFormProjeto(data)
  }

  function handleStep(num: number) {
    setStep(num)
  }

  return (
    <div className="">
      <Contato
        step={step}
        handleStep={handleStep}
        handleFormContato={handleFormContato}
      />
      {/* <Empresa /> */}
      <Projeto
        step={step}
        handleStep={handleStep}
        handleFormProjeto={handleFormProjeto}
      />
    </div>
  )
}
