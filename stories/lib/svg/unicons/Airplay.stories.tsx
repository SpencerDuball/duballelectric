import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Airplay, AirplayPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Airplay",
  component: Airplay,
} as ComponentMeta<typeof Airplay>;

const Template: ComponentStory<typeof Airplay> = (args: AirplayPropsI) => (
  <x.div display="flex" gap="20px">
    <Airplay {...args} />
    <Airplay {...args} fill="red.500" />
    <Airplay {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
