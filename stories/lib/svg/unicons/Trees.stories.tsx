import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Trees, TreesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Trees",
  component: Trees,
} as ComponentMeta<typeof Trees>;

const Template: ComponentStory<typeof Trees> = (args: TreesPropsI) => (
  <x.div display="flex" gap="20px">
    <Trees {...args} />
    <Trees {...args} fill="red.500" />
    <Trees {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
