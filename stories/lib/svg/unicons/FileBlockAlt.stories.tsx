import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileBlockAlt, FileBlockAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileBlockAlt",
  component: FileBlockAlt,
} as ComponentMeta<typeof FileBlockAlt>;

const Template: ComponentStory<typeof FileBlockAlt> = (
  args: FileBlockAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileBlockAlt {...args} />
    <FileBlockAlt {...args} fill="red.500" />
    <FileBlockAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
