import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StepBackwardAlt, StepBackwardAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StepBackwardAlt",
  component: StepBackwardAlt,
} as ComponentMeta<typeof StepBackwardAlt>;

const Template: ComponentStory<typeof StepBackwardAlt> = (
  args: StepBackwardAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <StepBackwardAlt {...args} />
    <StepBackwardAlt {...args} fill="red.500" />
    <StepBackwardAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
