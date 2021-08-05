import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bus, BusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Bus",
  component: Bus,
} as ComponentMeta<typeof Bus>;

const Template: ComponentStory<typeof Bus> = (args: BusPropsI) => (
  <x.div display="flex" gap="20px">
    <Bus {...args} />
    <Bus {...args} fill="red.500" />
    <Bus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
