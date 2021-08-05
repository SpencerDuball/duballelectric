import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FidgetSpinner, FidgetSpinnerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FidgetSpinner",
  component: FidgetSpinner,
} as ComponentMeta<typeof FidgetSpinner>;

const Template: ComponentStory<typeof FidgetSpinner> = (
  args: FidgetSpinnerPropsI
) => (
  <x.div display="flex" gap="20px">
    <FidgetSpinner {...args} />
    <FidgetSpinner {...args} fill="red.500" />
    <FidgetSpinner {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
