import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShieldSlash, ShieldSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShieldSlash",
  component: ShieldSlash,
} as ComponentMeta<typeof ShieldSlash>;

const Template: ComponentStory<typeof ShieldSlash> = (
  args: ShieldSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ShieldSlash {...args} />
    <ShieldSlash {...args} fill="red.500" />
    <ShieldSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
