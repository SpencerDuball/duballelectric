import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileAlt, FileAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileAlt",
  component: FileAlt,
} as ComponentMeta<typeof FileAlt>;

const Template: ComponentStory<typeof FileAlt> = (args: FileAltPropsI) => (
  <x.div display="flex" gap="20px">
    <FileAlt {...args} />
    <FileAlt {...args} fill="red.500" />
    <FileAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
