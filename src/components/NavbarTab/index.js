import '../../css/navbar.css';

const NavbarTab = ({ label, url }) => {
  return (
    <div className="nav-tab">
      <a className="nav-link" href={url} target={'_blank'}>
        {label}
      </a>
    </div>
  );
};

export default NavbarTab;
