import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex w={'100vw'} h={'100vh'} alignItems={'center'} justify={'center'}>
      <Flex
        as={'form'}
        w={'100%'}
        maxWidth={360}
        bgColor={'gray.800'}
        p={'8'}
        borderRadius={8}
        flexDir={'column'}
      >
        <Stack>

          <Input type={'email'} name='email' label='E-mail'/>
          <Input type={'password'} name='password' label='Senha'/>
          
        </Stack>

        <Button type={'submit'} mt={6} size={'lg'} colorScheme={'pink'}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
