import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Annoyed, AnnoyedPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Annoyed",
  component: Annoyed,
} as ComponentMeta<typeof Annoyed>;

const Template: ComponentStory<typeof Annoyed> = (args: AnnoyedPropsI) => (
  <x.div display="flex" gap="20px">
    <Annoyed {...args} />
    <Annoyed {...args} fill="red.500" />
    <Annoyed {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
