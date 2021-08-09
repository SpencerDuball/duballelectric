import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Refresh, RefreshPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Refresh",
  component: Refresh,
} as ComponentMeta<typeof Refresh>;

const Template: ComponentStory<typeof Refresh> = (args: RefreshPropsI) => (
  <x.div display="flex" gap="20px">
    <Refresh {...args} />
    <Refresh {...args} fill="red.500" />
    <Refresh {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
