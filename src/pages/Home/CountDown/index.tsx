import { useContext, useEffect } from 'react'
import { CountDownContainer, Colon } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '..'

export function CountDown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minuteAmount * 60 : 0
  // conversão de segundos totais inseridos pelo usuário subtraindo do total de segundos que se passaram
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  // método para arredondar para baixo a quantidade de minutos após a conversão de segundos para minutos
  const minutesAmount = Math.floor(currentSeconds / 60)
  // transformando segundos atuais em minutos
  const secondsAmount = currentSeconds % 60
  // usando o método String para transformar os minutos e segundos em strings para usar o método padstart, dizendo quantos caractéres serão mostrados, e caso não seja mostrado dois caractéres, um 0 será adicionado na frente da string
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifferenceToFinish = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        if (secondsDifferenceToFinish >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifferenceToFinish)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ])
  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Colon>:</Colon>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
