import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Dna, DnaPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Dna",
  component: Dna,
} as ComponentMeta<typeof Dna>;

const Template: ComponentStory<typeof Dna> = (args: DnaPropsI) => (
  <x.div display="flex" gap="20px">
    <Dna {...args} />
    <Dna {...args} fill="red.500" />
    <Dna {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
