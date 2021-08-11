import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Squint, SquintPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Squint",
  component: Squint,
} as ComponentMeta<typeof Squint>;

const Template: ComponentStory<typeof Squint> = (args: SquintPropsI) => (
  <Box display="flex" gap="20px">
    <Squint {...args} />
    <Squint {...args} fill="red.500" />
    <Squint {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
