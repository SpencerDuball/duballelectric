import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StepBackwardCircle, StepBackwardCirclePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/StepBackwardCircle",
  component: StepBackwardCircle,
} as ComponentMeta<typeof StepBackwardCircle>;

const Template: ComponentStory<typeof StepBackwardCircle> = (
  args: StepBackwardCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <StepBackwardCircle {...args} />
    <StepBackwardCircle {...args} fill="red.500" />
    <StepBackwardCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
