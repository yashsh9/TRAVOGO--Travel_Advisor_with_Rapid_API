// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

// Create a theme instance
const theme = createTheme({
    // Customize your theme here if needed
});

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

