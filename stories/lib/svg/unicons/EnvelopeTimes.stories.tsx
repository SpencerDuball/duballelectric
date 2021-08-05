import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeTimes, EnvelopeTimesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeTimes",
  component: EnvelopeTimes,
} as ComponentMeta<typeof EnvelopeTimes>;

const Template: ComponentStory<typeof EnvelopeTimes> = (
  args: EnvelopeTimesPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeTimes {...args} />
    <EnvelopeTimes {...args} fill="red.500" />
    <EnvelopeTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
