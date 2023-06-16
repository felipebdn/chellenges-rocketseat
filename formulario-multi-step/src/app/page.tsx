'use client'
import { useContext, useState } from 'react'
import { Contato, ContatoTypes } from '@/components/contato/page'
import { Projeto, ProjetoType } from '@/components/projeto/page'
import { Empresa, FormEmpresaType } from '@/components/empresa/page'
import { FormContext } from '@/context/formContext'

export default function Home() {
  const { step } = useContext(FormContext)
  const [formContato, setFormContato] = useState({} as ContatoTypes)
  const [formEmpresa, setFormEmpresa] = useState({} as FormEmpresaType)
  const [formProjeto, setFormProjeto] = useState({} as ProjetoType)

  console.log(step)

  function handleFormContato(data: ContatoTypes) {
    setFormContato(data)
  }
  function handleFormEmpresa(data: FormEmpresaType) {
    setFormEmpresa(data)
  }
  function handleFormProjeto(data: ProjetoType) {
    setFormProjeto(data)
  }

  return (
    <>
      {step === 1 && <Contato handleFormContato={handleFormContato} />}
      {step === 2 && <Empresa handleFormEmpresa={handleFormEmpresa} />}
      {step === 3 && <Projeto handleFormProjeto={handleFormProjeto} />}
      {step === 4 && (
        <div>
          <h5 className="mb-4 text-xl font-bold text-purple-light">
            Seus dados
          </h5>
          <pre>{JSON.stringify(formContato, null, 2)}</pre>
          <pre>{JSON.stringify(formEmpresa, null, 2)}</pre>
          <pre>{JSON.stringify(formProjeto, null, 2)}</pre>
        </div>
      )}
    </>
  )
}
