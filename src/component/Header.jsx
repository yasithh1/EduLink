
import'./Header.css'


function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="header-logo">MyApp</a>
        <nav className="header-nav">
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/self-challenges">Self Challenges</a></li>
            <li><a href="/bookmark">Bookmark</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


export default Header