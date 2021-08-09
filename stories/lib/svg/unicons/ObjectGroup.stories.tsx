import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ObjectGroup, ObjectGroupPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ObjectGroup",
  component: ObjectGroup,
} as ComponentMeta<typeof ObjectGroup>;

const Template: ComponentStory<typeof ObjectGroup> = (
  args: ObjectGroupPropsI
) => (
  <x.div display="flex" gap="20px">
    <ObjectGroup {...args} />
    <ObjectGroup {...args} fill="red.500" />
    <ObjectGroup {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
