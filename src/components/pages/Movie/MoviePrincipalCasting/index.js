import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';

const StyledMoviePrincipalCasting = styled.div`
  display: flex;
  flex-wrap: wrap;
  & .cast__item {
    margin: 5px;
    padding: 5px;
    font-size: 14px;
    & .casting__name {
      font-weight: 700;
      margin-top: 10px;
    }
  }
  & .casting__image {
    width: 200px;
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: solid 3px ${colorA};
    background-color: #cccccc;
  }
`;

const MoviePrincipalCasting = ({ casting }) => {
  return (
    <StyledMoviePrincipalCasting>
      {casting.map((cast) => (
        <div className="cast__item" key={`cast-${cast.name.id}`}>
          <div
            className="casting__image"
            style={{
              backgroundImage: `url(${cast.name.primaryImage.url})`
            }}
          ></div>
          <div className="casting__name">{cast.name.nameText.text}</div>
          <div className="casting__character">
            {cast.characters.map((char) => char.name).join(' / ')}
          </div>
        </div>
      ))}
    </StyledMoviePrincipalCasting>
  );
};

export default MoviePrincipalCasting;

MoviePrincipalCasting.propTypes = {
  casting: PropTypes.array.isRequired
};
