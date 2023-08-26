import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';
import { Skeleton } from '@mui/material';

const StyledMoviePicture = styled.div`
  position: absolute;
  & img {
    box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
    border: solid 1px ${colorA};
    width: 250px;
  }
  & .picture-skeleton {
    width: 250px;
    height: 385px;
  }
`;

const MoviePicture = ({ movieInfos, loading }) => {
  return (
    <StyledMoviePicture>
      {loading ? (
        <div className="picture-skeleton">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <img
          src={movieInfos?.primaryImage?.url}
          alt={movieInfos?.primaryImage?.caption?.plainText}
        />
      )}
    </StyledMoviePicture>
  );
};

export default MoviePicture;

MoviePicture.propTypes = {
  movieInfos: PropTypes.object.isRequired,
  loading: PropTypes.bool
};
