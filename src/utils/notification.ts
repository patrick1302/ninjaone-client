import { Store } from 'react-notifications-component';

type NotificationType = 'success' | 'danger';
interface INotification {
  message: string;
  type: NotificationType;
}
export const displayNotification = ({ message, type }: INotification) => {
  Store.addNotification({
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};
