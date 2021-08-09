import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Silence, SilencePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Silence",
  component: Silence,
} as ComponentMeta<typeof Silence>;

const Template: ComponentStory<typeof Silence> = (args: SilencePropsI) => (
  <x.div display="flex" gap="20px">
    <Silence {...args} />
    <Silence {...args} fill="red.500" />
    <Silence {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
