import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ background: '#f0f0f0', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/users">사용자 목록</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;