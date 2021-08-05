import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderAlt, BorderAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BorderAlt",
  component: BorderAlt,
} as ComponentMeta<typeof BorderAlt>;

const Template: ComponentStory<typeof BorderAlt> = (args: BorderAltPropsI) => (
  <x.div display="flex" gap="20px">
    <BorderAlt {...args} />
    <BorderAlt {...args} fill="red.500" />
    <BorderAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
