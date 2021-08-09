import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { IncandescantBulb, IncandescantBulbPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/IncandescantBulb",
  component: IncandescantBulb,
} as ComponentMeta<typeof IncandescantBulb>;

const Template: ComponentStory<typeof IncandescantBulb> = (
  args: IncandescantBulbPropsI
) => (
  <x.div display="flex" gap="20px">
    <IncandescantBulb {...args} />
    <IncandescantBulb {...args} fill="red.500" />
    <IncandescantBulb {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
