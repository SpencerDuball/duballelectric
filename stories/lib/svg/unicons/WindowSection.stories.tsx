import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WindowSection, WindowSectionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WindowSection",
  component: WindowSection,
} as ComponentMeta<typeof WindowSection>;

const Template: ComponentStory<typeof WindowSection> = (
  args: WindowSectionPropsI
) => (
  <x.div display="flex" gap="20px">
    <WindowSection {...args} />
    <WindowSection {...args} fill="red.500" />
    <WindowSection {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
