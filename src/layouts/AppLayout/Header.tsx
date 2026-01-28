import { APP_CONFIG } from '@/config'
import { PUBLIC_PATH } from '@/constants'
import { Link,NavLink, useNavigate } from 'react-router'
import { Button } from '@/core/ui'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/store'
import { useQueryUserInfoByAccessToken } from '@/shared/hooks'
import { logout } from '@/store/auth.slice'
import { ProfileModal } from '@/features/profile/ProfileModal'
import { ChevronDown, LogOut } from 'lucide-react'

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
    const dispatch = useAppDispatch();

    const{isAuthenticated} = useAppSelector(state => state.auth)

    const {data:userInfo} = useQueryUserInfoByAccessToken()
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleLogout = () => {
      dispatch(logout());
      setIsDropdownOpen(false);
      navigate(PUBLIC_PATH.HOME);
    };

    console.log('data',userInfo)
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

                <div className="relative">
                  {
                    isAuthenticated ? (
                      <div className="relative">
                        <button 
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className='font-bold text-lg flex items-center gap-2 hover:text-red-500 p-2 rounded'
                        >
                          hi, {userInfo?.hoTen}
                          <ChevronDown size={18} />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            {/* <button
                              onClick={() => {
                                setIsProfileModalOpen(true);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2 border-b"
                            >
                              <User size={18} />
                              <span>Thông Tin Cá Nhân</span>
                            </button> */}
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-2 text-red-500"
                            >
                              <LogOut size={18} />
                              <span>Đăng Xuất</span>
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                         <Button onClick={() => navigate(PUBLIC_PATH.SIGN_UP)}>Đăng Ký</Button>

                    )
                  }

                </div>
            </div>
        </header>

        {/* Profile Modal */}
        <ProfileModal 
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
        />
      </div>

    )
}

