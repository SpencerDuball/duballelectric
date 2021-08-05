import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WrapText, WrapTextPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WrapText",
  component: WrapText,
} as ComponentMeta<typeof WrapText>;

const Template: ComponentStory<typeof WrapText> = (args: WrapTextPropsI) => (
  <x.div display="flex" gap="20px">
    <WrapText {...args} />
    <WrapText {...args} fill="red.500" />
    <WrapText {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
