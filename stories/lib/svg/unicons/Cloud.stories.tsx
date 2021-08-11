import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Cloud, CloudPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Cloud",
  component: Cloud,
} as ComponentMeta<typeof Cloud>;

const Template: ComponentStory<typeof Cloud> = (args: CloudPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Cloud {...args} />
    <Cloud {...args} fill="red.500" />
    <Cloud {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
