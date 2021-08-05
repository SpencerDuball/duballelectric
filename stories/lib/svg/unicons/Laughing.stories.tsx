import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Laughing, LaughingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Laughing",
  component: Laughing,
} as ComponentMeta<typeof Laughing>;

const Template: ComponentStory<typeof Laughing> = (args: LaughingPropsI) => (
  <x.div display="flex" gap="20px">
    <Laughing {...args} />
    <Laughing {...args} fill="red.500" />
    <Laughing {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
