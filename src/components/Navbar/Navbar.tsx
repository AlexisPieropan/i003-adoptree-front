import { useEffect, useRef, useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MdOutlineLightMode, MdKeyboardArrowDown, MdOutlineLogout, MdOutlineSpaceDashboard } from 'react-icons/md';
import { useLanguage } from '../../LanguageContext/LanguageContext';
import Logo from '../../assets/adoptree 1.png';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../store/features/userSlice';
import { RootState } from '../../types/types';
// import { io } from "socket.io-client"; // Comentado si no se usa
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language } = useLanguage();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const currentClickRef = useRef<EventTarget | null>(null);

  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowNotifications = (event: React.MouseEvent<HTMLElement>) => {
    currentClickRef.current = event.target;
    // Puedes implementar la lógica para mostrar las notificaciones aquí
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth/login');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header py-4 xl:px-[200px] md:px-[60px] mobile:px-[30px] bg-white ${scrollPosition > 0 ? 'scrolled' : ''}`}>
      <div className="flex items-center">
        <div>
          <a href="/">
            <img className="w-[60px] 4xl:w-[80px]" src={Logo} alt="Logo de Adoptree" />
          </a>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i id="menu-icon" className="icon">&#9776;</i>
          <i id="close-icon" className="icon">&#10005;</i>
        </label>
        <nav className="navbar">
          <a className="text-sm 4xl:text-[20px]" href="/about">
            {language === 'es' ? 'Sobre nosotros' : 'About Us'}
          </a>
          <a className="text-sm 4xl:text-[20px]" href="/adopta-un-arbol">
            {language === 'es' ? 'Adoptar' : 'Adopt'}
          </a>
          <a className="text-sm 4xl:text-[20px]" href="/impacto-ambiental">
            {language === 'es' ? 'Impacto' : 'Impact'}
          </a>
          <a className="text-sm 4xl:text-[20px]" href="/fincas">
            {language === 'es' ? 'Fincas' : 'Farms'}
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <div className="hidden md:flex md:items-center active:text-[#00bf62]">
          <div className="flex items-center gap-[5px]">
            {!user && (
              <div className="flex items-center gap-[5px]">
                <LoginIcon className="text-[#05264ebf] text-base font-light" />
                <Link to="/auth/login" className="text-[#05264E] mobile:font-[500] mobile:text-[1.1rem] desktop:font-normal desktop:text-base 4xl:text-[20px]">
                  {language === 'es' ? 'Inicia sesión' : 'Login'}
                </Link>
              </div>
            )}
            <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
              {language === 'es' ? 'Adopta ahora' : 'Adopt now'}
            </button>

            {user && (
              <div className="md:flex items-center mobile:hidden ">
                <div onClick={handleShowModal} className="p-[6px] bg-white border border-gray-300 rounded-full cursor-pointer">
                  <PersonIcon className="text-[#4BAF47] text[20px]" />
                </div>
                <div onClick={handleShowNotifications} className="p-[6px] bg-white border border-gray-300 rounded-full ml-2 cursor-pointer">
                  <NotificationsIcon className="text-[#4BAF47] text[20px]" />
                </div>
                {showModal && (
                  <div className="absolute md:top-[3.8rem] desktop:top-[4.1rem] bg-white gap-4 md:right-[96px] desktop:right-[230px] p-5 rounded shadow-md" ref={modalRef}>
                    <div>
                      <ul className="flex flex-col gap-3">
                        <li onClick={handleCloseModal} className="flex justify-between">
                          <Link to="" className="text-[#05264E] flex items-center gap-2">
                            <MdOutlineLightMode className="text-base text-[#05264E]" />{' '}
                            {language === 'es' ? 'Tema: Modo claro' : 'Theme: Light mode'}
                          </Link>
                          <MdKeyboardArrowDown className="text-base text-[#05264E]" />
                        </li>
                        <li onClick={handleCloseModal} className="flex items-center gap-2">
                          <MdOutlineSpaceDashboard className="text-[#05264E] text-base" />
                          <Link to="" className="text-[#05264E]">
                            {language === 'es' ? 'Panel de control' : 'Dashboard'}
                          </Link>
                        </li>
                        {user && (
                          <li onClick={handleLogout} className="flex items-center gap-2">
                            <MdOutlineLogout className="text-[#05264E] text-base" />
                            <span className="text-[#05264E]">{language === 'es' ? 'Cerrar sesión' : 'Logout'}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

