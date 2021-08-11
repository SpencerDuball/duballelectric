import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Multiply, MultiplyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Multiply",
  component: Multiply,
} as ComponentMeta<typeof Multiply>;

const Template: ComponentStory<typeof Multiply> = (args: MultiplyPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Multiply {...args} />
    <Multiply {...args} fill="red.500" />
    <Multiply {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
