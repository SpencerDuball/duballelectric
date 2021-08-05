import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  HorizontalDistributionLeft,
  HorizontalDistributionLeftPropsI,
} from "lib/svg";

export default {
  title: "lib/svg/unicons/HorizontalDistributionLeft",
  component: HorizontalDistributionLeft,
} as ComponentMeta<typeof HorizontalDistributionLeft>;

const Template: ComponentStory<typeof HorizontalDistributionLeft> = (
  args: HorizontalDistributionLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <HorizontalDistributionLeft {...args} />
    <HorizontalDistributionLeft {...args} fill="red.500" />
    <HorizontalDistributionLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
