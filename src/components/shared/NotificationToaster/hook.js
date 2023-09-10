import { useDispatch, useSelector } from 'react-redux';
import { selectNotificationStore } from '../../../store/notification/selectors';
import { removeNotification } from '../../../store/notification/actions';

export const useNotificationToaster = () => {
  const dispatch = useDispatch();

  const notificationConfig = useSelector(selectNotificationStore);

  const handleCloseNotification = () => {
    dispatch(removeNotification());
  };

  return { notificationConfig, handleCloseNotification };
};
