import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';

const StyledMovieExtendedCasting = styled.div`
  display: flex;
  flex-wrap: wrap;
  & .cast__item {
    margin: 5px;
    padding: 5px;
    font-size: 14px;
    display: flex;
    width: 300px;
    & .casting__name {
      font-weight: 700;
      margin-top: 10px;
    }
  }
  & .casting__image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: solid 3px ${colorA};
    background-color: #cccccc;
  }
`;

const MovieExtendedCasting = ({ casting }) => {
  return (
    <StyledMovieExtendedCasting>
      {casting.map((cast) => (
        <div className="cast__item" key={`cast-${cast.name.id}`}>
          <div
            className="casting__image"
            style={{
              backgroundImage: `url(${cast.name.primaryImage?.url})`
            }}
          ></div>
          <div>
            <div className="casting__name">{cast.name.nameText.text}</div>
            <div className="casting__character">
              {cast.characters.map((char) => char.name).join(' / ')}
            </div>
          </div>
        </div>
      ))}
    </StyledMovieExtendedCasting>
  );
};

export default MovieExtendedCasting;

MovieExtendedCasting.propTypes = {
  casting: PropTypes.array.isRequired
};
