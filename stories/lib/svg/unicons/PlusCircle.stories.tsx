import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PlusCircle, PlusCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PlusCircle",
  component: PlusCircle,
} as ComponentMeta<typeof PlusCircle>;

const Template: ComponentStory<typeof PlusCircle> = (
  args: PlusCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <PlusCircle {...args} />
    <PlusCircle {...args} fill="red.500" />
    <PlusCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
