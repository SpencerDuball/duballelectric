import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FilePlus, FilePlusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FilePlus",
  component: FilePlus,
} as ComponentMeta<typeof FilePlus>;

const Template: ComponentStory<typeof FilePlus> = (args: FilePlusPropsI) => (
  <x.div display="flex" gap="20px">
    <FilePlus {...args} />
    <FilePlus {...args} fill="red.500" />
    <FilePlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
