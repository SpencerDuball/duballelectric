import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Cog, CogPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Cog",
  component: Cog,
} as ComponentMeta<typeof Cog>;

const Template: ComponentStory<typeof Cog> = (args: CogPropsI) => (
  <x.div display="flex" gap="20px">
    <Cog {...args} />
    <Cog {...args} fill="red.500" />
    <Cog {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
