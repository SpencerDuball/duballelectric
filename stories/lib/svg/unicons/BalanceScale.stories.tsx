import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BalanceScale, BalanceScalePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BalanceScale",
  component: BalanceScale,
} as ComponentMeta<typeof BalanceScale>;

const Template: ComponentStory<typeof BalanceScale> = (
  args: BalanceScalePropsI
) => (
  <x.div display="flex" gap="20px">
    <BalanceScale {...args} />
    <BalanceScale {...args} fill="red.500" />
    <BalanceScale {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
