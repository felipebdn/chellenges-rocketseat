'use client'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { FormContext } from '@/context/FormContext'

const formSchema = zod.object({
  objetivo: zod.string().min(20, 'No mínimo 20 caracteres'),
})

type FormTypes = zod.infer<typeof formSchema>

export default function Projeto() {
  const { setFormProjeto, verifyRouterByForm } = useContext(FormContext)
  verifyRouterByForm()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
  })

  const { objetivo } = errors

  function handleForm(data: FormTypes) {
    setFormProjeto(data)
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="projetoTextArea"
        >
          Objetivos do projeto
        </label>
        <textarea
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          id="projetoTextArea"
          {...register('objetivo')}
          placeholder="Descreva quais os objetivos desse projeto"
        />
        {objetivo && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {objetivo.message}
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full justify-between">
        <button className="rounded-md border border-purple-mid bg-transparent px-8 py-4 text-base font-bold uppercase leading-normal text-purple-mid transition-colors hover:bg-purple-light hover:text-white">
          Voltar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit rounded-md bg-purple-mid px-8 py-4 text-base font-bold uppercase leading-normal text-white"
        >
          Continuar
        </button>
      </div>
    </form>
  )
}
