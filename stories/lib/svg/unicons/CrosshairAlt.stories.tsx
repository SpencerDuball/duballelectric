import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CrosshairAlt, CrosshairAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CrosshairAlt",
  component: CrosshairAlt,
} as ComponentMeta<typeof CrosshairAlt>;

const Template: ComponentStory<typeof CrosshairAlt> = (
  args: CrosshairAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CrosshairAlt {...args} />
    <CrosshairAlt {...args} fill="red.500" />
    <CrosshairAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
