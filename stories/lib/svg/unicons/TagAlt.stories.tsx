import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TagAlt, TagAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TagAlt",
  component: TagAlt,
} as ComponentMeta<typeof TagAlt>;

const Template: ComponentStory<typeof TagAlt> = (args: TagAltPropsI) => (
  <x.div display="flex" gap="20px">
    <TagAlt {...args} />
    <TagAlt {...args} fill="red.500" />
    <TagAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
