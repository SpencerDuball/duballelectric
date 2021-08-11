import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ShieldPlus, ShieldPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShieldPlus",
  component: ShieldPlus,
} as ComponentMeta<typeof ShieldPlus>;

const Template: ComponentStory<typeof ShieldPlus> = (
  args: ShieldPlusPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ShieldPlus {...args} />
    <ShieldPlus {...args} fill="red.500" />
    <ShieldPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
