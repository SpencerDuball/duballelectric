import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PresentationTimes, PresentationTimesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PresentationTimes",
  component: PresentationTimes,
} as ComponentMeta<typeof PresentationTimes>;

const Template: ComponentStory<typeof PresentationTimes> = (
  args: PresentationTimesPropsI
) => (
  <x.div display="flex" gap="20px">
    <PresentationTimes {...args} />
    <PresentationTimes {...args} fill="red.500" />
    <PresentationTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
