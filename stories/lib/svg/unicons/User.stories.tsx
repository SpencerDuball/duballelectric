import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { User, UserPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/User",
  component: User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args: UserPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <User {...args} />
    <User {...args} fill="red.500" />
    <User {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
