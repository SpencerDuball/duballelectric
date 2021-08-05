import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  VerticalDistributionCenter,
  VerticalDistributionCenterPropsI,
} from "lib/svg";

export default {
  title: "lib/svg/unicons/VerticalDistributionCenter",
  component: VerticalDistributionCenter,
} as ComponentMeta<typeof VerticalDistributionCenter>;

const Template: ComponentStory<typeof VerticalDistributionCenter> = (
  args: VerticalDistributionCenterPropsI
) => (
  <x.div display="flex" gap="20px">
    <VerticalDistributionCenter {...args} />
    <VerticalDistributionCenter {...args} fill="red.500" />
    <VerticalDistributionCenter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
