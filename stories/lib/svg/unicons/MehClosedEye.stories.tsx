import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MehClosedEye, MehClosedEyePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MehClosedEye",
  component: MehClosedEye,
} as ComponentMeta<typeof MehClosedEye>;

const Template: ComponentStory<typeof MehClosedEye> = (
  args: MehClosedEyePropsI
) => (
  <x.div display="flex" gap="20px">
    <MehClosedEye {...args} />
    <MehClosedEye {...args} fill="red.500" />
    <MehClosedEye {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
