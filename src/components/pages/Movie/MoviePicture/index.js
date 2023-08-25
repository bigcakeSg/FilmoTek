import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';

const StyledMoviePicture = styled.div`
  position: absolute;
  & img {
    box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
    border: solid 1px ${colorA};
    width: 250px;
  }
`;

const MoviePicture = ({ movieInfos }) => {
  return (
    <StyledMoviePicture>
      <img
        src={movieInfos.primaryImage.url}
        alt={movieInfos.primaryImage.caption.plainText}
      />
    </StyledMoviePicture>
  );
};

export default MoviePicture;

MoviePicture.propTypes = {
  movieInfos: PropTypes.object.isRequired
};
