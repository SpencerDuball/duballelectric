import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Skype, SkypePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Skype",
  component: Skype,
} as ComponentMeta<typeof Skype>;

const Template: ComponentStory<typeof Skype> = (args: SkypePropsI) => (
  <x.div display="flex" gap="20px">
    <Skype {...args} />
    <Skype {...args} fill="red.500" />
    <Skype {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
