import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PrintSlash, PrintSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PrintSlash",
  component: PrintSlash,
} as ComponentMeta<typeof PrintSlash>;

const Template: ComponentStory<typeof PrintSlash> = (
  args: PrintSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <PrintSlash {...args} />
    <PrintSlash {...args} fill="red.500" />
    <PrintSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
