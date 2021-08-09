import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Calender, CalenderPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Calender",
  component: Calender,
} as ComponentMeta<typeof Calender>;

const Template: ComponentStory<typeof Calender> = (args: CalenderPropsI) => (
  <x.div display="flex" gap="20px">
    <Calender {...args} />
    <Calender {...args} fill="red.500" />
    <Calender {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
