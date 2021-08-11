import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SignalAlt, SignalAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignalAlt",
  component: SignalAlt,
} as ComponentMeta<typeof SignalAlt>;

const Template: ComponentStory<typeof SignalAlt> = (args: SignalAltPropsI) => (
  <Box display="flex" gap="20px">
    <SignalAlt {...args} />
    <SignalAlt {...args} fill="red.500" />
    <SignalAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
