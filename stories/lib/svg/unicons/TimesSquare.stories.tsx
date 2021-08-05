import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TimesSquare, TimesSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TimesSquare",
  component: TimesSquare,
} as ComponentMeta<typeof TimesSquare>;

const Template: ComponentStory<typeof TimesSquare> = (
  args: TimesSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <TimesSquare {...args} />
    <TimesSquare {...args} fill="red.500" />
    <TimesSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
