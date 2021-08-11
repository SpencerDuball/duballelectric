import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Umbrella, UmbrellaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Umbrella",
  component: Umbrella,
} as ComponentMeta<typeof Umbrella>;

const Template: ComponentStory<typeof Umbrella> = (args: UmbrellaPropsI) => (
  <Box display="flex" gap="20px">
    <Umbrella {...args} />
    <Umbrella {...args} fill="red.500" />
    <Umbrella {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
