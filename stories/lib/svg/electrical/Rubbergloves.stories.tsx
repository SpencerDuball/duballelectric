import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Rubbergloves, RubberglovesPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/Rubbergloves",
  component: Rubbergloves,
} as ComponentMeta<typeof Rubbergloves>;

const Template: ComponentStory<typeof Rubbergloves> = (
  args: RubberglovesPropsI
) => (
  <x.div display="flex" gap="20px">
    <Rubbergloves {...args} />
    <Rubbergloves {...args} fill="red.500" />
    <Rubbergloves {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
