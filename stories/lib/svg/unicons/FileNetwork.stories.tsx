import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileNetwork, FileNetworkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileNetwork",
  component: FileNetwork,
} as ComponentMeta<typeof FileNetwork>;

const Template: ComponentStory<typeof FileNetwork> = (
  args: FileNetworkPropsI
) => (
  <Box display="flex" gap="20px">
    <FileNetwork {...args} />
    <FileNetwork {...args} fill="red.500" />
    <FileNetwork {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
