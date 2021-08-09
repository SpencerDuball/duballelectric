import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Angry, AngryPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Angry",
  component: Angry,
} as ComponentMeta<typeof Angry>;

const Template: ComponentStory<typeof Angry> = (args: AngryPropsI) => (
  <x.div display="flex" gap="20px">
    <Angry {...args} />
    <Angry {...args} fill="red.500" />
    <Angry {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
