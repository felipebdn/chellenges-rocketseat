'use client'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { FormContext } from '@/context/FormContext'
import { useRouter } from 'next/navigation'

const formEmpresaSchema = zod.object({
  nome: zod.string().min(2, 'Digite o nome da empresa'),
  qtdFuncionarios: zod.string().min(1, 'Pelo menos um funcionário!'),
  sobre: zod.string().min(20, 'Diga um pouco sobre a empresa'),
})

type FormEmpresaType = zod.infer<typeof formEmpresaSchema>

export default function Empresa() {
  const { setFormEmpresa } = useContext(FormContext)
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormEmpresaType>({
    resolver: zodResolver(formEmpresaSchema),
  })

  const { nome, qtdFuncionarios, sobre } = errors

  function handleForm(data: FormEmpresaType) {
    setFormEmpresa(data)
    router.push('/projeto')
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="empresa"
        >
          Nome da empresa
        </label>
        <input
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="text"
          id="empresa"
          {...register('nome')}
          placeholder="Qual é o nome da empresa"
        />
        {nome && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {nome.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="funcionarios"
        >
          Número de funcionários
        </label>
        <input
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="number"
          {...register('qtdFuncionarios')}
          id="funcionarios"
          placeholder="Digite o número de colaboradores"
        />
        {qtdFuncionarios && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {qtdFuncionarios.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="sobre"
        >
          Sobre seu negócio
        </label>
        <textarea
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          {...register('sobre')}
          id="sobre"
          placeholder="Fale um pouco sobre seus produtos ou serviços"
        />
        {sobre && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {sobre.message}
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full justify-end">
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
