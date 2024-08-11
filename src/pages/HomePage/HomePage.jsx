import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.container}>
      <HomePageHeader />
      <div className={css.leftHalf}>
        <div>
          <h1>Make Life Easier for the Family:</h1>
          <p>Find Babysitters Online for All Occasions</p>
          <button>Get started</button>
        </div>
      </div>
      <div className={css.rightHalf}>
        <div></div>
      </div>
    </div>
  );
}

export default HomePage;
