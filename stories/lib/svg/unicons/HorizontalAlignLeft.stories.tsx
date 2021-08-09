import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  HorizontalAlignLeft,
  HorizontalAlignLeftPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HorizontalAlignLeft",
  component: HorizontalAlignLeft,
} as ComponentMeta<typeof HorizontalAlignLeft>;

const Template: ComponentStory<typeof HorizontalAlignLeft> = (
  args: HorizontalAlignLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <HorizontalAlignLeft {...args} />
    <HorizontalAlignLeft {...args} fill="red.500" />
    <HorizontalAlignLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
