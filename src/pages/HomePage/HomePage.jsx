import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

import css from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/nannies');
  };

  useEffect(() => {
    document.body.classList.remove('app');
    document.body.classList.add('home');
  }, []);

  return (
    <div className={css.container}>
      <HomePageHeader />
      <div className={css.leftHalf}>
        <div className={css.heroBox}>
          <h1 className={css.heading}>Make Life Easier for the Family:</h1>
          <p className={css.text}>Find Babysitters Online for All Occasions</p>
          <Button className={css.button} onClick={handleGetStarted}>
            <span>Get started</span>
            <span className={css.icon}>
              <Icon width={18} height={24} name="arrow" />
            </span>
          </Button>
        </div>
      </div>
      <div className={css.rightHalf}>
        <div className={css.expBox}>
          <div className={css.checkDiv}>
            <Icon width={20} height={15} name="check" />
          </div>
          <div>
            <p className={css.expText}>Experienced nannies</p>
            <p className={css.expCount}>15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
