import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Registered, RegisteredPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Registered",
  component: Registered,
} as ComponentMeta<typeof Registered>;

const Template: ComponentStory<typeof Registered> = (
  args: RegisteredPropsI
) => (
  <x.div display="flex" gap="20px">
    <Registered {...args} />
    <Registered {...args} fill="red.500" />
    <Registered {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
