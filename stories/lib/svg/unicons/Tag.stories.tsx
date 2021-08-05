import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tag, TagPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: TagPropsI) => (
  <x.div display="flex" gap="20px">
    <Tag {...args} />
    <Tag {...args} fill="red.500" />
    <Tag {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
