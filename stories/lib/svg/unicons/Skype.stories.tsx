import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Skype, SkypePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Skype",
  component: Skype,
} as ComponentMeta<typeof Skype>;

const Template: ComponentStory<typeof Skype> = (args: SkypePropsI) => (
  <Box display="flex" gap="20px">
    <Skype {...args} />
    <Skype {...args} fill="red.500" />
    <Skype {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
