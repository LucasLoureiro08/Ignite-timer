import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer, CountDownButton, StopCountDownButton } from './styles'
import { useContext } from 'react'
import * as zod from 'zod'
import { NewCycleForm } from './NewCycleForm'
import { CountDown } from './CountDown'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContext'
// Forma Padrão de Tipar o data
// interface NewCycleFormData {
//   task: string
//   minutesAmout: number
// }

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ser de no mínimo 5 minutos')
    .max(60, 'O ciclo deve ser de no máximo 60 minutos'),
})
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  // adicionado a biblioteca date-fns e usando a função differenceInSeconds para comparar os segundos entre a Data Atual (new Date()) e o startDate do ciclo ativo e ter um resultado preciso de segundo em segundo.
  // conversão de minutos em segundos
  // a função handleCreateNewCycle está chamando a função do contexto createNewCycle apenas para deixar a função reset do lado de fora do contexto. Para que o código do contexto fique isolado de bibliotecas externas.

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : (
          <CountDownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </CountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
export { CyclesContext }
