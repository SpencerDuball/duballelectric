import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClockThree, ClockThreePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ClockThree",
  component: ClockThree,
} as ComponentMeta<typeof ClockThree>;

const Template: ComponentStory<typeof ClockThree> = (
  args: ClockThreePropsI
) => (
  <x.div display="flex" gap="20px">
    <ClockThree {...args} />
    <ClockThree {...args} fill="red.500" />
    <ClockThree {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
