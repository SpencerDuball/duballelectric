import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClockSeven, ClockSevenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClockSeven",
  component: ClockSeven,
} as ComponentMeta<typeof ClockSeven>;

const Template: ComponentStory<typeof ClockSeven> = (
  args: ClockSevenPropsI
) => (
  <x.div display="flex" gap="20px">
    <ClockSeven {...args} />
    <ClockSeven {...args} fill="red.500" />
    <ClockSeven {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
