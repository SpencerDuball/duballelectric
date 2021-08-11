import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { UsersAlt, UsersAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UsersAlt",
  component: UsersAlt,
} as ComponentMeta<typeof UsersAlt>;

const Template: ComponentStory<typeof UsersAlt> = (args: UsersAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <UsersAlt {...args} />
    <UsersAlt {...args} fill="red.500" />
    <UsersAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
