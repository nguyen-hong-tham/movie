import { Link } from 'react-router'
import { PUBLIC_PATH } from '@/constants'

const footerLinks = [
  {
    title: 'Về chúng tôi',
    links: [
      { label: 'Giới thiệu', path: '/gioi-thieu' },
      { label: 'Tuyên bố riêng tư', path: '/privacy' },
      { label: 'Điều khoản sử dụng', path: '/terms' },
    ]
  },
  {
    title: 'Liên kết nhanh',
    links: [
      { label: 'Trang chủ', path: PUBLIC_PATH.HOME },
      { label: 'Lịch chiếu', path: '/lich-chieu' },
      { label: 'Đặt vé', path: '/dat-ve' },
    ]
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Liên hệ chúng tôi', path: '/contact' },
      { label: 'Câu hỏi thường gặp', path: '/faq' },
      { label: 'Hỗ trợ khách hàng', path: '/support' },
    ]
  }
]

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Top */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__logo">MOVIE</h3>
            <p className="footer__desc">
              Nền tảng xem phim trực tuyến hàng đầu. Cung cấp hàng ngàn bộ phim chất lượng cao.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="footer__column">
              <h4 className="footer__title">{section.title}</h4>
              <ul className="footer__list">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.path} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Movie. All rights reserved.
          </p>

          <div className="footer__policies">
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Điều khoản dịch vụ</a>
            <a href="#">Cài đặt Cookie</a>
          </div>
        </div>

      </div>
    </footer>
  )
}


