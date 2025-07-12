import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettings } from '../redux/settingsSlice';
import './Footer.css';

const Footer = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  return (
    <footer className="footer">
      {status === 'loading' ? (
        <p>Loading footer...</p>
      ) : (
        <div className="footer-content">
          <div className="footer-brand">
            <h4>Address</h4>
            <p>{data?.address}</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: {data?.contact_mail}</p>
            <p>Inquiry: {data?.inquiry_mail}</p>
            <p>Phone: {data?.contact_no}</p>
          </div>
        </div>
      )}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {data?.company_name || 'Techerudite'} | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
