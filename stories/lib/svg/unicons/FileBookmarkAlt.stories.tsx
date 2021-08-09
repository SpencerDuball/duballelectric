import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileBookmarkAlt, FileBookmarkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileBookmarkAlt",
  component: FileBookmarkAlt,
} as ComponentMeta<typeof FileBookmarkAlt>;

const Template: ComponentStory<typeof FileBookmarkAlt> = (
  args: FileBookmarkAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileBookmarkAlt {...args} />
    <FileBookmarkAlt {...args} fill="red.500" />
    <FileBookmarkAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
