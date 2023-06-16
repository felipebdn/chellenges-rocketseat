'use client'
import { FormContext } from '@/context/formContext'
import { Check } from 'lucide-react'
import { useContext } from 'react'

interface StepProps {
  currentStep: number
  name: string
}

export function Step({ currentStep, name }: StepProps) {
  const { step } = useContext(FormContext)
  console.log(step)

  return (
    <div className="flex items-center gap-2">
      <div
        aria-selected={step === currentStep}
        aria-checked={currentStep < step}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold leading-none text-gray-200 aria-checked:bg-sucess-color aria-checked:text-gray-100 aria-selected:bg-purple-mid aria-selected:text-white"
      >
        {currentStep < step ? <Check size={16} /> : currentStep}
      </div>
      <span
        aria-selected={step === currentStep}
        aria-checked={currentStep < step}
        className="text-base font-bold leading-normal text-gray-200 aria-checked:text-gray-400 aria-selected:text-gray-400"
      >
        {name}
      </span>
    </div>
  )
}
