import { Search } from 'lucide-react'
import { ComponentProps } from 'react'

export interface InputProps {
  className: string
}

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      {...props}
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      {...props}
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    />
  )
}