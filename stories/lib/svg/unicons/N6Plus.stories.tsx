import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { N6Plus, N6PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N6Plus",
  component: N6Plus,
} as ComponentMeta<typeof N6Plus>;

const Template: ComponentStory<typeof N6Plus> = (args: N6PlusPropsI) => (
  <x.div display="flex" gap="20px">
    <N6Plus {...args} />
    <N6Plus {...args} fill="red.500" />
    <N6Plus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
