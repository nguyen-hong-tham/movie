import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router'

export const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Header />
            <main className="flex-1 w-full">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
