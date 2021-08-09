import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Stethoscope, StethoscopePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Stethoscope",
  component: Stethoscope,
} as ComponentMeta<typeof Stethoscope>;

const Template: ComponentStory<typeof Stethoscope> = (
  args: StethoscopePropsI
) => (
  <x.div display="flex" gap="20px">
    <Stethoscope {...args} />
    <Stethoscope {...args} fill="red.500" />
    <Stethoscope {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
