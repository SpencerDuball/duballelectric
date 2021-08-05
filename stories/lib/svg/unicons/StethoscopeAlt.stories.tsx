import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StethoscopeAlt, StethoscopeAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/StethoscopeAlt",
  component: StethoscopeAlt,
} as ComponentMeta<typeof StethoscopeAlt>;

const Template: ComponentStory<typeof StethoscopeAlt> = (
  args: StethoscopeAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <StethoscopeAlt {...args} />
    <StethoscopeAlt {...args} fill="red.500" />
    <StethoscopeAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
