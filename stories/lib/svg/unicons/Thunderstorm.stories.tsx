import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Thunderstorm, ThunderstormPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Thunderstorm",
  component: Thunderstorm,
} as ComponentMeta<typeof Thunderstorm>;

const Template: ComponentStory<typeof Thunderstorm> = (
  args: ThunderstormPropsI
) => (
  <x.div display="flex" gap="20px">
    <Thunderstorm {...args} />
    <Thunderstorm {...args} fill="red.500" />
    <Thunderstorm {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
