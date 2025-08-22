import PushNotificationIOS from '@react-native-community/push-notification-ios';

export async function initLocalNotifications() {
  await PushNotificationIOS.requestPermissions();
}

export function notifyNow(title: string, body: string, data?: Record<string, any>) {
  PushNotificationIOS.addNotificationRequest({
    id: String(Date.now()),
    title,
    body,
    userInfo: data ?? {},
  });
}

export function scheduleIn(seconds: number, title: string, body: string, data?: Record<string, any>) {
  const fire = new Date(Date.now() + Math.max(0, Math.floor(seconds)) * 1000);
  PushNotificationIOS.addNotificationRequest({
    id: String(Date.now()),
    title,
    body,
    fireDate: fire,          
    userInfo: data ?? {},
  });
}

export function cancelAll() {
  PushNotificationIOS.removeAllPendingNotificationRequests();
  PushNotificationIOS.removeAllDeliveredNotifications();
}
