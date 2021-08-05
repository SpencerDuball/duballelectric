import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CalendarAlt, CalendarAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CalendarAlt",
  component: CalendarAlt,
} as ComponentMeta<typeof CalendarAlt>;

const Template: ComponentStory<typeof CalendarAlt> = (
  args: CalendarAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CalendarAlt {...args} />
    <CalendarAlt {...args} fill="red.500" />
    <CalendarAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
