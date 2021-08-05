import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MusicNote, MusicNotePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MusicNote",
  component: MusicNote,
} as ComponentMeta<typeof MusicNote>;

const Template: ComponentStory<typeof MusicNote> = (args: MusicNotePropsI) => (
  <x.div display="flex" gap="20px">
    <MusicNote {...args} />
    <MusicNote {...args} fill="red.500" />
    <MusicNote {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
