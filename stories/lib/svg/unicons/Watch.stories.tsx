import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Watch, WatchPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Watch",
  component: Watch,
} as ComponentMeta<typeof Watch>;

const Template: ComponentStory<typeof Watch> = (args: WatchPropsI) => (
  <x.div display="flex" gap="20px">
    <Watch {...args} />
    <Watch {...args} fill="red.500" />
    <Watch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
