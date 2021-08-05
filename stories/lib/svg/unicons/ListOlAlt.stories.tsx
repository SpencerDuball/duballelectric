import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ListOlAlt, ListOlAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ListOlAlt",
  component: ListOlAlt,
} as ComponentMeta<typeof ListOlAlt>;

const Template: ComponentStory<typeof ListOlAlt> = (args: ListOlAltPropsI) => (
  <x.div display="flex" gap="20px">
    <ListOlAlt {...args} />
    <ListOlAlt {...args} fill="red.500" />
    <ListOlAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
