import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClockNine, ClockNinePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ClockNine",
  component: ClockNine,
} as ComponentMeta<typeof ClockNine>;

const Template: ComponentStory<typeof ClockNine> = (args: ClockNinePropsI) => (
  <x.div display="flex" gap="20px">
    <ClockNine {...args} />
    <ClockNine {...args} fill="red.500" />
    <ClockNine {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
