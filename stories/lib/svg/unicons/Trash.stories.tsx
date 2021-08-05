import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Trash, TrashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Trash",
  component: Trash,
} as ComponentMeta<typeof Trash>;

const Template: ComponentStory<typeof Trash> = (args: TrashPropsI) => (
  <x.div display="flex" gap="20px">
    <Trash {...args} />
    <Trash {...args} fill="red.500" />
    <Trash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
