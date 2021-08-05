import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  HorizontalDistributionCenter,
  HorizontalDistributionCenterPropsI,
} from "lib/svg";

export default {
  title: "lib/svg/unicons/HorizontalDistributionCenter",
  component: HorizontalDistributionCenter,
} as ComponentMeta<typeof HorizontalDistributionCenter>;

const Template: ComponentStory<typeof HorizontalDistributionCenter> = (
  args: HorizontalDistributionCenterPropsI
) => (
  <x.div display="flex" gap="20px">
    <HorizontalDistributionCenter {...args} />
    <HorizontalDistributionCenter {...args} fill="red.500" />
    <HorizontalDistributionCenter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
