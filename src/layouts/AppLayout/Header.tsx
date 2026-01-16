import { APP_CONFIG } from '@/config'
import { PUBLIC_PATH } from '@/constants'
import { Link,NavLink, useNavigate } from 'react-router'
import { Button } from '@/core/ui'
import { use } from 'react'
const navItems = [
  {
    title: 'Trang Chủ ',
    path: PUBLIC_PATH.HOME,
  },
  {
    title: 'Lịch Chiếu',
    path:'/lich-chieu', 
  },
  {
    title: 'Rạp Phim',
    path: '/rap-phim',
  },
  
] as const
export const Header = () => {
    const navigate = useNavigate();
    return (
      <div className='shadow w-full'>
        <header
            className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8"
            style={{
                height: APP_CONFIG.headerHeight,
            }}
        >
            <div className="container mx-auto w-full flex items-center justify-between">
                <div>
                    <Link className="text-4xl font-bold text-primary" to={PUBLIC_PATH.HOME}>
                        MOVIE
                    </Link>
                </div>

               <nav className="flex items-center gap-15 [&>a]:text-lg [&>a]:p-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-red-500 font-semibold border-b border-red-500'
                                    : 'hover:text-red-500'
                            }
                            to={item.path}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </nav>

                <div>
                  <Button onClick={() => navigate(PUBLIC_PATH.SIGN_UP)}>Đăng Ký</Button>
                </div>
            </div>
        </header>
      </div>

    )
}

