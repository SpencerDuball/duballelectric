import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserNurse, UserNursePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserNurse",
  component: UserNurse,
} as ComponentMeta<typeof UserNurse>;

const Template: ComponentStory<typeof UserNurse> = (args: UserNursePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <UserNurse {...args} />
    <UserNurse {...args} fill="red.500" />
    <UserNurse {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
