import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Shield, ShieldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Shield",
  component: Shield,
} as ComponentMeta<typeof Shield>;

const Template: ComponentStory<typeof Shield> = (args: ShieldPropsI) => (
  <Box display="flex" gap="20px">
    <Shield {...args} />
    <Shield {...args} fill="red.500" />
    <Shield {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
