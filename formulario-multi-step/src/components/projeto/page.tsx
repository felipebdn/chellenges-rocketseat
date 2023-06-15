import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const projetoSchema = zod.object({
  objetivoProjeto: zod.string().min(20, 'No mínimo 20 caracteres'),
})

export type ProjetoType = zod.infer<typeof projetoSchema>

interface projetoProps {
  step: number
  handleStep: (num: number) => void
  handleFormProjeto: (data: ProjetoType) => void
}

export function Projeto({ handleFormProjeto, handleStep, step }: projetoProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProjetoType>({
    resolver: zodResolver(projetoSchema),
  })

  function submit(data: ProjetoType) {}

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
        <button className="rounded-md border border-purple-mid bg-transparent px-8 py-4 text-base font-bold uppercase leading-normal text-purple-mid transition-colors hover:bg-purple-light hover:text-white">
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
