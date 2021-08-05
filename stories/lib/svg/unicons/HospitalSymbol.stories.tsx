import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HospitalSymbol, HospitalSymbolPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/HospitalSymbol",
  component: HospitalSymbol,
} as ComponentMeta<typeof HospitalSymbol>;

const Template: ComponentStory<typeof HospitalSymbol> = (
  args: HospitalSymbolPropsI
) => (
  <x.div display="flex" gap="20px">
    <HospitalSymbol {...args} />
    <HospitalSymbol {...args} fill="red.500" />
    <HospitalSymbol {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
