import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pause, PausePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pause",
  component: Pause,
} as ComponentMeta<typeof Pause>;

const Template: ComponentStory<typeof Pause> = (args: PausePropsI) => (
  <Box display="flex" gap="20px">
    <Pause {...args} />
    <Pause {...args} fill="red.500" />
    <Pause {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
