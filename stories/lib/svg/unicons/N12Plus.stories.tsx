import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { N12Plus, N12PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N12Plus",
  component: N12Plus,
} as ComponentMeta<typeof N12Plus>;

const Template: ComponentStory<typeof N12Plus> = (args: N12PlusPropsI) => (
  <x.div display="flex" gap="20px">
    <N12Plus {...args} />
    <N12Plus {...args} fill="red.500" />
    <N12Plus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
