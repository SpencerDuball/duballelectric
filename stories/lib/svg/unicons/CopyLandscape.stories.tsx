import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CopyLandscape, CopyLandscapePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CopyLandscape",
  component: CopyLandscape,
} as ComponentMeta<typeof CopyLandscape>;

const Template: ComponentStory<typeof CopyLandscape> = (
  args: CopyLandscapePropsI
) => (
  <x.div display="flex" gap="20px">
    <CopyLandscape {...args} />
    <CopyLandscape {...args} fill="red.500" />
    <CopyLandscape {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
