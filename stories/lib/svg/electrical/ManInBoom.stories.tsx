import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ManInBoom, ManInBoomPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/ManInBoom",
  component: ManInBoom,
} as ComponentMeta<typeof ManInBoom>;

const Template: ComponentStory<typeof ManInBoom> = (args: ManInBoomPropsI) => (
  <x.div display="flex" gap="20px">
    <ManInBoom {...args} />
    <ManInBoom {...args} fill="red.500" />
    <ManInBoom {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
