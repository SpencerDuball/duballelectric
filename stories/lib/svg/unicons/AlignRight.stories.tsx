import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignRight, AlignRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignRight",
  component: AlignRight,
} as ComponentMeta<typeof AlignRight>;

const Template: ComponentStory<typeof AlignRight> = (
  args: AlignRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignRight {...args} />
    <AlignRight {...args} fill="red.500" />
    <AlignRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
