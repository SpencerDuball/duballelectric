import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Flashlight, FlashlightPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/Flashlight",
  component: Flashlight,
} as ComponentMeta<typeof Flashlight>;

const Template: ComponentStory<typeof Flashlight> = (
  args: FlashlightPropsI
) => (
  <x.div display="flex" gap="20px">
    <Flashlight {...args} />
    <Flashlight {...args} fill="red.500" />
    <Flashlight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
