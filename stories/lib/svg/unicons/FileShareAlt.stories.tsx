import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileShareAlt, FileShareAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileShareAlt",
  component: FileShareAlt,
} as ComponentMeta<typeof FileShareAlt>;

const Template: ComponentStory<typeof FileShareAlt> = (
  args: FileShareAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileShareAlt {...args} />
    <FileShareAlt {...args} fill="red.500" />
    <FileShareAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
