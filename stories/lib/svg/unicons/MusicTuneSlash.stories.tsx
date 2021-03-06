import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MusicTuneSlash, MusicTuneSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MusicTuneSlash",
  component: MusicTuneSlash,
} as ComponentMeta<typeof MusicTuneSlash>;

const Template: ComponentStory<typeof MusicTuneSlash> = (
  args: MusicTuneSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MusicTuneSlash {...args} />
    <MusicTuneSlash {...args} fill="red.500" />
    <MusicTuneSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
