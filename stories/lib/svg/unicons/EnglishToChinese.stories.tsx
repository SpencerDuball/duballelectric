import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnglishToChinese, EnglishToChinesePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnglishToChinese",
  component: EnglishToChinese,
} as ComponentMeta<typeof EnglishToChinese>;

const Template: ComponentStory<typeof EnglishToChinese> = (
  args: EnglishToChinesePropsI
) => (
  <x.div display="flex" gap="20px">
    <EnglishToChinese {...args} />
    <EnglishToChinese {...args} fill="red.500" />
    <EnglishToChinese {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
