import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Save, SavePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Save",
  component: Save,
} as ComponentMeta<typeof Save>;

const Template: ComponentStory<typeof Save> = (args: SavePropsI) => (
  <x.div display="flex" gap="20px">
    <Save {...args} />
    <Save {...args} fill="red.500" />
    <Save {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
