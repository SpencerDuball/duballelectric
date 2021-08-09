import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HeartRate, HeartRatePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeartRate",
  component: HeartRate,
} as ComponentMeta<typeof HeartRate>;

const Template: ComponentStory<typeof HeartRate> = (args: HeartRatePropsI) => (
  <x.div display="flex" gap="20px">
    <HeartRate {...args} />
    <HeartRate {...args} fill="red.500" />
    <HeartRate {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
