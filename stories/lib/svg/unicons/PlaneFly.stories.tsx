import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PlaneFly, PlaneFlyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PlaneFly",
  component: PlaneFly,
} as ComponentMeta<typeof PlaneFly>;

const Template: ComponentStory<typeof PlaneFly> = (args: PlaneFlyPropsI) => (
  <x.div display="flex" gap="20px">
    <PlaneFly {...args} />
    <PlaneFly {...args} fill="red.500" />
    <PlaneFly {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
