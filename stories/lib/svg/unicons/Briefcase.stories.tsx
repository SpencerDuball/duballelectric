import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Briefcase, BriefcasePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Briefcase",
  component: Briefcase,
} as ComponentMeta<typeof Briefcase>;

const Template: ComponentStory<typeof Briefcase> = (args: BriefcasePropsI) => (
  <x.div display="flex" gap="20px">
    <Briefcase {...args} />
    <Briefcase {...args} fill="red.500" />
    <Briefcase {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
