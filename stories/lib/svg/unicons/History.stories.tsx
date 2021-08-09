import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { History, HistoryPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/History",
  component: History,
} as ComponentMeta<typeof History>;

const Template: ComponentStory<typeof History> = (args: HistoryPropsI) => (
  <x.div display="flex" gap="20px">
    <History {...args} />
    <History {...args} fill="red.500" />
    <History {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
