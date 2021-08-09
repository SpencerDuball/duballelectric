import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsMerge, ArrowsMergePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsMerge",
  component: ArrowsMerge,
} as ComponentMeta<typeof ArrowsMerge>;

const Template: ComponentStory<typeof ArrowsMerge> = (
  args: ArrowsMergePropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsMerge {...args} />
    <ArrowsMerge {...args} fill="red.500" />
    <ArrowsMerge {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
