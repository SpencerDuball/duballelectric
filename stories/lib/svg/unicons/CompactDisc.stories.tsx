import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CompactDisc, CompactDiscPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CompactDisc",
  component: CompactDisc,
} as ComponentMeta<typeof CompactDisc>;

const Template: ComponentStory<typeof CompactDisc> = (
  args: CompactDiscPropsI
) => (
  <x.div display="flex" gap="20px">
    <CompactDisc {...args} />
    <CompactDisc {...args} fill="red.500" />
    <CompactDisc {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
