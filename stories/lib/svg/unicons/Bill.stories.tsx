import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bill, BillPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bill",
  component: Bill,
} as ComponentMeta<typeof Bill>;

const Template: ComponentStory<typeof Bill> = (args: BillPropsI) => (
  <x.div display="flex" gap="20px">
    <Bill {...args} />
    <Bill {...args} fill="red.500" />
    <Bill {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
