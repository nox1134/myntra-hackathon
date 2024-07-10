import '../../../Create-muse.css';

const Header = () => {
    return (
      <header className="header">
        <div className="header-left">
          <img src="https://placehold.co/40x40" alt="logo" className="logo" />
        </div>
        <div className="header-right">
          <img src="https://placehold.co/40x40" alt="user avatar" className="avatar" />
        </div>
      </header>
    );
  };

  export default Header;