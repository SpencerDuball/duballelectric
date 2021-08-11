import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserPlus, UserPlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserPlus",
  component: UserPlus,
} as ComponentMeta<typeof UserPlus>;

const Template: ComponentStory<typeof UserPlus> = (args: UserPlusPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <UserPlus {...args} />
    <UserPlus {...args} fill="red.500" />
    <UserPlus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
