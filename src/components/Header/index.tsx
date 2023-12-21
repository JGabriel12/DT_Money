import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoIMG from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIMG} alt="" />
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
           <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>       

          <NewTransactionModal />

        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  )
}