import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Crosshair, CrosshairPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Crosshair",
  component: Crosshair,
} as ComponentMeta<typeof Crosshair>;

const Template: ComponentStory<typeof Crosshair> = (args: CrosshairPropsI) => (
  <x.div display="flex" gap="20px">
    <Crosshair {...args} />
    <Crosshair {...args} fill="red.500" />
    <Crosshair {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
