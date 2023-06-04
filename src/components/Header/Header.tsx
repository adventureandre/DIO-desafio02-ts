//import './Header.css'
import {Center, Heading} from "@chakra-ui/react";

export const Header  = () => {
  return(
    <Center className='header' background='#9413dc'>
      <Heading as='h1' color="#fff" py='15px'>Dio Bank</Heading>
    </Center>
  )
}
