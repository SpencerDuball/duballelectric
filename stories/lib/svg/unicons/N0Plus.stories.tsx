import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { N0Plus, N0PlusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/N0Plus",
  component: N0Plus,
} as ComponentMeta<typeof N0Plus>;

const Template: ComponentStory<typeof N0Plus> = (args: N0PlusPropsI) => (
  <x.div display="flex" gap="20px">
    <N0Plus {...args} />
    <N0Plus {...args} fill="red.500" />
    <N0Plus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
