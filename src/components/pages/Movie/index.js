import { Link } from 'react-router-dom';
import { useMovie } from './hooks';
import { Button } from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { PropTypes } from 'prop-types';

const Bonjour = ({ name, loading }) => {
  return <p>Bonjour {loading ? '...' : name}</p>;
};

const Movie = () => {
  const { name, loading, userId } = useMovie();

  return (
    <>
      <h1>First Page ({userId})</h1>
      <Bonjour name={name} loading={loading} />
      <Link to={`/`}>
        <Button variant="contained" startIcon={<SettingsBackupRestoreIcon />}>
          Back
        </Button>
      </Link>
    </>
  );
};

export default Movie;

Bonjour.propTypes = {
  name: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

Bonjour.defaultProps = {
  name: ''
};
