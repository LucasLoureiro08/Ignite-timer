import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
  }
`

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
  &:disabled {
    opacity: 0.7;
    background-color: ${(props) => props.theme['green-500']};
    cursor: not-allowed;
  }
`
export const CountDownButton = styled(BaseCountDownButton)`
  cursor: pointer;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    background-color: ${(props) => props.theme['green-500']};
    cursor: not-allowed;
  }
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  cursor: pointer;
  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background: ${(props) => props.theme['red-700']};
  }
`
