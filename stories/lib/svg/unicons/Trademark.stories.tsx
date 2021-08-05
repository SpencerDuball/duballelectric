import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Trademark, TrademarkPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Trademark",
  component: Trademark,
} as ComponentMeta<typeof Trademark>;

const Template: ComponentStory<typeof Trademark> = (args: TrademarkPropsI) => (
  <x.div display="flex" gap="20px">
    <Trademark {...args} />
    <Trademark {...args} fill="red.500" />
    <Trademark {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
