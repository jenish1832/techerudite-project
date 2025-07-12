import './Header.css';

const Header = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header className="header">
      <div className="logo">Techerudite</div>
      <nav className="nav">
        <a onClick={() => scrollTo('hero')}>Home</a>
        <a onClick={() => scrollTo('about')}>About</a>
        <a onClick={() => scrollTo('blogs')}>Blogs</a>
        <a onClick={() => scrollTo('contact')} className="contact-btn">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
