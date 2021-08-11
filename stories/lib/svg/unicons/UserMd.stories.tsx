import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UserMd, UserMdPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserMd",
  component: UserMd,
} as ComponentMeta<typeof UserMd>;

const Template: ComponentStory<typeof UserMd> = (args: UserMdPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <UserMd {...args} />
    <UserMd {...args} fill="red.500" />
    <UserMd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
