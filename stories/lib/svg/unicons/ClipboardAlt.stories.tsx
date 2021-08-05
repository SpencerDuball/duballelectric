import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClipboardAlt, ClipboardAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ClipboardAlt",
  component: ClipboardAlt,
} as ComponentMeta<typeof ClipboardAlt>;

const Template: ComponentStory<typeof ClipboardAlt> = (
  args: ClipboardAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ClipboardAlt {...args} />
    <ClipboardAlt {...args} fill="red.500" />
    <ClipboardAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
