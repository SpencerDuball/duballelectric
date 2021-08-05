import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Diary, DiaryPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Diary",
  component: Diary,
} as ComponentMeta<typeof Diary>;

const Template: ComponentStory<typeof Diary> = (args: DiaryPropsI) => (
  <x.div display="flex" gap="20px">
    <Diary {...args} />
    <Diary {...args} fill="red.500" />
    <Diary {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
