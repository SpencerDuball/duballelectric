import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Archive, ArchivePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Archive",
  component: Archive,
} as ComponentMeta<typeof Archive>;

const Template: ComponentStory<typeof Archive> = (args: ArchivePropsI) => (
  <x.div display="flex" gap="20px">
    <Archive {...args} />
    <Archive {...args} fill="red.500" />
    <Archive {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
