import {
  NotificationType,
  NotificationI,
  ContextStateI,
  NotificationSystemContext,
  NotificationSystemProvider,
} from "./context";
import {
  NotificationInfoI,
  ActionType,
  ActionI,
  AddNotificationActionI,
  RemoveNotificationActionI,
  addNotification,
  removeNotification,
} from "./reducers";

export {
  NotificationSystemContext,
  NotificationSystemProvider,
  addNotification,
  removeNotification,
};

export type {
  NotificationType,
  NotificationI,
  ContextStateI,
  NotificationInfoI,
  ActionType,
  ActionI,
  AddNotificationActionI,
  RemoveNotificationActionI,
};
