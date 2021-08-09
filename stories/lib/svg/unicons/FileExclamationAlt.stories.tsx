import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileExclamationAlt, FileExclamationAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileExclamationAlt",
  component: FileExclamationAlt,
} as ComponentMeta<typeof FileExclamationAlt>;

const Template: ComponentStory<typeof FileExclamationAlt> = (
  args: FileExclamationAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileExclamationAlt {...args} />
    <FileExclamationAlt {...args} fill="red.500" />
    <FileExclamationAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
