import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ExclamationOctagon, ExclamationOctagonPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ExclamationOctagon",
  component: ExclamationOctagon,
} as ComponentMeta<typeof ExclamationOctagon>;

const Template: ComponentStory<typeof ExclamationOctagon> = (
  args: ExclamationOctagonPropsI
) => (
  <x.div display="flex" gap="20px">
    <ExclamationOctagon {...args} />
    <ExclamationOctagon {...args} fill="red.500" />
    <ExclamationOctagon {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
