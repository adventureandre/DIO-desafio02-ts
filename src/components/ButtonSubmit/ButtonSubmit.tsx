import {Button} from "@chakra-ui/react";
import {login} from "../../services/login";
interface buttonSubmitProps {
    email:string;
    senha:string;
}
export const ButtonSubmit = ({email,senha}:buttonSubmitProps) => {

    return(
        <Button onClick={()=>login(email,senha)} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Button
        </Button>
    )
}