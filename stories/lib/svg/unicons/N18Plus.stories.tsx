import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { N18Plus, N18PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N18Plus",
  component: N18Plus,
} as ComponentMeta<typeof N18Plus>;

const Template: ComponentStory<typeof N18Plus> = (args: N18PlusPropsI) => (
  <x.div display="flex" gap="20px">
    <N18Plus {...args} />
    <N18Plus {...args} fill="red.500" />
    <N18Plus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
