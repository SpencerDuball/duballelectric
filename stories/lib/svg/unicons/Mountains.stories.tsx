import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Mountains, MountainsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Mountains",
  component: Mountains,
} as ComponentMeta<typeof Mountains>;

const Template: ComponentStory<typeof Mountains> = (args: MountainsPropsI) => (
  <x.div display="flex" gap="20px">
    <Mountains {...args} />
    <Mountains {...args} fill="red.500" />
    <Mountains {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
