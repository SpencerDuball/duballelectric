import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudShield, CloudShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudShield",
  component: CloudShield,
} as ComponentMeta<typeof CloudShield>;

const Template: ComponentStory<typeof CloudShield> = (
  args: CloudShieldPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudShield {...args} />
    <CloudShield {...args} fill="red.500" />
    <CloudShield {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
