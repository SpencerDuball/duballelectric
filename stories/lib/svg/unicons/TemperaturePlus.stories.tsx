import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TemperaturePlus, TemperaturePlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TemperaturePlus",
  component: TemperaturePlus,
} as ComponentMeta<typeof TemperaturePlus>;

const Template: ComponentStory<typeof TemperaturePlus> = (
  args: TemperaturePlusPropsI
) => (
  <x.div display="flex" gap="20px">
    <TemperaturePlus {...args} />
    <TemperaturePlus {...args} fill="red.500" />
    <TemperaturePlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
