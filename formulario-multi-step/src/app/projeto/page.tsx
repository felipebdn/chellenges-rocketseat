'use client'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormContext } from '@/context/formContext'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

const projetoSchema = zod.object({
  objetivoProjeto: zod.string().min(20, 'No mínimo 20 caracteres'),
})

export type ProjetoType = zod.infer<typeof projetoSchema>

export default function Projeto() {
  const router = useRouter()
  const { step, handleStep, handleFormProjeto, formState } =
    useContext(FormContext)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProjetoType>({
    resolver: zodResolver(projetoSchema),
    defaultValues: formState.projeto,
  })

  function submit(data: ProjetoType) {
    handleFormProjeto(data)
    handleStep(step + 1)
    router.push('/success')
  }
  function backForm() {
    handleStep(step - 1)
    router.back()
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
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
          {...register('objetivoProjeto')}
          placeholder="Descreva quais os objetivos desse projeto"
        />
        {errors.objetivoProjeto?.message && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {errors.objetivoProjeto.message}
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full justify-between">
        <button
          onClick={backForm}
          className="rounded-md border border-purple-mid bg-transparent px-8 py-4 text-base font-bold uppercase leading-normal text-purple-mid transition-colors hover:bg-purple-light hover:text-white"
        >
          Voltar
        </button>
        <button
          type="submit"
          className="w-fit rounded-md bg-purple-mid px-8 py-4 text-base font-bold uppercase leading-normal text-white"
        >
          Continuar
        </button>
      </div>
    </form>
  )
}
