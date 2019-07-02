import Notification from '../../Entity/Notification';

export interface NotificationState {
    notifications: Array<Notification>;
    error: String | null;
    loading: Boolean;
    loaded: Boolean;
}
