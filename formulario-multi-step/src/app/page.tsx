'use client'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Contato } from '@/components/contato/page'

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
  const formData = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
  })

  return (
    <div className="">
      <FormProvider {...formData}>
        <Contato />
      </FormProvider>
      {/* <Empresa /> */}
      {/* <Projeto /> */}
    </div>
  )
}
