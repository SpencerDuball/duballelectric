import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ObjectUngroup, ObjectUngroupPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ObjectUngroup",
  component: ObjectUngroup,
} as ComponentMeta<typeof ObjectUngroup>;

const Template: ComponentStory<typeof ObjectUngroup> = (
  args: ObjectUngroupPropsI
) => (
  <x.div display="flex" gap="20px">
    <ObjectUngroup {...args} />
    <ObjectUngroup {...args} fill="red.500" />
    <ObjectUngroup {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
