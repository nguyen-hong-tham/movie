import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from '@/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

const client = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            gcTime: 30 * 60 * 1000, // 30 phút
            staleTime: 5 * 60 * 1000, // 5 phút
        },
    },
})

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <RouterProvider router={router} />
        <Toaster visibleToasts={3} closeButton richColors position="top-right" />
    </QueryClientProvider>
)
