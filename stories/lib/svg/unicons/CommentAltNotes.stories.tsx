import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltNotes, CommentAltNotesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltNotes",
  component: CommentAltNotes,
} as ComponentMeta<typeof CommentAltNotes>;

const Template: ComponentStory<typeof CommentAltNotes> = (
  args: CommentAltNotesPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltNotes {...args} />
    <CommentAltNotes {...args} fill="red.500" />
    <CommentAltNotes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
