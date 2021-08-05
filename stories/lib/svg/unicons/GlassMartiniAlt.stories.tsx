import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GlassMartiniAlt, GlassMartiniAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/GlassMartiniAlt",
  component: GlassMartiniAlt,
} as ComponentMeta<typeof GlassMartiniAlt>;

const Template: ComponentStory<typeof GlassMartiniAlt> = (
  args: GlassMartiniAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <GlassMartiniAlt {...args} />
    <GlassMartiniAlt {...args} fill="red.500" />
    <GlassMartiniAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
