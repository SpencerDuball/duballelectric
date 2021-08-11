import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { VirusSlash, VirusSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VirusSlash",
  component: VirusSlash,
} as ComponentMeta<typeof VirusSlash>;

const Template: ComponentStory<typeof VirusSlash> = (
  args: VirusSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <VirusSlash {...args} />
    <VirusSlash {...args} fill="red.500" />
    <VirusSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
