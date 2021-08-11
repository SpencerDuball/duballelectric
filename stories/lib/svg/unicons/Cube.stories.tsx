import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Cube, CubePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Cube",
  component: Cube,
} as ComponentMeta<typeof Cube>;

const Template: ComponentStory<typeof Cube> = (args: CubePropsI) => (
  <Box display="flex" gap="20px">
    <Cube {...args} />
    <Cube {...args} fill="red.500" />
    <Cube {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
