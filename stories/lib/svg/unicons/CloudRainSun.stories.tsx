import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudRainSun, CloudRainSunPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudRainSun",
  component: CloudRainSun,
} as ComponentMeta<typeof CloudRainSun>;

const Template: ComponentStory<typeof CloudRainSun> = (
  args: CloudRainSunPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudRainSun {...args} />
    <CloudRainSun {...args} fill="red.500" />
    <CloudRainSun {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
