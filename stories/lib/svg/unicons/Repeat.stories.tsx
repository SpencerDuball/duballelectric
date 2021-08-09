import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Repeat, RepeatPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Repeat",
  component: Repeat,
} as ComponentMeta<typeof Repeat>;

const Template: ComponentStory<typeof Repeat> = (args: RepeatPropsI) => (
  <x.div display="flex" gap="20px">
    <Repeat {...args} />
    <Repeat {...args} fill="red.500" />
    <Repeat {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
