import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleDoubleRight, AngleDoubleRightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AngleDoubleRight",
  component: AngleDoubleRight,
} as ComponentMeta<typeof AngleDoubleRight>;

const Template: ComponentStory<typeof AngleDoubleRight> = (
  args: AngleDoubleRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <AngleDoubleRight {...args} />
    <AngleDoubleRight {...args} fill="red.500" />
    <AngleDoubleRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
