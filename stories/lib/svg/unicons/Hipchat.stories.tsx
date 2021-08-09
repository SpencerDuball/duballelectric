import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Hipchat, HipchatPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Hipchat",
  component: Hipchat,
} as ComponentMeta<typeof Hipchat>;

const Template: ComponentStory<typeof Hipchat> = (args: HipchatPropsI) => (
  <x.div display="flex" gap="20px">
    <Hipchat {...args} />
    <Hipchat {...args} fill="red.500" />
    <Hipchat {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
