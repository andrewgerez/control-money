import * as S from './styles'
import LogoImage from '../../assets/icon-money.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={LogoImage} alt="" />
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>

      </S.HeaderContent>
    </S.HeaderContainer>
  )
}