import {Box, Center, Input} from "@chakra-ui/react";
import {ButtonSubmit} from "./ButtonSubmit/ButtonSubmit";
import {useState} from "react";

interface ICard {
  title: string,
}

export const Card = ({title }: ICard) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleEmail = (event:any)=>{
        setEmail(event.target.value)
    }

    const handleSenha = (event:any)=>{
        setSenha(event.target.value)

    }

  return(
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
              <Center>
                  <h1>{title}</h1>
              </Center>
              <Input placeholder="email" mb='10px' onChange={handleEmail}/>
              <Input  type='password' placeholder="password" onChange={handleSenha} />
              <Center>
                  <ButtonSubmit  email={email} senha={senha}/>
              </Center>
          </Box>
      </Box>
  )
}