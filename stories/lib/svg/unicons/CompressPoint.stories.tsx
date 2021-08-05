import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CompressPoint, CompressPointPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CompressPoint",
  component: CompressPoint,
} as ComponentMeta<typeof CompressPoint>;

const Template: ComponentStory<typeof CompressPoint> = (
  args: CompressPointPropsI
) => (
  <x.div display="flex" gap="20px">
    <CompressPoint {...args} />
    <CompressPoint {...args} fill="red.500" />
    <CompressPoint {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
