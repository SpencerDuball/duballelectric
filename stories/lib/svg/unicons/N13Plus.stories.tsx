import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { N13Plus, N13PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N13Plus",
  component: N13Plus,
} as ComponentMeta<typeof N13Plus>;

const Template: ComponentStory<typeof N13Plus> = (args: N13PlusPropsI) => (
  <x.div display="flex" gap="20px">
    <N13Plus {...args} />
    <N13Plus {...args} fill="red.500" />
    <N13Plus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
