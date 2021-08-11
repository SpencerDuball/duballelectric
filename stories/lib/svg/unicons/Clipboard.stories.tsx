import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Clipboard, ClipboardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Clipboard",
  component: Clipboard,
} as ComponentMeta<typeof Clipboard>;

const Template: ComponentStory<typeof Clipboard> = (args: ClipboardPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Clipboard {...args} />
    <Clipboard {...args} fill="red.500" />
    <Clipboard {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
