import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Exclamation, ExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Exclamation",
  component: Exclamation,
} as ComponentMeta<typeof Exclamation>;

const Template: ComponentStory<typeof Exclamation> = (
  args: ExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <Exclamation {...args} />
    <Exclamation {...args} fill="red.500" />
    <Exclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
