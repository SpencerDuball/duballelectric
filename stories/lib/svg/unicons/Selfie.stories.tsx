import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Selfie, SelfiePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Selfie",
  component: Selfie,
} as ComponentMeta<typeof Selfie>;

const Template: ComponentStory<typeof Selfie> = (args: SelfiePropsI) => (
  <x.div display="flex" gap="20px">
    <Selfie {...args} />
    <Selfie {...args} fill="red.500" />
    <Selfie {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
