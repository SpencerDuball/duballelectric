import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Medal, MedalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Medal",
  component: Medal,
} as ComponentMeta<typeof Medal>;

const Template: ComponentStory<typeof Medal> = (args: MedalPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Medal {...args} />
    <Medal {...args} fill="red.500" />
    <Medal {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
