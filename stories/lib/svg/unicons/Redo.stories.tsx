import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Redo, RedoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Redo",
  component: Redo,
} as ComponentMeta<typeof Redo>;

const Template: ComponentStory<typeof Redo> = (args: RedoPropsI) => (
  <x.div display="flex" gap="20px">
    <Redo {...args} />
    <Redo {...args} fill="red.500" />
    <Redo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
