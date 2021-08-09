import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Meter, MeterPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Meter",
  component: Meter,
} as ComponentMeta<typeof Meter>;

const Template: ComponentStory<typeof Meter> = (args: MeterPropsI) => (
  <x.div display="flex" gap="20px">
    <Meter {...args} />
    <Meter {...args} fill="red.500" />
    <Meter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
