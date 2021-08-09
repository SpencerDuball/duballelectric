import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Plus, PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Plus",
  component: Plus,
} as ComponentMeta<typeof Plus>;

const Template: ComponentStory<typeof Plus> = (args: PlusPropsI) => (
  <x.div display="flex" gap="20px">
    <Plus {...args} />
    <Plus {...args} fill="red.500" />
    <Plus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
