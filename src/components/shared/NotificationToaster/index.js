import { Alert, Slide, Snackbar } from '@mui/material';
import { useNotificationToaster } from './hook';

const TransitionRight = (props) => {
  return <Slide {...props} direction="right" />;
};

const NotificationToaster = () => {
  const { notificationConfig, handleCloseNotification } =
    useNotificationToaster();

  return (
    <Snackbar
      open={notificationConfig.open}
      TransitionComponent={TransitionRight}
      autoHideDuration={6000}
      onClose={handleCloseNotification}
    >
      <Alert
        onClose={handleCloseNotification}
        severity={notificationConfig.severity}
        sx={{ width: '100%' }}
      >
        {notificationConfig.message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationToaster;
