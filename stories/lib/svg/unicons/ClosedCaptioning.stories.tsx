import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClosedCaptioning, ClosedCaptioningPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ClosedCaptioning",
  component: ClosedCaptioning,
} as ComponentMeta<typeof ClosedCaptioning>;

const Template: ComponentStory<typeof ClosedCaptioning> = (
  args: ClosedCaptioningPropsI
) => (
  <x.div display="flex" gap="20px">
    <ClosedCaptioning {...args} />
    <ClosedCaptioning {...args} fill="red.500" />
    <ClosedCaptioning {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
