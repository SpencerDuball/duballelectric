import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MinusPath, MinusPathPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MinusPath",
  component: MinusPath,
} as ComponentMeta<typeof MinusPath>;

const Template: ComponentStory<typeof MinusPath> = (args: MinusPathPropsI) => (
  <Box display="flex" gap="20px">
    <MinusPath {...args} />
    <MinusPath {...args} fill="red.500" />
    <MinusPath {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
