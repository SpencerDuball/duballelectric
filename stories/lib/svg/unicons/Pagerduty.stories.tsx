import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pagerduty, PagerdutyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Pagerduty",
  component: Pagerduty,
} as ComponentMeta<typeof Pagerduty>;

const Template: ComponentStory<typeof Pagerduty> = (args: PagerdutyPropsI) => (
  <x.div display="flex" gap="20px">
    <Pagerduty {...args} />
    <Pagerduty {...args} fill="red.500" />
    <Pagerduty {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
