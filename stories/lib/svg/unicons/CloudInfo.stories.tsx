import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudInfo, CloudInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudInfo",
  component: CloudInfo,
} as ComponentMeta<typeof CloudInfo>;

const Template: ComponentStory<typeof CloudInfo> = (args: CloudInfoPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudInfo {...args} />
    <CloudInfo {...args} fill="red.500" />
    <CloudInfo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
