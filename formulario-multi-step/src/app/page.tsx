'use client'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputMask from 'react-input-mask'
import { useContext } from 'react'
import { FormContext } from '@/context/FormContext'
import { useRouter } from 'next/navigation'

const formSchema = zod.object({
  nome: zod.string().min(2, 'Digite seu nome'),
  telefone: zod
    .string()
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      'Digite seu numero de telefone corretamente',
    ),
  email: zod.string().email('Digite um email válido'),
})

type FormSchemaType = zod.infer<typeof formSchema>

export default function Home() {
  const { setFormContato } = useContext(FormContext)
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const { email, nome, telefone } = errors

  function handleForm(data: FormSchemaType) {
    setFormContato(data)
    router.push('/empresa')
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="nome"
        >
          Nome
        </label>
        <input
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="text"
          id="nome"
          {...register('nome')}
          placeholder="Como prefere ser chamado"
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
          htmlFor="telefone"
        >
          Telefone
        </label>
        <InputMask
          mask="(99) 99999-9999"
          alwaysShowMask={false}
          maskPlaceholder="#"
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="text"
          {...register('telefone')}
          id="telefone"
          placeholder="Digite seu número de WhatsApp"
        />
        {telefone && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {telefone.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="text-base font-bold leading-normal text-gray-400"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          {...register('email')}
          type="email"
          id="email"
          placeholder="Como prefere ser chamado"
        />
        {email && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {email.message}
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
