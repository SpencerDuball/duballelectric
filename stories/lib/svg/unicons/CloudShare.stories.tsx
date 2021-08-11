import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudShare, CloudSharePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudShare",
  component: CloudShare,
} as ComponentMeta<typeof CloudShare>;

const Template: ComponentStory<typeof CloudShare> = (
  args: CloudSharePropsI
) => (
  <Box display="flex" gap="20px">
    <CloudShare {...args} />
    <CloudShare {...args} fill="red.500" />
    <CloudShare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
