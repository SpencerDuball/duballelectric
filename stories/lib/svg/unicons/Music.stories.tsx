import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Music, MusicPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Music",
  component: Music,
} as ComponentMeta<typeof Music>;

const Template: ComponentStory<typeof Music> = (args: MusicPropsI) => (
  <Box display="flex" gap="20px">
    <Music {...args} />
    <Music {...args} fill="red.500" />
    <Music {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
