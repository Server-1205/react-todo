import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from "./components/ThemeProvider/ui/ThemeProvider";
import { appRouter } from "./config/routes/routes";
import { SearchProvider } from "./context/Search/SearchProvider.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <SearchProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={appRouter} />
          </QueryClientProvider>
        </SearchProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}
