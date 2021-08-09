import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WindowGrid, WindowGridPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WindowGrid",
  component: WindowGrid,
} as ComponentMeta<typeof WindowGrid>;

const Template: ComponentStory<typeof WindowGrid> = (
  args: WindowGridPropsI
) => (
  <x.div display="flex" gap="20px">
    <WindowGrid {...args} />
    <WindowGrid {...args} fill="red.500" />
    <WindowGrid {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
