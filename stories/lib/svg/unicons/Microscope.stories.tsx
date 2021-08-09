import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Microscope, MicroscopePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Microscope",
  component: Microscope,
} as ComponentMeta<typeof Microscope>;

const Template: ComponentStory<typeof Microscope> = (
  args: MicroscopePropsI
) => (
  <x.div display="flex" gap="20px">
    <Microscope {...args} />
    <Microscope {...args} fill="red.500" />
    <Microscope {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
