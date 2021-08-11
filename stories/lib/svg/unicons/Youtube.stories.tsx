import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Youtube, YoutubePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Youtube",
  component: Youtube,
} as ComponentMeta<typeof Youtube>;

const Template: ComponentStory<typeof Youtube> = (args: YoutubePropsI) => (
  <Box display="flex" gap="20px">
    <Youtube {...args} />
    <Youtube {...args} fill="red.500" />
    <Youtube {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
