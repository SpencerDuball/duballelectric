import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderBottom, BorderBottomPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BorderBottom",
  component: BorderBottom,
} as ComponentMeta<typeof BorderBottom>;

const Template: ComponentStory<typeof BorderBottom> = (
  args: BorderBottomPropsI
) => (
  <x.div display="flex" gap="20px">
    <BorderBottom {...args} />
    <BorderBottom {...args} fill="red.500" />
    <BorderBottom {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
