import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  VerticalDistributionTop,
  VerticalDistributionTopPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalDistributionTop",
  component: VerticalDistributionTop,
} as ComponentMeta<typeof VerticalDistributionTop>;

const Template: ComponentStory<typeof VerticalDistributionTop> = (
  args: VerticalDistributionTopPropsI
) => (
  <x.div display="flex" gap="20px">
    <VerticalDistributionTop {...args} />
    <VerticalDistributionTop {...args} fill="red.500" />
    <VerticalDistributionTop {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
