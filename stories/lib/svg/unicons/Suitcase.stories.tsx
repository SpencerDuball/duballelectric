import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Suitcase, SuitcasePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Suitcase",
  component: Suitcase,
} as ComponentMeta<typeof Suitcase>;

const Template: ComponentStory<typeof Suitcase> = (args: SuitcasePropsI) => (
  <x.div display="flex" gap="20px">
    <Suitcase {...args} />
    <Suitcase {...args} fill="red.500" />
    <Suitcase {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
