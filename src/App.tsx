import {ChakraProvider,} from '@chakra-ui/react';
import {Header} from "./components/Header/Header";
import {Card} from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Header/>
     <Card title='Faça login'/>
    </ChakraProvider>
  );
}

export default App;
