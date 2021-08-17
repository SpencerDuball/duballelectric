// Note: We `import type` specifically here, if we simply use `import`
// we will get a circular dependency build fail!
import type { ContextStateI, NotificationI } from "./context";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export type NotificationInfoI = Omit<NotificationI, "id">;

// define types
///////////////////////////////////////////////////////////////////
export type ActionType = "ADD_NOTIFICATION" | "REMOVE_NOTIFICATION";
export interface ActionI {
  type: ActionType;
  payload: any;
}
export interface AddNotificationActionI extends ActionI {
  type: "ADD_NOTIFICATION";
  payload: { notificationInfo: NotificationInfoI };
}
export interface RemoveNotificationActionI extends ActionI {
  type: "REMOVE_NOTIFICATION";
  payload: {
    id: string;
  };
}

// dispatch helpers
///////////////////////////////////////////////////////////////////
export const addNotification = (
  dispatch: React.Dispatch<AddNotificationActionI>,
  notificationInfo: NotificationInfoI
) =>
  dispatch({
    type: "ADD_NOTIFICATION",
    payload: {
      notificationInfo,
    },
  });

export const removeNotification = (
  dispatch: React.Dispatch<RemoveNotificationActionI>,
  id: string
) =>
  dispatch({
    type: "REMOVE_NOTIFICATION",
    payload: {
      id,
    },
  });

// create reducer
///////////////////////////////////////////////////////////////////
export const notificationSystemReducer = (
  state: ContextStateI,
  action: ActionI
) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.payload.notificationInfo,
            id: uuidv4(),
          },
        ],
      };
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
