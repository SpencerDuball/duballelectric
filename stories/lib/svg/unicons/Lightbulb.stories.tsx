import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Lightbulb, LightbulbPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Lightbulb",
  component: Lightbulb,
} as ComponentMeta<typeof Lightbulb>;

const Template: ComponentStory<typeof Lightbulb> = (args: LightbulbPropsI) => (
  <x.div display="flex" gap="20px">
    <Lightbulb {...args} />
    <Lightbulb {...args} fill="red.500" />
    <Lightbulb {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
