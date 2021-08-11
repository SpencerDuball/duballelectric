import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Signal, SignalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Signal",
  component: Signal,
} as ComponentMeta<typeof Signal>;

const Template: ComponentStory<typeof Signal> = (args: SignalPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Signal {...args} />
    <Signal {...args} fill="red.500" />
    <Signal {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
