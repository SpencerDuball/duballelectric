import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bolt, BoltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bolt",
  component: Bolt,
} as ComponentMeta<typeof Bolt>;

const Template: ComponentStory<typeof Bolt> = (args: BoltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Bolt {...args} />
    <Bolt {...args} fill="red.500" />
    <Bolt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
