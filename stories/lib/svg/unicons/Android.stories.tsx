import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Android, AndroidPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Android",
  component: Android,
} as ComponentMeta<typeof Android>;

const Template: ComponentStory<typeof Android> = (args: AndroidPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Android {...args} />
    <Android {...args} fill="red.500" />
    <Android {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
