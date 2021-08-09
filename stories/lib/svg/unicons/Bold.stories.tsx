import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bold, BoldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bold",
  component: Bold,
} as ComponentMeta<typeof Bold>;

const Template: ComponentStory<typeof Bold> = (args: BoldPropsI) => (
  <x.div display="flex" gap="20px">
    <Bold {...args} />
    <Bold {...args} fill="red.500" />
    <Bold {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
