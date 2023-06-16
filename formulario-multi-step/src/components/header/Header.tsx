'use client'
import { ChevronRight } from 'lucide-react'
import { Step } from './components/Step'
export function Header() {
  return (
    <header className="mb-8 flex items-center justify-around gap-8 border-b border-gray-100 pb-8">
      <Step name="Contato" currentStep={1} />
      <ChevronRight size={20} className="text-gray-400" strokeWidth={3} />
      <Step name="Empresa" currentStep={2} />
      <ChevronRight size={20} className="text-gray-400" strokeWidth={3} />
      <Step name="Projeto" currentStep={3} />
    </header>
  )
}
