import { RouterProvider } from 'react-router/dom';
import { appRouter } from './config/routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './components/ThemeProvider/ui/ThemeProvider';

const queryClient = new QueryClient();

export default function App() {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={appRouter} />
            </QueryClientProvider>
        </ThemeProvider>
    );
}
