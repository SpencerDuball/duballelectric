import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tablets, TabletsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Tablets",
  component: Tablets,
} as ComponentMeta<typeof Tablets>;

const Template: ComponentStory<typeof Tablets> = (args: TabletsPropsI) => (
  <x.div display="flex" gap="20px">
    <Tablets {...args} />
    <Tablets {...args} fill="red.500" />
    <Tablets {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
