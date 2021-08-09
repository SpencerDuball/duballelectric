import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Notes, NotesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Notes",
  component: Notes,
} as ComponentMeta<typeof Notes>;

const Template: ComponentStory<typeof Notes> = (args: NotesPropsI) => (
  <x.div display="flex" gap="20px">
    <Notes {...args} />
    <Notes {...args} fill="red.500" />
    <Notes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
