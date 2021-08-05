import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsShrinkV, ArrowsShrinkVPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowsShrinkV",
  component: ArrowsShrinkV,
} as ComponentMeta<typeof ArrowsShrinkV>;

const Template: ComponentStory<typeof ArrowsShrinkV> = (
  args: ArrowsShrinkVPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsShrinkV {...args} />
    <ArrowsShrinkV {...args} fill="red.500" />
    <ArrowsShrinkV {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
