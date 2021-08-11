import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Apps, AppsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Apps",
  component: Apps,
} as ComponentMeta<typeof Apps>;

const Template: ComponentStory<typeof Apps> = (args: AppsPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Apps {...args} />
    <Apps {...args} fill="red.500" />
    <Apps {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
