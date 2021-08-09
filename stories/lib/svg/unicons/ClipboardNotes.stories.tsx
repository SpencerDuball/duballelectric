import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClipboardNotes, ClipboardNotesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClipboardNotes",
  component: ClipboardNotes,
} as ComponentMeta<typeof ClipboardNotes>;

const Template: ComponentStory<typeof ClipboardNotes> = (
  args: ClipboardNotesPropsI
) => (
  <x.div display="flex" gap="20px">
    <ClipboardNotes {...args} />
    <ClipboardNotes {...args} fill="red.500" />
    <ClipboardNotes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
