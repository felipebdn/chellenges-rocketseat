'use client'
import { useContext } from 'react'
import { FormContext } from '@/context/formContext'
import { useRouter } from 'next/navigation'

export default function Success() {
  const router = useRouter()
  const { formState, step } = useContext(FormContext)

  if (step !== 4) {
    router.push('/contato')
  }

  return (
    <div>
      <h5 className="mb-4 text-xl font-bold text-purple-light">Seus dados</h5>
      <pre>{JSON.stringify(formState.contato, null, 2)}</pre>
      <pre>{JSON.stringify(formState.empresa, null, 2)}</pre>
      <pre>{JSON.stringify(formState.projeto, null, 2)}</pre>
    </div>
  )
}
