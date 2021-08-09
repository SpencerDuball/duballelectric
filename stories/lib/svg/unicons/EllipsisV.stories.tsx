import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EllipsisV, EllipsisVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EllipsisV",
  component: EllipsisV,
} as ComponentMeta<typeof EllipsisV>;

const Template: ComponentStory<typeof EllipsisV> = (args: EllipsisVPropsI) => (
  <x.div display="flex" gap="20px">
    <EllipsisV {...args} />
    <EllipsisV {...args} fill="red.500" />
    <EllipsisV {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
