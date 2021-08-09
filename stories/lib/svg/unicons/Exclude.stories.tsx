import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Exclude, ExcludePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Exclude",
  component: Exclude,
} as ComponentMeta<typeof Exclude>;

const Template: ComponentStory<typeof Exclude> = (args: ExcludePropsI) => (
  <x.div display="flex" gap="20px">
    <Exclude {...args} />
    <Exclude {...args} fill="red.500" />
    <Exclude {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
