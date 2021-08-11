import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Dropbox, DropboxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Dropbox",
  component: Dropbox,
} as ComponentMeta<typeof Dropbox>;

const Template: ComponentStory<typeof Dropbox> = (args: DropboxPropsI) => (
  <Box display="flex" gap="20px">
    <Dropbox {...args} />
    <Dropbox {...args} fill="red.500" />
    <Dropbox {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
