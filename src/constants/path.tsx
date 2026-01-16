// những path cần người dùng đăng nhập thì mới có thể truy cập đc
export const PRIVATE_PATH = {}

// những path không cần đăng nhập vẫn có thể truy cập đc
export const PUBLIC_PATH = {
    HOME: '/',
    MOVIE_DETAIL_PATTERN: '/phim/:maPhim',  // Pattern cho router
    MOVIE_DETAIL: (maPhim: number) => `/phim/${maPhim}`,  // Function cho Link
    SIGN_UP: '/sign-up',
}
