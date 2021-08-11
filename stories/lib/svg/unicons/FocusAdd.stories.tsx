import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FocusAdd, FocusAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FocusAdd",
  component: FocusAdd,
} as ComponentMeta<typeof FocusAdd>;

const Template: ComponentStory<typeof FocusAdd> = (args: FocusAddPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FocusAdd {...args} />
    <FocusAdd {...args} fill="red.500" />
    <FocusAdd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
