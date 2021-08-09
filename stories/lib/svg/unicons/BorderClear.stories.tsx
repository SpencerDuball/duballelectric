import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderClear, BorderClearPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderClear",
  component: BorderClear,
} as ComponentMeta<typeof BorderClear>;

const Template: ComponentStory<typeof BorderClear> = (
  args: BorderClearPropsI
) => (
  <x.div display="flex" gap="20px">
    <BorderClear {...args} />
    <BorderClear {...args} fill="red.500" />
    <BorderClear {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
