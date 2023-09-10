export const ADD_NOTIFICATION = 'Notification: add';
export const REMOVE_NOTIFICATION = 'Notification: remove';

export const addNotification = (data) => ({
  type: ADD_NOTIFICATION,
  payload: data
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION
});
