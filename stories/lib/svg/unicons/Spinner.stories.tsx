import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Spinner, SpinnerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args: SpinnerPropsI) => (
  <x.div display="flex" gap="20px">
    <Spinner {...args} />
    <Spinner {...args} fill="red.500" />
    <Spinner {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
