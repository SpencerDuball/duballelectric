import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ListUiAlt, ListUiAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ListUiAlt",
  component: ListUiAlt,
} as ComponentMeta<typeof ListUiAlt>;

const Template: ComponentStory<typeof ListUiAlt> = (args: ListUiAltPropsI) => (
  <x.div display="flex" gap="20px">
    <ListUiAlt {...args} />
    <ListUiAlt {...args} fill="red.500" />
    <ListUiAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
