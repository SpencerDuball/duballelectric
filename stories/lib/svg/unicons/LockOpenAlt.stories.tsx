import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LockOpenAlt, LockOpenAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LockOpenAlt",
  component: LockOpenAlt,
} as ComponentMeta<typeof LockOpenAlt>;

const Template: ComponentStory<typeof LockOpenAlt> = (
  args: LockOpenAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <LockOpenAlt {...args} />
    <LockOpenAlt {...args} fill="red.500" />
    <LockOpenAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
