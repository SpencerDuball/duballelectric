import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileGraph, FileGraphPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileGraph",
  component: FileGraph,
} as ComponentMeta<typeof FileGraph>;

const Template: ComponentStory<typeof FileGraph> = (args: FileGraphPropsI) => (
  <x.div display="flex" gap="20px">
    <FileGraph {...args} />
    <FileGraph {...args} fill="red.500" />
    <FileGraph {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
