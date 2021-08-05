import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BellSchool, BellSchoolPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BellSchool",
  component: BellSchool,
} as ComponentMeta<typeof BellSchool>;

const Template: ComponentStory<typeof BellSchool> = (
  args: BellSchoolPropsI
) => (
  <x.div display="flex" gap="20px">
    <BellSchool {...args} />
    <BellSchool {...args} fill="red.500" />
    <BellSchool {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
