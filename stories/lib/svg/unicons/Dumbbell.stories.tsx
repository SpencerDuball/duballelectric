import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Dumbbell, DumbbellPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Dumbbell",
  component: Dumbbell,
} as ComponentMeta<typeof Dumbbell>;

const Template: ComponentStory<typeof Dumbbell> = (args: DumbbellPropsI) => (
  <x.div display="flex" gap="20px">
    <Dumbbell {...args} />
    <Dumbbell {...args} fill="red.500" />
    <Dumbbell {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
