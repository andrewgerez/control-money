import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field)
              return (
                <S.TransactionType onValueChange={field.onChange} value={field.value}>
                  <S.TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </S.TransactionTypeButton>

                  <S.TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </S.TransactionTypeButton>
                </S.TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

      </S.Content>
    </Dialog.Portal>
  )
}