import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Flower, FlowerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Flower",
  component: Flower,
} as ComponentMeta<typeof Flower>;

const Template: ComponentStory<typeof Flower> = (args: FlowerPropsI) => (
  <x.div display="flex" gap="20px">
    <Flower {...args} />
    <Flower {...args} fill="red.500" />
    <Flower {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
