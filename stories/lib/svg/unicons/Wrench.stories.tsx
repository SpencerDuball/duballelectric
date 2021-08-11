import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Wrench, WrenchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Wrench",
  component: Wrench,
} as ComponentMeta<typeof Wrench>;

const Template: ComponentStory<typeof Wrench> = (args: WrenchPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Wrench {...args} />
    <Wrench {...args} fill="red.500" />
    <Wrench {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
