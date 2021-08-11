import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Rainbow, RainbowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Rainbow",
  component: Rainbow,
} as ComponentMeta<typeof Rainbow>;

const Template: ComponentStory<typeof Rainbow> = (args: RainbowPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Rainbow {...args} />
    <Rainbow {...args} fill="red.500" />
    <Rainbow {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
