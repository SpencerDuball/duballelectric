import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderLeft, BorderLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderLeft",
  component: BorderLeft,
} as ComponentMeta<typeof BorderLeft>;

const Template: ComponentStory<typeof BorderLeft> = (
  args: BorderLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <BorderLeft {...args} />
    <BorderLeft {...args} fill="red.500" />
    <BorderLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
