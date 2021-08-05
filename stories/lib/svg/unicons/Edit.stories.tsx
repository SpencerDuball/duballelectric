import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Edit, EditPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Edit",
  component: Edit,
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = (args: EditPropsI) => (
  <x.div display="flex" gap="20px">
    <Edit {...args} />
    <Edit {...args} fill="red.500" />
    <Edit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
