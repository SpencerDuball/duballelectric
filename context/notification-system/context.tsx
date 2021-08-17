import React, { useReducer } from "react";
import { notificationSystemReducer, ActionI } from "./reducers";

// define types
///////////////////////////////////////////////////////////////////

// NotificationI
export type NotificationType = "INFO" | "ERROR" | "SUCCESS";
export interface NotificationI {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
}

// ContextStateI
export interface ContextStateI {
  notifications: NotificationI[];
}

// create context
///////////////////////////////////////////////////////////////////
const initialState: ContextStateI = { notifications: [] };
export const NotificationSystemContext = React.createContext<{
  state: ContextStateI;
  dispatch: React.Dispatch<ActionI>;
}>({ state: initialState, dispatch: () => null });
NotificationSystemContext.displayName = "NotificationsSystemContext";

export const NotificationSystemProvider = (props: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(notificationSystemReducer, initialState);

  return (
    <NotificationSystemContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NotificationSystemContext.Provider>
  );
};
