import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { OutgoingCall, OutgoingCallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/OutgoingCall",
  component: OutgoingCall,
} as ComponentMeta<typeof OutgoingCall>;

const Template: ComponentStory<typeof OutgoingCall> = (
  args: OutgoingCallPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <OutgoingCall {...args} />
    <OutgoingCall {...args} fill="red.500" />
    <OutgoingCall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
