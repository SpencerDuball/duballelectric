import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Notebooks, NotebooksPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Notebooks",
  component: Notebooks,
} as ComponentMeta<typeof Notebooks>;

const Template: ComponentStory<typeof Notebooks> = (args: NotebooksPropsI) => (
  <x.div display="flex" gap="20px">
    <Notebooks {...args} />
    <Notebooks {...args} fill="red.500" />
    <Notebooks {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
