import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { KeyboardShow, KeyboardShowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeyboardShow",
  component: KeyboardShow,
} as ComponentMeta<typeof KeyboardShow>;

const Template: ComponentStory<typeof KeyboardShow> = (
  args: KeyboardShowPropsI
) => (
  <Box display="flex" gap="20px">
    <KeyboardShow {...args} />
    <KeyboardShow {...args} fill="red.500" />
    <KeyboardShow {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
