import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StepBackward, StepBackwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StepBackward",
  component: StepBackward,
} as ComponentMeta<typeof StepBackward>;

const Template: ComponentStory<typeof StepBackward> = (
  args: StepBackwardPropsI
) => (
  <x.div display="flex" gap="20px">
    <StepBackward {...args} />
    <StepBackward {...args} fill="red.500" />
    <StepBackward {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
