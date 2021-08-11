import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { KeyboardHide, KeyboardHidePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeyboardHide",
  component: KeyboardHide,
} as ComponentMeta<typeof KeyboardHide>;

const Template: ComponentStory<typeof KeyboardHide> = (
  args: KeyboardHidePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <KeyboardHide {...args} />
    <KeyboardHide {...args} fill="red.500" />
    <KeyboardHide {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
