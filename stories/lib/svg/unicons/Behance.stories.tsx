import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Behance, BehancePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Behance",
  component: Behance,
} as ComponentMeta<typeof Behance>;

const Template: ComponentStory<typeof Behance> = (args: BehancePropsI) => (
  <x.div display="flex" gap="20px">
    <Behance {...args} />
    <Behance {...args} fill="red.500" />
    <Behance {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
