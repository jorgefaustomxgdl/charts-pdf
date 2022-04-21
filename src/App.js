import logo from './logo.svg';
import './App.css';
import { BuildPdf } from './reports/BuildPdf';
import { Button, Container } from '@mui/material';
import ChartLine from './chart/ChartLine';

function App() {
  
  return (
     <Container>
        <ChartLine />
        <br />
        <Button onClick={BuildPdf}>Generar PDF</Button>
     </Container>
  );
}

export default App;
