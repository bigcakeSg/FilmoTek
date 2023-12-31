import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';
import { Skeleton } from '@mui/material';
import NoImg from '../../../../assets/noMovie.jpg';
import { useMoviePicture } from './hook';

const pictureHeight = 444;
const pictureWidth = 300;

const StyledMoviePicture = styled.div`
  position: absolute;
  height: ${pictureHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  z-index: 100;
  & img {
    box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
    border: solid 1px ${colorA};
    width: ${pictureWidth}px;
  }
  & .picture-skeleton {
    width: ${pictureWidth}px;
    height: ${pictureHeight}px;
  }
`;

const MoviePicture = ({ id, movieUrl, originalTitle, loading }) => {
  const { blobUrl, pictureLoading } = useMoviePicture(movieUrl, id, loading);

  return (
    <StyledMoviePicture>
      {loading || pictureLoading ? (
        <div className="picture-skeleton">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <img src={blobUrl || NoImg} alt={originalTitle} />
      )}
    </StyledMoviePicture>
  );
};

export default MoviePicture;

MoviePicture.propTypes = {
  id: PropTypes.string,
  movieUrl: PropTypes.string,
  originalTitle: PropTypes.string,
  loading: PropTypes.bool
};

MoviePicture.defaultProps = {
  movieInfos: {}
};
