import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { IncomingCall, IncomingCallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/IncomingCall",
  component: IncomingCall,
} as ComponentMeta<typeof IncomingCall>;

const Template: ComponentStory<typeof IncomingCall> = (
  args: IncomingCallPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <IncomingCall {...args} />
    <IncomingCall {...args} fill="red.500" />
    <IncomingCall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
