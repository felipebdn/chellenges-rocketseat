import * as zod from 'zod'
import InputMask from 'react-input-mask'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormContext } from '@/context/formContext'
import { useContext } from 'react'

const contatoSchema = zod.object({
  nomeContato: zod.string().min(2, 'Digite seu nome'),
  telefoneContato: zod
    .string()
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      'Digite seu numero de telefone corretamente',
    ),
  emailContato: zod.string().email('Digite um email válido'),
})

export type ContatoTypes = zod.infer<typeof contatoSchema>

interface ContatoProps {
  handleFormContato: (data: ContatoTypes) => void
}

export function Contato({ handleFormContato }: ContatoProps) {
  const { step, handleStep } = useContext(FormContext)
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<ContatoTypes>({
    resolver: zodResolver(contatoSchema),
  })

  function submit(data: ContatoTypes) {
    handleFormContato(data)
    handleStep(step + 1)
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      aria-hidden={!(step === 1)}
      className="flex flex-col gap-4 aria-hidden:hidden"
    >
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
          {...register('nomeContato')}
          onBlur={() => trigger('nomeContato')}
          placeholder="Como prefere ser chamado"
        />
        {errors.nomeContato?.message && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {errors.nomeContato.message}
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
          {...register('telefoneContato')}
          onBlur={() => trigger('telefoneContato')}
          className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 text-base font-normal text-gray-400 outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-200 hover:border-purple-light focus:border-purple-light"
          type="text"
          id="telefone"
          placeholder="Digite seu número de WhatsApp"
        />
        {errors.telefoneContato?.message && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {errors.telefoneContato.message}
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
          type="email"
          id="email"
          {...register('emailContato')}
          onBlur={() => trigger('emailContato')}
          placeholder="Como prefere ser chamado"
        />
        {errors.emailContato?.message && (
          <div className="text-xs font-normal leading-tight text-error-color">
            {errors.emailContato.message}
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full justify-end">
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
