import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GlassMartini, GlassMartiniPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GlassMartini",
  component: GlassMartini,
} as ComponentMeta<typeof GlassMartini>;

const Template: ComponentStory<typeof GlassMartini> = (
  args: GlassMartiniPropsI
) => (
  <x.div display="flex" gap="20px">
    <GlassMartini {...args} />
    <GlassMartini {...args} fill="red.500" />
    <GlassMartini {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
