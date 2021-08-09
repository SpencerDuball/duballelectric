import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Lightbulbs, LightbulbsPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/Lightbulbs",
  component: Lightbulbs,
} as ComponentMeta<typeof Lightbulbs>;

const Template: ComponentStory<typeof Lightbulbs> = (
  args: LightbulbsPropsI
) => (
  <x.div display="flex" gap="20px">
    <Lightbulbs {...args} />
    <Lightbulbs {...args} fill="red.500" />
    <Lightbulbs {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
