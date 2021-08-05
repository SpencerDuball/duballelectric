import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CopyAlt, CopyAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CopyAlt",
  component: CopyAlt,
} as ComponentMeta<typeof CopyAlt>;

const Template: ComponentStory<typeof CopyAlt> = (args: CopyAltPropsI) => (
  <x.div display="flex" gap="20px">
    <CopyAlt {...args} />
    <CopyAlt {...args} fill="red.500" />
    <CopyAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
