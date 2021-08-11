import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserCheck, UserCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserCheck",
  component: UserCheck,
} as ComponentMeta<typeof UserCheck>;

const Template: ComponentStory<typeof UserCheck> = (args: UserCheckPropsI) => (
  <Box display="flex" gap="20px">
    <UserCheck {...args} />
    <UserCheck {...args} fill="red.500" />
    <UserCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
