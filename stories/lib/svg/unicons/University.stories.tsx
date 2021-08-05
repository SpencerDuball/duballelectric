import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { University, UniversityPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/University",
  component: University,
} as ComponentMeta<typeof University>;

const Template: ComponentStory<typeof University> = (
  args: UniversityPropsI
) => (
  <x.div display="flex" gap="20px">
    <University {...args} />
    <University {...args} fill="red.500" />
    <University {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
