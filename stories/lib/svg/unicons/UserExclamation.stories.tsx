import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserExclamation, UserExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserExclamation",
  component: UserExclamation,
} as ComponentMeta<typeof UserExclamation>;

const Template: ComponentStory<typeof UserExclamation> = (
  args: UserExclamationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <UserExclamation {...args} />
    <UserExclamation {...args} fill="red.500" />
    <UserExclamation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
