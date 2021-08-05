import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudRain, CloudRainPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudRain",
  component: CloudRain,
} as ComponentMeta<typeof CloudRain>;

const Template: ComponentStory<typeof CloudRain> = (args: CloudRainPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudRain {...args} />
    <CloudRain {...args} fill="red.500" />
    <CloudRain {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
