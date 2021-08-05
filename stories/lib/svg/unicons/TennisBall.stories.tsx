import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TennisBall, TennisBallPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TennisBall",
  component: TennisBall,
} as ComponentMeta<typeof TennisBall>;

const Template: ComponentStory<typeof TennisBall> = (
  args: TennisBallPropsI
) => (
  <x.div display="flex" gap="20px">
    <TennisBall {...args} />
    <TennisBall {...args} fill="red.500" />
    <TennisBall {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
