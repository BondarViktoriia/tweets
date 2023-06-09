import {
  StartContainer,
  Logo,
  Follow,
  FollowText,
  InformContainer,
  SpinnerContainer,
  WaveButton,
} from './Home.styled';
import logo from '../../images/logo.svg';
import { CircleLoader } from 'react-spinners';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <StartContainer>
      <Logo src={logo} alt="logo" />
      <InformContainer>
        <div>
          <Follow>Follow</Follow>
          <FollowText>Use this app with your friends. </FollowText>
          <FollowText>
            Follow each other and stay always in conection.
          </FollowText>
        </div>

        <SpinnerContainer>
          <CircleLoader color="#ffffff" size={200} />
        </SpinnerContainer>
      </InformContainer>

      <NavLink to="/tweets">
        {' '}
        <WaveButton>TRY NOW</WaveButton>
      </NavLink>
    </StartContainer>
  );
};

export default Home;
