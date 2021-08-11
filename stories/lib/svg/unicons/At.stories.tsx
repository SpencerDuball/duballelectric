import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { At, AtPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/At",
  component: At,
} as ComponentMeta<typeof At>;

const Template: ComponentStory<typeof At> = (args: AtPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <At {...args} />
    <At {...args} fill="red.500" />
    <At {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
