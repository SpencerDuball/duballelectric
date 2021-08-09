import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DiaryAlt, DiaryAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiaryAlt",
  component: DiaryAlt,
} as ComponentMeta<typeof DiaryAlt>;

const Template: ComponentStory<typeof DiaryAlt> = (args: DiaryAltPropsI) => (
  <x.div display="flex" gap="20px">
    <DiaryAlt {...args} />
    <DiaryAlt {...args} fill="red.500" />
    <DiaryAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
