import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleRight, AngleRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleRight",
  component: AngleRight,
} as ComponentMeta<typeof AngleRight>;

const Template: ComponentStory<typeof AngleRight> = (
  args: AngleRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <AngleRight {...args} />
    <AngleRight {...args} fill="red.500" />
    <AngleRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
