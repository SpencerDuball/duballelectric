import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ambulance, AmbulancePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ambulance",
  component: Ambulance,
} as ComponentMeta<typeof Ambulance>;

const Template: ComponentStory<typeof Ambulance> = (args: AmbulancePropsI) => (
  <x.div display="flex" gap="20px">
    <Ambulance {...args} />
    <Ambulance {...args} fill="red.500" />
    <Ambulance {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
