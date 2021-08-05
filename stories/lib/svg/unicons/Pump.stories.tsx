import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pump, PumpPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Pump",
  component: Pump,
} as ComponentMeta<typeof Pump>;

const Template: ComponentStory<typeof Pump> = (args: PumpPropsI) => (
  <x.div display="flex" gap="20px">
    <Pump {...args} />
    <Pump {...args} fill="red.500" />
    <Pump {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
