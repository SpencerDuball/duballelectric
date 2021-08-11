import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MusicNote, MusicNotePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MusicNote",
  component: MusicNote,
} as ComponentMeta<typeof MusicNote>;

const Template: ComponentStory<typeof MusicNote> = (args: MusicNotePropsI) => (
  <Box display="flex" gap="20px">
    <MusicNote {...args} />
    <MusicNote {...args} fill="red.500" />
    <MusicNote {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
