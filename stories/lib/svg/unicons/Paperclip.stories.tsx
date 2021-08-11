import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Paperclip, PaperclipPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Paperclip",
  component: Paperclip,
} as ComponentMeta<typeof Paperclip>;

const Template: ComponentStory<typeof Paperclip> = (args: PaperclipPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Paperclip {...args} />
    <Paperclip {...args} fill="red.500" />
    <Paperclip {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
