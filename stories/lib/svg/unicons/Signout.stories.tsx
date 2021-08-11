import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Signout, SignoutPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Signout",
  component: Signout,
} as ComponentMeta<typeof Signout>;

const Template: ComponentStory<typeof Signout> = (args: SignoutPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Signout {...args} />
    <Signout {...args} fill="red.500" />
    <Signout {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
