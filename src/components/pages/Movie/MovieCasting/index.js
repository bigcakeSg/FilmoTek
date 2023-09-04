import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';
import NoImg from '../../../../assets/noName.jpg';

const principalWidth = 200;
const extendedWidth = 100;
const principalHeight = 250;
const extendedHeight = 125;

const StyledMovieCasting = styled.div`
  display: flex;
  flex-wrap: wrap;
  & .cast__item {
    margin: 5px;
    padding: 5px;
    font-size: 14px;
    ${(props) => (props.principal ? '' : 'display: flex; width: 300px;')}
    & .casting {
      &__infos {
        ${(props) =>
          props.principal
            ? `margin-top: 10px; width: ${principalWidth}px;`
            : 'margin-left: 10px;'}
      }
      &__name {
        font-weight: 700;
      }
      &__image-container {
        position: relative;
        width: ${(props) =>
          props.principal ? `${principalWidth}px` : `${extendedWidth}px`};
        height: ${(props) =>
          props.principal ? `${principalHeight}px` : `${extendedHeight}px`};
      }
      &__image {
        position: absolute;
        width: ${(props) =>
          props.principal ? `${principalWidth}px` : `${extendedWidth}px`};
        height: ${(props) =>
          props.principal ? `${principalHeight}px` : `${extendedHeight}px`};
        ${(props) => (props.principal ? '' : 'margin-right: 10px;')}
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: solid 3px ${colorA};
      }
    }
  }
`;

const CastingThumbnail = ({ cast }) => {
  return (
    <div className="cast__item">
      <div className="casting__image-container">
        <div
          className="casting__image casting__no-picture"
          style={{
            backgroundImage: `url(${NoImg})`
          }}
        ></div>
        <div
          className="casting__image casting__with-picture"
          style={{
            backgroundImage: `url(${cast?.name?.picture?.url})`
          }}
        ></div>
      </div>
      <div className="casting__infos">
        <div className="casting__name">{cast.name.text}</div>
        <div className="casting__character">
          {cast.characters.map((char) => char).join(' / ')}
        </div>
      </div>
    </div>
  );
};

CastingThumbnail.propTypes = {
  cast: PropTypes.object
};

const MovieCasting = ({ casting, principal }) => {
  return (
    <StyledMovieCasting principal={principal}>
      {casting.map((cast) => (
        <CastingThumbnail cast={cast} key={`cast-${cast.name.id}`} />
      ))}
    </StyledMovieCasting>
  );
};

export default MovieCasting;

MovieCasting.propTypes = {
  casting: PropTypes.array.isRequired,
  principal: PropTypes.bool
};

MovieCasting.defaultProps = {
  casting: []
};
