import { useContext } from "react";
import { Box, BoxProps, IconButton } from "@chakra-ui/react";
import { CheckCircle, TimesCircle, InfoCircle, Times } from "lib/svg/unicons";
import {
  NotificationSystemContext,
  NotificationI,
  removeNotification,
} from "context/notification-system";
import { filterProps } from "utility";
import { DefaultHeaderHeight } from "./Header";

// notification
////////////////////////////////////////////////////////////////////////
export interface NotificationPropsI
  extends Omit<BoxProps, "id" | "title">,
    NotificationI {
  closeFn: () => void;
}

export const Notification = (props: NotificationPropsI) => {
  const bgColor = {
    SUCCESS: "green.200",
    ERROR: "red.200",
    INFO: "blue.200",
  };

  const Icon = (props: BoxProps & { type: NotificationI["type"] }) => {
    switch (props.type) {
      case "SUCCESS":
        return (
          <CheckCircle
            fill="green.500"
            {...filterProps({ props, filterOut: ["type"] })}
          />
        );
      case "ERROR":
        return (
          <TimesCircle
            fill="red.500"
            {...filterProps({ props, filterOut: ["type"] })}
          />
        );
      default:
        return (
          <InfoCircle
            fill="blue.500"
            {...filterProps({ props, filterOut: ["type"] })}
          />
        );
    }
  };

  return (
    <Box
      as="div"
      w="100%"
      maxW="600px"
      borderRadius="0.375em"
      py="0.75em"
      px="1em"
      id={props.id}
      display="grid"
      gridColumnGap="1em"
      gridTemplateColumns="max-content 1fr max-content"
      gridTemplateRows="1fr 1fr"
      bg={bgColor[props.type]}
      boxShadow="lg"
      {...filterProps({
        props,
        filterOut: ["id", "type", "title", "description", "closeFn"],
      })}
    >
      <Icon
        h="1.25em"
        w="1.25em"
        alignSelf="center"
        gridRow="1 / span 2"
        gridColumn="1 / span 1"
        type={props.type}
      />
      <Box
        as="h1"
        lineHeight="1.5em"
        fontSize="1em"
        fontWeight="700"
        color="white"
        gridColumn="2 / span 1"
        gridRow="1 / span 1"
      >
        {props.title}
      </Box>
      <Box
        as="p"
        lineHeight="1em"
        fontSize="1em"
        color="white"
        gridColumn="2 / span 1"
        gridRow="2 / span 1"
      >
        {props.description}
      </Box>
      <IconButton
        gridColumn="3 / span 1"
        gridRow="1 / span 1"
        size="xs"
        aria-label="Close notification"
        onClick={props.closeFn}
        bg="none"
        _hover={{ bg: "whiteAlpha.400" }}
        _active={{ bg: "whiteAlpha.600" }}
        icon={<Times fill="white" />}
      />
    </Box>
  );
};

// notification system
////////////////////////////////////////////////////////////////////////
export type PlacementType =
  | "top-start"
  | "top"
  | "top-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end";

export interface NotificationSystemPropsI extends BoxProps {
  placement: PlacementType;
}

export const NotificationSystem = (props: NotificationSystemPropsI) => {
  const { state, dispatch } = useContext(NotificationSystemContext);

  return (
    <Box
      as="div"
      position="fixed"
      top={
        props.placement.includes("top")
          ? `calc(0.25em + ${DefaultHeaderHeight})`
          : undefined
      }
      bottom={props.placement.includes("bottom") ? 0 : undefined}
      pointerEvents="none"
      h="max-content"
      w="100%"
      zIndex="sticky"
      px={{ base: "0.625em", lg: "1em" }}
      display="grid"
      justifyItems="center"
      {...filterProps({ props, filterOut: ["placement"] })}
    >
      <Box
        as="div"
        maxW="container.xl"
        w="100%"
        display="grid"
        gridRowGap="0.25em"
        gridAutoRows="max-content"
        justifyItems={props.placement.includes("end") ? "end" : "start"}
        fontSize={{ base: "0.75em", sm: "0.85em", md: "1em" }}
        pointerEvents="none"
        sx={{ "& > *": { pointerEvents: "all" } }}
      >
        {state.notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            type={notification.type}
            title={notification.title}
            description={notification.description}
            closeFn={() => removeNotification(dispatch, notification.id)}
          />
        ))}
      </Box>
    </Box>
  );
};
