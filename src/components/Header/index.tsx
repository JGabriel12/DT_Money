import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoIMG from '../../assets/logo.svg'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIMG} alt="" />
        
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}