import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';
import { useCastingThumbnail } from './hook';
import NoImg from '../../../../assets/noName.jpg';

const StyledMovieCasting = styled.div`
  display: flex;
  flex-wrap: wrap;
  & .cast__item {
    margin: 5px;
    padding: 5px;
    font-size: 14px;
    ${(props) => (props.principal ? '' : 'display: flex; width: 300px;')}
    & .casting__name {
      font-weight: 700;
      margin-top: 10px;
    }
  }
  & .casting__image {
    width: ${(props) => (props.principal ? '200px' : '100px')};
    height: ${(props) => (props.principal ? '250px' : '125px')};
    ${(props) => (props.principal ? '' : 'margin-right: 10px;')}
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: solid 3px ${colorA};
    background-color: #cccccc;
  }
`;

const CastingThumbnail = ({ cast }) => {
  const { castBlob } = useCastingThumbnail(cast);

  return (
    <div className="cast__item">
      <div
        className="casting__image"
        style={{
          backgroundImage: `url(${castBlob || NoImg})`
        }}
      ></div>
      <div>
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
        // <div className="cast__item" key={`cast-${cast.name.id}`}>
        //   <div
        //     className="casting__image"
        //     style={{
        //       backgroundImage: `url(${cast.name.picture?.url})`
        //     }}
        //   ></div>
        //   <div>
        //     <div className="casting__name">{cast.name.text}</div>
        //     <div className="casting__character">
        //       {cast.characters.map((char) => char).join(' / ')}
        //     </div>
        //   </div>
        // </div>
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
