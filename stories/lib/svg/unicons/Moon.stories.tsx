import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Moon, MoonPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Moon",
  component: Moon,
} as ComponentMeta<typeof Moon>;

const Template: ComponentStory<typeof Moon> = (args: MoonPropsI) => (
  <x.div display="flex" gap="20px">
    <Moon {...args} />
    <Moon {...args} fill="red.500" />
    <Moon {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
