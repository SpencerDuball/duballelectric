import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PresentationMinus, PresentationMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PresentationMinus",
  component: PresentationMinus,
} as ComponentMeta<typeof PresentationMinus>;

const Template: ComponentStory<typeof PresentationMinus> = (
  args: PresentationMinusPropsI
) => (
  <x.div display="flex" gap="20px">
    <PresentationMinus {...args} />
    <PresentationMinus {...args} fill="red.500" />
    <PresentationMinus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
