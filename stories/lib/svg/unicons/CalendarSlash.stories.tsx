import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CalendarSlash, CalendarSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CalendarSlash",
  component: CalendarSlash,
} as ComponentMeta<typeof CalendarSlash>;

const Template: ComponentStory<typeof CalendarSlash> = (
  args: CalendarSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <CalendarSlash {...args} />
    <CalendarSlash {...args} fill="red.500" />
    <CalendarSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
