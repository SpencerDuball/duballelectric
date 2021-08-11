import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserMinus, UserMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserMinus",
  component: UserMinus,
} as ComponentMeta<typeof UserMinus>;

const Template: ComponentStory<typeof UserMinus> = (args: UserMinusPropsI) => (
  <Box display="flex" gap="20px">
    <UserMinus {...args} />
    <UserMinus {...args} fill="red.500" />
    <UserMinus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
