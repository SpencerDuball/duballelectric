import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { QuestionCircle, QuestionCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/QuestionCircle",
  component: QuestionCircle,
} as ComponentMeta<typeof QuestionCircle>;

const Template: ComponentStory<typeof QuestionCircle> = (
  args: QuestionCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <QuestionCircle {...args} />
    <QuestionCircle {...args} fill="red.500" />
    <QuestionCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
