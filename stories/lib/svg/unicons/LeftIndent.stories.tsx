import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LeftIndent, LeftIndentPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LeftIndent",
  component: LeftIndent,
} as ComponentMeta<typeof LeftIndent>;

const Template: ComponentStory<typeof LeftIndent> = (
  args: LeftIndentPropsI
) => (
  <x.div display="flex" gap="20px">
    <LeftIndent {...args} />
    <LeftIndent {...args} fill="red.500" />
    <LeftIndent {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
