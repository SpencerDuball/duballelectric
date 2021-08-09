import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ShieldQuestion, ShieldQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShieldQuestion",
  component: ShieldQuestion,
} as ComponentMeta<typeof ShieldQuestion>;

const Template: ComponentStory<typeof ShieldQuestion> = (
  args: ShieldQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <ShieldQuestion {...args} />
    <ShieldQuestion {...args} fill="red.500" />
    <ShieldQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
