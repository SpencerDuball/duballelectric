import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Schedule, SchedulePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Schedule",
  component: Schedule,
} as ComponentMeta<typeof Schedule>;

const Template: ComponentStory<typeof Schedule> = (args: SchedulePropsI) => (
  <x.div display="flex" gap="20px">
    <Schedule {...args} />
    <Schedule {...args} fill="red.500" />
    <Schedule {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
