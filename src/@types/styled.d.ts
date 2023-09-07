import 'styled-components'
import { defaultTheme } from '../styles/default'

// Themetype está armazenando os tipos declarados de defaultTheme. Isso é uma funcionalidade automática do Typescript. O TheType agora possui armazenado em sua variável todos a tipagem que existe em defaultTheme.
type ThemeType = typeof defaultTheme

// O declare module está criando uma tipagem para o módulo styled-components. Sempre que você importar o styled-components dentro da aplicação, ele pegará toda a tipagem declarada aqui. Por isso é necessário importar o styled-components, caso contrário, esta função estaria criando uma nova tipagem, e no caso, ela está apenas subscrevendo.
declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
