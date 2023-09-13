import { PropTypes } from 'prop-types';

import Vhs from '../../../../assets/VHS_logo.svg';
import Ld from '../../../../assets/Laser_Disc.svg';
import Dvd from '../../../../assets/DVD_logo.svg';
import Bd from '../../../../assets/Blu-ray_Disc.svg';
import Uhd from '../../../../assets/4k-fullhd.svg';
import styled from 'styled-components';
import { useMovieVideoSupports } from './hook';
import { colorALight } from '../../../../utils/colors';

const StyledVideoSupports = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 50px 0px;
  & .support {
    &__video {
      position: relative;
      border: none;
      padding: 0;
      cursor: pointer;
      &--none {
        opacity: 0.1;
      }
      &--saving {
        opacity: 0;
      }
    }
    &__saving {
      height: 25px;
      width: 100%;
      opacity: 0.8;
      background-color: ${colorALight};
      position: absolute;
    }
  }
  & .saving__progress {
    position: absolute;
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 0;
  }
`;

const MovieVideoSupports = ({ movieId }) => {
  const {
    isVhs,
    isLd,
    isDvd,
    isBd,
    isUhd,
    handleChangeVideoSupport,
    isSavingVhs,
    isSavingLd,
    isSavingDvd,
    isSavingBd,
    isSavingUhd
  } = useMovieVideoSupports(movieId);

  return (
    <StyledVideoSupports>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('vhs')}
      >
        <img
          className={`${isVhs ? '' : 'support__video--none'}${
            isSavingVhs ? ' support__video--saving' : ''
          }`}
          src={Vhs}
          height="25"
          alt="VHS"
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('ld')}
      >
        <img
          className={`${isLd ? '' : 'support__video--none'}${
            isSavingLd ? ' support__video--saving' : ''
          }`}
          src={Ld}
          height="25"
          alt="Laserdisc"
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('dvd')}
      >
        <img
          className={`${isDvd ? '' : 'support__video--none'}${
            isSavingDvd ? ' support__video--saving' : ''
          }`}
          src={Dvd}
          height="25"
          alt="DVD"
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('bd')}
      >
        <img
          className={`${isBd ? '' : 'support__video--none'}${
            isSavingBd ? ' support__video--saving' : ''
          }`}
          src={Bd}
          height="25"
          alt="Blu-Ray"
        />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('uhd')}
      >
        <img
          className={`${isUhd ? '' : 'support__video--none'}${
            isSavingUhd ? ' support__video--saving' : ''
          }`}
          src={Uhd}
          height="25"
          alt="Blu-Ray UHD"
        />
      </button>
    </StyledVideoSupports>
  );
};

export default MovieVideoSupports;

MovieVideoSupports.propTypes = {
  movieId: PropTypes.string
};
