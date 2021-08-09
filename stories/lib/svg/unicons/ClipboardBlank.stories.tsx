import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClipboardBlank, ClipboardBlankPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClipboardBlank",
  component: ClipboardBlank,
} as ComponentMeta<typeof ClipboardBlank>;

const Template: ComponentStory<typeof ClipboardBlank> = (
  args: ClipboardBlankPropsI
) => (
  <x.div display="flex" gap="20px">
    <ClipboardBlank {...args} />
    <ClipboardBlank {...args} fill="red.500" />
    <ClipboardBlank {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
