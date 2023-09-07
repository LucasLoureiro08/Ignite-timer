import { FormContainer, MinuteInput, TaskInput } from './styles'
import * as zod from 'zod'
import { useContext } from 'react'
import { CyclesContext } from '..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Nome do seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Estudar" />
        <option value="Cozinhar" />
        <option value="Limpar a Casa" />
        <option value="Jogar Video Games" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinuteInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
function zodResolversolver(
  newCycleFormValidationSchema: zod.ZodObject<
    { task: zod.ZodString; minutesAmount: zod.ZodNumber },
    'strip',
    zod.ZodTypeAny,
    { task: string; minutesAmount: number },
    { task: string; minutesAmount: number }
  >,
) {
  throw new Error('Function not implemented.')
}
