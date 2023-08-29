import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



import { Provider } from 'react-redux'; // Import the Provider

import "./axios/interceptors/interceptors"


//props
import theme from './theme';
import { SignUpProvider } from './pages/account/contexts/Sign-up.context';
import MultiStepProvider from './pages/account2/context/StepContext';
import MultiStepContext from './pages/account2/context/StepContext';


//COLOR MODE CONTEXT
// import { ColorModeContext } from './theme/ColorTheme';

import Box from '@mui/material/Box/Box';



import IconButton from '@mui/material/IconButton';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import store from './Redux/store';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode Games
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    
        <MyApp />
      
  );
}






















const queryClient = new QueryClient()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MultiStepProvider> */}
    {/* <ThemeProvider theme={theme}> */}
      {/* <SignUpProvider> */}
    {/* <App  theme={theme}/> */}

<Provider store={store}>

    <ColorModeContext.Provider >
      <ThemeProvider theme={theme}>
 
      <QueryClientProvider client={queryClient}>

        <App />

    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    </ThemeProvider>
    </ColorModeContext.Provider>


</Provider>

    {/* </SignUpProvider> */}
    {/* </ThemeProvider> */}
    {/* </MultiStepProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
