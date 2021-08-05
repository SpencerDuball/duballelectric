import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Font, FontPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Font",
  component: Font,
} as ComponentMeta<typeof Font>;

const Template: ComponentStory<typeof Font> = (args: FontPropsI) => (
  <x.div display="flex" gap="20px">
    <Font {...args} />
    <Font {...args} fill="red.500" />
    <Font {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
