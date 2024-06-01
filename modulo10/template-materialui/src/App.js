import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5e35b1',
    },
    secondary: {
      main: '#5e35b1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;
