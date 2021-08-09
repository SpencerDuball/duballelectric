import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BabyCarriage, BabyCarriagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BabyCarriage",
  component: BabyCarriage,
} as ComponentMeta<typeof BabyCarriage>;

const Template: ComponentStory<typeof BabyCarriage> = (
  args: BabyCarriagePropsI
) => (
  <x.div display="flex" gap="20px">
    <BabyCarriage {...args} />
    <BabyCarriage {...args} fill="red.500" />
    <BabyCarriage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
